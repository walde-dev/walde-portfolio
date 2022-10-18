export default function TextContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center font-light rounded-2xl border border-violet-500 p-12 shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
