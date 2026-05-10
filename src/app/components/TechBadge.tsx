interface TechBadgeProps {
  name: string;
  variant?: "default" | "gold" | "outline";
}

export function TechBadge({ name, variant = "default" }: TechBadgeProps) {
  const variants = {
    default: "bg-[#f5f1eb] text-[#2b2b2b] border border-gray-200",
    gold: "bg-gradient-to-r from-[#c9965b] to-[#d8a56a] text-white",
    outline: "bg-transparent text-[#2b2b2b] border border-[#c9965b]"
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}>
      {name}
    </span>
  );
}
