"use client";

export default function Button({
  text,
  onClick,
  icon,
  type = "button",
  className = "bg-secondaryBg flex  text-white font-normal py-3 px-4 rounded-lg",
}) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {icon && <span className="mr-3 items-center justify-center flex h-5 w-5">{icon}</span>}
      {text}
    </button>
  );
}
