import { Card } from "@/components/ui/card";

const stats = [
  { number: "89%", label: "Success Rate", description: "Users who complete habits with money on the line" },
  { number: "$47", label: "Average Monthly Risk", description: "Most users risk to build lasting habits" },
  { number: "21", label: "Days", description: "Average time to form a new habit" },
  { number: "12", label: "Verified Habits", description: "Automatically tracked through your device" }
];

const testimonials = [
  {
    quote: "I've tried every habit app out there. DailyDrop is the only one that actually works because there are real consequences.",
    author: "Sarah M.",
    title: "Beta Tester"
  },
  {
    quote: "Putting money on the line changed everything. I haven't missed my morning workout in 3 months.",
    author: "David L.", 
    title: "Early Adopter"
  },
  {
    quote: "The automatic verification is brilliant. No cheating, no excuses, just results.",
    author: "Maya P.",
    title: "Beta Tester"
  }
];

export const SocialProof = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-[var(--gradient-card)] shadow-[var(--shadow-card)]">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">{stat.number}</div>
                <div className="font-semibold">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Beta Users Say</h2>
          <p className="text-xl text-muted-foreground">
            Real feedback from people who've used DailyDrop to transform their habits
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-[var(--gradient-card)] shadow-[var(--shadow-card)]">
              <div className="space-y-4">
                <div className="text-primary text-2xl">"</div>
                <p className="text-muted-foreground italic">{testimonial.quote}</p>
                <div className="space-y-1">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};