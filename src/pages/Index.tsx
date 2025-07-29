import { HeroSection } from "@/components/HeroSection";
import { HabitsGrid } from "@/components/HabitsGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { SocialProof } from "@/components/SocialProof";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <HabitsGrid />
      <SocialProof />
      <section className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold animate-fade-in-up">Ready to Transform Your Habits?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              Join thousands on the waitlist. Be among the first to experience habit accountability 
              that actually works through real financial commitment.
            </p>
            <div className="animate-scale-in" style={{animationDelay: '0.2s'}}>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
