import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface WaitlistFormProps {
  size?: 'default' | 'compact';
  className?: string;
}

export const WaitlistForm = ({ size = 'default', className = '' }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('waitlist_signups')
        .insert([
          {
            email,
            referral_source: 'website',
            user_agent: navigator.userAgent
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already on the list!",
            description: "This email is already registered for the waitlist.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        setIsSubmitted(true);
        toast({
          title: "Welcome to the waitlist!",
          description: "We'll notify you when DailyDrop launches on the App Store.",
        });
      }
    } catch (error) {
      console.error('Error signing up for waitlist:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isCompact = size === 'compact';

  if (isSubmitted) {
    return (
      <Card className={`p-6 text-center bg-success/5 border-success/20 ${isCompact ? 'max-w-sm' : 'max-w-md'} mx-auto ${className} animate-scale-in`}>
        <div className="space-y-3">
          <div className="text-3xl animate-float">🎉</div>
          <h3 className={`font-bold text-success ${isCompact ? 'text-lg' : 'text-2xl'} animate-fade-in-up`}>You're on the list!</h3>
          <p className={`text-muted-foreground ${isCompact ? 'text-sm' : ''} animate-fade-in-up`} style={{animationDelay: '0.1s'}}>
            We'll email you when DailyDrop launches.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className={`p-6 ${isCompact ? 'max-w-sm' : 'max-w-md'} mx-auto bg-[var(--gradient-card)] shadow-[var(--shadow-card)] ${className} animate-scale-in hover:shadow-lg transition-all duration-300`}>
      <form onSubmit={handleSubmit} className={`space-y-${isCompact ? '4' : '6'}`}>
        {!isCompact && (
          <div className="text-center space-y-2 animate-fade-in-up">
            <h3 className="text-2xl font-bold">Join the Waitlist</h3>
            <p className="text-muted-foreground">
              Be the first to know when DailyDrop launches
            </p>
          </div>
        )}
        
        <div className="space-y-3 animate-fade-in-up" style={{animationDelay: isCompact ? '0s' : '0.2s'}}>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`text-center ${isCompact ? 'py-2' : 'text-lg py-3'} transition-all duration-300 focus:scale-105`}
          />
          
          <Button 
            type="submit" 
            className={`w-full ${isCompact ? 'py-2' : 'text-lg py-3'} transition-all duration-500 hover:scale-105 hover:shadow-[var(--glow-primary)] relative group overflow-hidden ${isLoading ? 'animate-glow' : 'animate-glow'}`}
            disabled={isLoading}
          >
            <span className="relative z-10">{isLoading ? "Joining..." : "Join Waitlist"}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-success to-primary bg-[length:200%_auto] animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
        </div>
        
        <p className={`text-xs text-muted-foreground text-center animate-fade-in-up`} style={{animationDelay: isCompact ? '0.1s' : '0.4s'}}>
          No spam, ever. Unsubscribe anytime.
        </p>
      </form>
    </Card>
  );
};