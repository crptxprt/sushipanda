export type Inquiry = {
  name: string;
  phone: string;
  email: string;
  event_date?: string;
  guest_count?: number;
  message?: string;
  page_source?: string;
};

export async function submitInquiry(_data: Inquiry) {
  // The landing page is intentionally detached from any backend for now.
  return Promise.resolve();
}
