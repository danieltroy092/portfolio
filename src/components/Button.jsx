export const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses =
    "button relative overflow-hidden font-medium focus:outline-none focus-visible:ring-2 focus visible:ring-primary text-primary-foreground active:text-primary hover:bg-primary/90 shadow-primary/25 leading-none font-mono";

  const sizeClasses = {
    sm: "px-2 py-2 text-xs",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2 cursor-pointer">
        {children}
      </span>
    </button>
  );
};
