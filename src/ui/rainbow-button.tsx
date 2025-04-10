import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface RainbowButtonProps {
  className?: string;
  children?: React.ReactNode;
  href?: string;
  openInNewTab?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export const RainbowButton = React.forwardRef<
  HTMLButtonElement,
  RainbowButtonProps
>(({ children, className, href, openInNewTab = false, onClick, disabled, ...props }, ref) => {
  // Animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03 },
    tap: { scale: 0.97 }
  };

  // Button component with animations
  const ButtonContent = (
    <motion.button
      ref={ref}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      className={cn(
        "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors font-dm-sans [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        // before styles
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:[filter:blur(calc(0.8*1rem))]",
        // light mode colors
        "bg-[linear-gradient(rgba(18,18,19,0.8),rgba(18,18,19,0.8)),linear-gradient(rgba(18,18,19,0.7)_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        // dark mode colors
        "dark:bg-[linear-gradient(rgba(18,18,19,0.8),rgba(18,18,19,0.8)),linear-gradient(rgba(18,18,19,0.7)_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );

  // If href is provided, wrap with Link component
  if (href) {
    return (
      <Link 
        href={href} 
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        className="inline-block"
      >
        {ButtonContent}
      </Link>
    );
  }

  // Otherwise just return the button
  return ButtonContent;
});

RainbowButton.displayName = "RainbowButton";
