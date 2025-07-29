import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the money-back system work?",
    answer: "You deposit $1-$20 per habit per day. If you complete your habit (verified automatically), you get your full deposit back. If you fail, the money becomes a service fee. You can never win more than you deposit."
  },
  {
    question: "How are habits verified automatically?",
    answer: "DailyDrop uses your iPhone's built-in sensors and apps: HealthKit for steps/sleep/exercise, Screen Time for app usage, and integrations with apps like Apple Books. No manual check-ins required."
  },
  {
    question: "Is this gambling?",
    answer: "No. You can only get back what you put in—there's no upside or winnings. This is pure accountability. You're paying for a service that helps enforce your habits through financial commitment."
  },
  {
    question: "What happens if I travel or get sick?",
    answer: "Premium subscribers get 'insurance days' and other features to handle life's interruptions fairly. The goal is accountability, not punishment for things outside your control."
  },
  {
    question: "How much does DailyDrop cost?",
    answer: "The basic habit tracking and money bonds are free. Premium features like analytics, insurance days, and friend support cost $2.99/week, $9.99/month, or $79.99/year with a 3-day free trial."
  },
  {
    question: "When will DailyDrop be available?",
    answer: "We're in private beta now. Join the waitlist to be notified when we launch on the App Store. We'll also send early access invites to waitlist members."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about DailyDrop
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6 border">
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};