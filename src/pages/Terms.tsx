import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8"
        >
          ← Back to Home
        </Button>
        
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using DailyDrop ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground">
              DailyDrop is a habit-building application that uses financial incentives to help users maintain daily habits. Users deposit money as bonds for their habits and receive their deposits back upon successful completion of their daily goals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide accurate and truthful information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the Service in compliance with all applicable laws</li>
              <li>Not engage in any activity that interferes with or disrupts the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Financial Terms</h2>
            <p className="text-muted-foreground mb-4">
              When using DailyDrop's habit bond feature:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You authorize us to charge your selected payment method for habit bonds</li>
              <li>Successful completion of habits results in full refund of your bond</li>
              <li>Failed habits may result in forfeiture of your bond as specified in the app</li>
              <li>All transactions are processed securely through our payment partners</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Privacy and Data Protection</h2>
            <p className="text-muted-foreground">
              Your use of our Service is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="text-muted-foreground">
              The Service and its original content, features, and functionality are and will remain the exclusive property of DailyDrop and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks may not be used in connection with any product or service without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p className="text-muted-foreground">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Disclaimer</h2>
            <p className="text-muted-foreground">
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              In no event shall DailyDrop, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide notice prior to any new terms taking effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact us at dailydropteam@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;