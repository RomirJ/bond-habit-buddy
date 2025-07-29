import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WaitlistForm } from "@/components/WaitlistForm";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 py-20">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-5" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Early Waitlist CTA */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 animate-pulse-glow">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Early Access Available
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Be First to Transform Your Habits
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Join the waitlist and get early access to the only habit app that uses real money bonds to ensure you succeed.
          </p>
          <div className="animate-scale-in" style={{animationDelay: '0.3s'}}>
            <WaitlistForm size="compact" />
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-slide-in-left">
                Put Your Money Where Your 
                <span className="text-primary"> Habits</span> Are
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                DailyDrop enforces your habits with real money bonds. Complete your daily goals and get your deposit back. Fail, and you pay the price.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left" style={{animationDelay: '0.4s'}}>
              <Button variant="hero" size="lg" className="text-lg">
                Join the Waitlist
              </Button>
              <Button variant="outline" size="lg" className="text-lg" onClick={() => {
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                How It Works
              </Button>
            </div>
            
            <Card className="p-6 bg-[var(--gradient-card)] shadow-[var(--shadow-card)] animate-slide-in-left hover:shadow-lg transition-all duration-300" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full animate-float">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Risk $1-$20 per habit</h3>
                  <p className="text-muted-foreground">Complete your habit, get your money back. It's that simple.</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="relative animate-slide-in-right">
            <img 
              src={heroImage} 
              alt="DailyDrop habit tracking app interface" 
              className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-success text-success-foreground px-6 py-3 rounded-full font-semibold shadow-lg animate-float">
              Money Back Guaranteed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};