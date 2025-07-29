export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground text-background">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">DailyDrop</h3>
          <p className="text-background/70 max-w-md mx-auto">
            Habit accountability through financial commitment. Coming soon to iOS.
          </p>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
          <p>&copy; 2025 DailyDrop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};