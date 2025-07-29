import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const WaitlistForm = () => {
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

  if (isSubmitted) {
    return (
      <Card className="p-8 text-center bg-success/5 border-success/20 max-w-md mx-auto">
        <div className="space-y-4">
          <div className="text-4xl">🎉</div>
          <h3 className="text-2xl font-bold text-success">You're on the list!</h3>
          <p className="text-muted-foreground">
            We'll email you the moment DailyDrop is available for download.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 max-w-md mx-auto bg-[var(--gradient-card)] shadow-[var(--shadow-card)]">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">Join the Waitlist</h3>
          <p className="text-muted-foreground">
            Be the first to know when DailyDrop launches
          </p>
        </div>
        
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-center text-lg py-3"
          />
          
          <Button 
            type="submit" 
            className="w-full text-lg py-3"
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