import wordmark from '../assets/panda-sushi-wordmark-color.png';

interface BrandMarkProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: 'h-7',
  md: 'h-8',
  lg: 'h-10',
};

export default function BrandMark({ size = 'md', className = '' }: BrandMarkProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/10 bg-[#1b1416]/90 px-4 py-2 shadow-[0_12px_40px_rgba(24,14,18,0.22)] backdrop-blur-md ${className}`}
    >
      <img
        src={wordmark}
        alt="Sushi Panda"
        className={`${sizes[size]} w-auto object-contain`}
      />
    </span>
  );
}
