import { motion } from "framer-motion";

export function Button({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left"
}) {
  const variants = {
    primary: {
      bg: "bg-navy-700 hover:bg-navy-800 focus:ring-navy-500",
      text: "text-gold-100",
      border: "border border-navy-800"
    },
    secondary: {
      bg: "bg-gold-600 hover:bg-gold-700 focus:ring-gold-500",
      text: "text-navy-900",
      border: "border border-gold-600"
    },
    outline: {
      bg: "bg-transparent hover:bg-navy-100 dark:hover:bg-navy-800 focus:ring-navy-500",
      text: "text-navy-700 dark:text-gold-300",
      border: "border border-navy-700 dark:border-gold-500"
    },
    ghost: {
      bg: "bg-transparent hover:bg-navy-100 dark:hover:bg-navy-800 focus:ring-navy-500",
      text: "text-navy-700 dark:text-gold-300",
      border: "border border-transparent"
    }
  };

  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg"
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${variants[variant].bg} 
        ${variants[variant].text} 
        ${variants[variant].border}
        ${sizes[size]}
        rounded-lg font-medium 
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        transition-all duration-200 ease-in-out
        flex items-center justify-center gap-2
        ${disabled ? "opacity-60 cursor-not-allowed" : ""}
        ${className}
      `}
      whileHover={!disabled ? { scale: 1.03 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {icon && iconPosition === "left" && (
        <span className="inline-flex">
          {loading ? (
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            icon
          )}
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="inline-flex">
          {loading ? (
            <svg className="animate-spin -mr-1 ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            icon
          )}
        </span>
      )}
      {loading && !icon && (
        <svg className="animate-spin ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
    </motion.button>
  );
}