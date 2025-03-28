import { motion } from "framer-motion";

export function Card({ 
  children, 
  className = "", 
  variant = "default",
  hoverEffect = false,
  animation = true
}) {
  const variants = {
    default: "bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-700",
    elevated: "bg-white dark:bg-navy-800 shadow-lg",
    outline: "bg-transparent border border-navy-300 dark:border-navy-600",
    filled: "bg-navy-50 dark:bg-navy-900"
  };

  return (
    <motion.div
      className={`
        rounded-xl overflow-hidden
        ${variants[variant]}
        ${hoverEffect ? "hover:shadow-lg hover:-translate-y-1 transition-all duration-200" : ""}
        ${className}
      `}
      initial={animation ? { opacity: 0, y: 10 } : {}}
      animate={animation ? { opacity: 1, y: 0 } : {}}
      transition={animation ? { duration: 0.3 } : {}}
      whileHover={hoverEffect ? { scale: 1.02 } : {}}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ 
  children, 
  className = "", 
  title,
  subtitle,
  action
}) {
  return (
    <div className={`p-6 border-b border-gray-100 dark:border-navy-700 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          {title && <h3 className="text-xl font-bold text-navy-900 dark:text-gold-400">{title}</h3>}
          {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>
      {children}
    </div>
  );
}

export function CardContent({ 
  children, 
  className = "", 
  padding = "medium"
}) {
  const paddings = {
    none: "p-0",
    small: "p-4",
    medium: "p-6",
    large: "p-8"
  };

  return (
    <div className={`${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ 
  children, 
  className = "", 
  align = "right"
}) {
  const alignment = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
    between: "justify-between"
  };

  return (
    <div className={`p-6 border-t border-gray-100 dark:border-navy-700 ${className}`}>
      <div className={`flex items-center ${alignment[align]} gap-4`}>
        {children}
      </div>
    </div>
  );
}