import { cn } from "../../utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24",
        className
      )}
    >
      {children}
    </section>
  );
}