import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-5" />
      
      <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Put Your Money Where Your 
              <span className="text-primary"> Habits</span> Are
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              DailyDrop enforces your habits with real money bonds. Complete your daily goals and get your deposit back. Fail, and you pay the price.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg">
              Join the Waitlist
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              How It Works
            </Button>
          </div>
          
          <Card className="p-6 bg-[var(--gradient-card)] shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Risk $1-$20 per habit</h3>
                <p className="text-muted-foreground">Complete your habit, get your money back. It's that simple.</p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="relative">
          <img 
            src={heroImage} 
            alt="DailyDrop habit tracking app interface" 
            className="w-full rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-success text-success-foreground px-6 py-3 rounded-full font-semibold shadow-lg">
            Money Back Guaranteed
          </div>
        </div>
      </div>
    </section>
  );
};