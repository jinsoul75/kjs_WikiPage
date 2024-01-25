export default function H1({ children, ...props }: { children: string }) {
  return <h2 className='text-3xl font-extrabold' {...props}>{children}</h2>;
}
