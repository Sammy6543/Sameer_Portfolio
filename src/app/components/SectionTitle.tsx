interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-3xl font-bold text-[#2b2b2b] relative inline-block">
        {title}
        <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-[#c9965b] to-[#d8a56a] rounded-full"></div>
      </h2>
    </div>
  );
}
