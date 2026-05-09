/*
  # Create inquiries table for Sushi Panda catering

  ## Summary
  Creates the `inquiries` table to store catering inquiry form submissions
  from the website contact/CTA forms.

  ## New Tables
  - `inquiries`
    - `id` (uuid, primary key, auto-generated)
    - `name` (text, required) - Full name of the person inquiring
    - `phone` (text, required) - Contact phone number
    - `email` (text, required) - Contact email address
    - `event_date` (date, nullable) - Planned date of the event
    - `guest_count` (integer, nullable) - Estimated number of guests
    - `message` (text, nullable) - Additional notes/message
    - `page_source` (text, default 'home') - Which page the form was submitted from
    - `created_at` (timestamptz, auto) - Submission timestamp

  ## Security
  - RLS enabled
  - Anonymous users can INSERT (public contact form)
  - Authenticated users can SELECT their submissions (admin access)
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  event_date date,
  guest_count integer,
  message text,
  page_source text NOT NULL DEFAULT 'home',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an inquiry"
  ON inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON inquiries
  FOR SELECT
  TO authenticated
  USING (true);
