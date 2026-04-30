import type { ReactNode } from "react";

type CardLightingProps = {
  children: ReactNode;
  className?: string;
};

export function CardLighting({ children, className = "" }: CardLightingProps) {
  return <div className={`relative ${className}`}>{children}</div>;
}
