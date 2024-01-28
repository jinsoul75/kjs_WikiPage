export default function Title({ children, ...props }: { children?: string }) {
  return (
    <h1 className="text-xl font-bold" {...props}>
      {children}
    </h1>
  );
}
