import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground text-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold">DailyDrop</h3>
          <p className="text-background/70 max-w-md mx-auto">
            Habit accountability through financial commitment. Coming soon to iOS.
          </p>
        </div>
        
        <div className="flex justify-center gap-6 mt-6">
          <Link to="/terms" className="text-background/70 hover:text-background transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy" className="text-background/70 hover:text-background transition-colors">
            Privacy Policy
          </Link>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
          <p>&copy; 2025 DailyDrop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};