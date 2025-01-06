interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <article
      className={`w-full max-w-screen-sm mx-auto flex flex-col gap-16 ${className}`}
    >
      {children}
    </article>
  );
}
