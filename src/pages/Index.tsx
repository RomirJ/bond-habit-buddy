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
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the waitlist and be the first to experience habit accountability that actually works.
          </p>
          <WaitlistForm size="compact" />
        </div>
      </section>
      <HowItWorks />
      <HabitsGrid />
      <SocialProof />
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Ready to Transform Your Habits?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands on the waitlist. Be among the first to experience habit accountability 
              that actually works through real financial commitment.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
