import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Inquiry = {
  name: string;
  phone: string;
  email: string;
  event_date?: string;
  guest_count?: number;
  message?: string;
  page_source?: string;
};

export async function submitInquiry(data: Inquiry) {
  const { error } = await supabase.from('inquiries').insert([data]);
  if (error) throw error;
}
