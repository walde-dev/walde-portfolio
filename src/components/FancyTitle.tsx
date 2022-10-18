export default function FancyTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="group relative flex flex-col rounded-lg">
      <div className="gradient-bright absolute -inset-0.5 rounded-lg group-hover:transition-all group-hover:duration-200 duration-1000 group-hover:opacity-100 opacity-50 blur-sm" />
      <div className="relative rounded-lg bg-[hsl(238,43%,5%)] py-3 px-7 text-lg font-light">
        {children}
      </div>
    </div>
  );
}
