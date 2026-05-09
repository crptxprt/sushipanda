import { useState } from 'react';
import { submitInquiry } from '../lib/supabase';
import { CheckCircle } from 'lucide-react';

interface ContactFormProps {
  source?: string;
  className?: string;
}

const initialState = {
  name: '',
  phone: '',
  email: '',
  event_date: '',
  guest_count: '',
  message: '',
};

const inputClass =
  'w-full border-b border-stone-200 bg-transparent px-0 py-3 text-[14px] text-[#111111] placeholder-stone-400 focus:outline-none focus:border-sp-dark transition-colors font-light';

const labelClass = 'block text-[10px] tracking-widest2 uppercase text-stone-400 mb-1';

export default function ContactForm({ source = 'home', className = '' }: ContactFormProps) {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await submitInquiry({
        name: form.name,
        phone: form.phone,
        email: form.email,
        event_date: form.event_date || undefined,
        guest_count: form.guest_count ? parseInt(form.guest_count) : undefined,
        message: form.message || undefined,
        page_source: source,
      });
      setSuccess(true);
      setForm(initialState);
    } catch {
      setError('Došlo je do greške. Pokušajte ponovo.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className={`flex flex-col items-center justify-center py-20 text-center ${className}`}>
        <CheckCircle className="text-[#C41230] mb-6" size={40} strokeWidth={1} />
        <h3 className="font-serif text-2xl font-light mb-3">Hvala na upitu!</h3>
        <p className="text-stone-400 text-[13px] font-light leading-relaxed max-w-[260px]">
          Kontaktiraćemo vas u roku od 2 sata.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-8 text-[10px] tracking-widest2 uppercase text-stone-400 hover:text-[#C41230] transition-colors"
        >
          Pošalji novi upit →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-7 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <div>
          <label className={labelClass}>Ime i prezime *</label>
          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Vaše ime" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Telefon *</label>
          <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+381 60 000 0000" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Email *</label>
        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="vas@email.com" className={inputClass} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <div>
          <label className={labelClass}>Datum događaja</label>
          <input type="date" name="event_date" value={form.event_date} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Broj osoba</label>
          <input type="number" name="guest_count" min="1" value={form.guest_count} onChange={handleChange} placeholder="npr. 30" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Poruka</label>
        <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Opišite vaš događaj..." className={`${inputClass} resize-none`} />
      </div>

      {error && <p className="text-[#C41230] text-[13px]">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#111111] text-white text-[10px] tracking-widest2 uppercase py-4 hover:bg-[#C41230] transition-colors duration-300 disabled:opacity-50 mt-4"
      >
        {loading ? 'Slanje...' : 'Pošalji upit'}
      </button>
    </form>
  );
}
