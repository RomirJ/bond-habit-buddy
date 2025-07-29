export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground text-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">DailyDrop</h3>
            <p className="text-background/70">
              Habit accountability through financial commitment
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-background/70">
              <li>How It Works</li>
              <li>Supported Habits</li>
              <li>Pricing</li>
              <li>Beta Program</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-background/70">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Refund Policy</li>
              <li>App Store Guidelines</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-background/70">
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Beta Feedback</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
          <p>&copy; 2024 DailyDrop. All rights reserved. Coming soon to the App Store.</p>
        </div>
      </div>
    </footer>
  );
};