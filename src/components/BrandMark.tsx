import wordmark from '../assets/panda-sushi-wordmark-color.png';

interface BrandMarkProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'floating' | 'bare' | 'footer';
}

const sizes = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
};

export default function BrandMark({ size = 'md', className = '', variant = 'floating' }: BrandMarkProps) {
  if (variant === 'footer') {
    return (
      <span className={`inline-flex flex-col items-start leading-none ${className}`}>
        <span className="font-sans text-[2rem] font-black uppercase tracking-[-0.08em] text-white sm:text-[2.25rem]">
          PANDA
        </span>
        <span className="mt-0.5 pl-[2.15rem] font-sans text-[1rem] font-black uppercase tracking-[-0.04em] text-[#ff5a2a] sm:text-[1.15rem]">
          SUSHI
        </span>
      </span>
    );
  }

  const baseClass =
    variant === 'bare'
      ? 'inline-flex items-center'
      : 'inline-flex items-center rounded-full border border-white/10 bg-[#1b1416]/90 px-4 py-2 shadow-[0_12px_40px_rgba(24,14,18,0.22)] backdrop-blur-md';

  return (
    <span className={`${baseClass} ${className}`}>
      <img
        src={wordmark}
        alt="Sushi Panda"
        className={`${sizes[size]} w-auto object-contain`}
      />
    </span>
  );
}
