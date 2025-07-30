import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const stats = [
  { number: 89, suffix: "%", label: "Success Rate", description: "Users who complete habits with money on the line" },
  { number: 47, suffix: "", prefix: "$", label: "Average Monthly Risk", description: "Most users risk to build lasting habits" },
  { number: 21, suffix: "", label: "Days", description: "Average time to form a new habit" },
  { number: 12, suffix: "", label: "Verified Habits", description: "Automatically tracked through your device" }
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
            <Card 
              key={index} 
              className="p-6 text-center bg-[var(--gradient-card)] shadow-[var(--shadow-card)] animate-scale-in hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 hover:scale-110 group relative overflow-hidden" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-2 relative z-10">
                <div className="text-3xl font-bold text-primary animate-fade-in-up group-hover:animate-bounce-gentle transition-all duration-300 group-hover:scale-110" style={{animationDelay: `${index * 0.1 + 0.2}s`}}>
                  {stat.prefix && stat.prefix}
                  <AnimatedCounter end={stat.number} duration={2000 + index * 200} suffix={stat.suffix} />
                </div>
                <div className="font-semibold animate-fade-in-up group-hover:text-primary transition-colors duration-300" style={{animationDelay: `${index * 0.1 + 0.3}s`}}>{stat.label}</div>
                <div className="text-sm text-muted-foreground animate-fade-in-up group-hover:text-foreground transition-colors duration-300" style={{animationDelay: `${index * 0.1 + 0.4}s`}}>{stat.description}</div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Testimonials Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">What Beta Users Say</h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Real feedback from people who've used DailyDrop to transform their habits
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 bg-[var(--gradient-card)] shadow-[var(--shadow-card)] animate-scale-in hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 hover:scale-105 group relative overflow-hidden" 
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-4 relative z-10">
                <div className="text-primary text-2xl group-hover:animate-bounce-gentle transition-all duration-300">"</div>
                <p className="text-muted-foreground italic group-hover:text-foreground transition-colors duration-300">{testimonial.quote}</p>
                <div className="space-y-1">
                  <div className="font-semibold group-hover:text-primary transition-colors duration-300">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{testimonial.title}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};