import Image from 'next/image';

export const GCCLogo = ({ width = 100, height = 100 }: { width?: number; height?: number }) => {
  return <Image priority src="/logo.svg" alt="GCC Logo" width={width} height={height} />;
};

export const GCCTextLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <GCCLogo width={54} height={54} />
      <div className="hidden flex-col md:flex">
        <div className="font-serif text-sm uppercase tracking-widest text-accent lg:text-base">Garelochhead</div>
        <div className="font-sans text-2xs uppercase tracking-widest text-secondary lg:text-xs">Community Council</div>
      </div>
    </div>
  );
};
