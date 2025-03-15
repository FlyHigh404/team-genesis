export default function Icon({ children, bgColor, ...props }) {
  return (
    <div
      {...props}
      className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md ${bgColor} ${props.className}`}
    >
      {children}
    </div>
  );
}