export default function Container({ children, className }) {
  return (
    <div className={` w-full max-w-350 mx-auto ${className} `}>{children}</div>
  );
}
