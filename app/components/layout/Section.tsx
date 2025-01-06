interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return <section className={`py-40 ${className}`}>{children}</section>;
}
