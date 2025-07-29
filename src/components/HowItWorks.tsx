import { Card } from "@/components/ui/card";

const steps = [
  {
    step: "1",
    title: "Choose Your Habits",
    description: "Select from 12 scientifically-backed habits and set your daily targets",
    icon: "🎯"
  },
  {
    step: "2", 
    title: "Put Money on the Line",
    description: "Risk $1-$20 per habit per day. Higher stakes, stronger motivation",
    icon: "💰"
  },
  {
    step: "3",
    title: "Automatic Verification",
    description: "Your iPhone tracks progress through HealthKit, Screen Time, and app integrations",
    icon: "📊"
  },
  {
    step: "4",
    title: "Get Your Money Back",
    description: "Complete your habit and receive your full deposit back. Fail and pay the fee",
    icon: "🎉"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How DailyDrop Works</h2>
          <p className="text-xl text-muted-foreground">
            Simple, automatic, and effective habit enforcement
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center relative bg-[var(--gradient-card)] shadow-[var(--shadow-card)]">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {step.step}
              </div>
              <div className="pt-4 space-y-4">
                <div className="text-4xl">{step.icon}</div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="p-8 bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">No Upside, Just Accountability</h3>
            <p className="text-muted-foreground">
              DailyDrop isn't gambling—it's pure accountability. You can only get back what you put in. 
              This isn't about winning money, it's about building life-changing habits through financial commitment.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};