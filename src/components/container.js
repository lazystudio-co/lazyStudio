export default function Container({ children, className }) {
  return (
    <div className={` w-full max-w-350 mx-auto px-5 sm:px-8 lg:px-10 xl:px-0 ${className} `}>{children}</div>
  );
}
