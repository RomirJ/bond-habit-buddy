import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    toast({
      title: "Welcome to the waitlist!",
      description: "We'll notify you when DailyDrop launches on the App Store.",
    });
  };

  const isCompact = size === 'compact';

  if (isSubmitted) {
    return (
      <Card className={`p-6 text-center bg-success/5 border-success/20 ${isCompact ? 'max-w-sm' : 'max-w-md'} mx-auto ${className}`}>
        <div className="space-y-3">
          <div className="text-3xl">🎉</div>
          <h3 className={`font-bold text-success ${isCompact ? 'text-lg' : 'text-2xl'}`}>You're on the list!</h3>
          <p className={`text-muted-foreground ${isCompact ? 'text-sm' : ''}`}>
            We'll email you when DailyDrop launches.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className={`p-6 ${isCompact ? 'max-w-sm' : 'max-w-md'} mx-auto bg-[var(--gradient-card)] shadow-[var(--shadow-card)] ${className}`}>
      <form onSubmit={handleSubmit} className={`space-y-${isCompact ? '4' : '6'}`}>
        {!isCompact && (
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold">Join the Waitlist</h3>
            <p className="text-muted-foreground">
              Be the first to know when DailyDrop launches
            </p>
          </div>
        )}
        
        <div className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`text-center ${isCompact ? 'py-2' : 'text-lg py-3'}`}
          />
          
          <Button 
            type="submit" 
            className={`w-full ${isCompact ? 'py-2' : 'text-lg py-3'}`}
            disabled={isLoading}
          >
            {isLoading ? "Joining..." : "Join Waitlist"}
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground text-center">
          No spam, ever. Unsubscribe anytime.
        </p>
      </form>
    </Card>
  );
};