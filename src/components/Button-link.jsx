export const ButtonLink = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses =
    "button-link relative overflow-hidden text-white focus-visible:text-black font-medium leading-none font-mono gradient-button";

  const sizeClasses = {
    sm: "px-2 py-2 text-xs",
    default: "px-3 py-3 text-xs",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <a className={classes} {...props} target="_blank">
      <span className="relative flex items-center justify-center cursor-pointer">
        {children}
      </span>
    </a>
  );
};
