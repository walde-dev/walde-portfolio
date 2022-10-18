export default function TextContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass-bg flex items-center justify-center font-light rounded-2xl p-12 shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
