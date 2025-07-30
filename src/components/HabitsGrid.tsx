import { Card } from "@/components/ui/card";

const habits = [
  { name: "Walk 10,000 Steps", icon: "🚶", description: "Daily step tracking via HealthKit" },
  { name: "Sleep 7+ Hours", icon: "😴", description: "Quality sleep monitoring" },
  { name: "Drink 64oz Water", icon: "💧", description: "Stay hydrated throughout the day" },
  { name: "Exercise 30+ Minutes", icon: "💪", description: "Any workout counts" },
  { name: "Meditate 10 Minutes", icon: "🧘", description: "Mindfulness practice" },
  { name: "Limit Social Media", icon: "📱", description: "Less than 30 minutes daily" },
  { name: "Read 20 Minutes", icon: "📚", description: "Books, articles, or e-readers" },
  { name: "Track Expenses", icon: "💳", description: "Financial awareness" },
  { name: "Wake Up Early", icon: "⏰", description: "Set your ideal wake time" },
  { name: "Complete 3 Tasks", icon: "✅", description: "Daily productivity goals" },
  { name: "Journal 5 Minutes", icon: "📝", description: "Reflection and writing" },
  { name: "Phone-Free Morning", icon: "🌅", description: "1 hour after waking" }
];

export const HabitsGrid = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">12 Powerful Habits to Master</h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Each habit is automatically verified through your device sensors and apps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {habits.map((habit, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 hover:scale-110 bg-[var(--gradient-card)] animate-scale-in group relative overflow-hidden cursor-pointer" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-3 relative z-10">
                <div className="text-3xl group-hover:animate-bounce-gentle transition-all duration-300 group-hover:scale-110">{habit.icon}</div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">{habit.name}</h3>
                <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">{habit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};