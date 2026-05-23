import wordmark from '../assets/panda-catering-logo.png';
import wordmarkWhite from '../assets/panda-sushi-wordmark-white.png';

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
      <span className={`inline-flex items-center ${className}`}>
        <img
          src={wordmarkWhite}
          alt="Sushi Panda"
          className="h-10 w-auto object-contain sm:h-12"
        />
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
