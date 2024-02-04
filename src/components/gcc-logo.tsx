import Image from 'next/image';

export const GCCLogo = ({ width = 100, height = 100 }: { width?: number; height?: number }) => {
  return <Image priority src="/logo.svg" alt="GCC Logo" width={width} height={height} />;
};

export const GCCTextLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <GCCLogo width={54} height={54} />
      <div className="flex flex-col">
        <div className="font-serif uppercase tracking-widest">Garelochhead</div>
        <div className="font-sans text-xs uppercase tracking-widest">Community Council</div>
      </div>
    </div>
  );
};
