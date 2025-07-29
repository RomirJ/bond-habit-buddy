-- Create waitlist table to store email signups
CREATE TABLE public.waitlist_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  referral_source TEXT,
  user_agent TEXT
);

-- Enable Row Level Security
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public waitlist)
CREATE POLICY "Anyone can sign up for waitlist" 
ON public.waitlist_signups 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading for analytics (you can restrict this later)
CREATE POLICY "Waitlist signups are viewable by everyone" 
ON public.waitlist_signups 
FOR SELECT 
USING (true);

-- Create index for performance
CREATE INDEX idx_waitlist_signups_email ON public.waitlist_signups(email);
CREATE INDEX idx_waitlist_signups_created_at ON public.waitlist_signups(created_at DESC);