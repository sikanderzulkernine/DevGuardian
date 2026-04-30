import React from "react";

type SurfaceCardProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    className?: string;
    "data-reveal"?: string;
};

export const SurfaceCard = ({
    children,
    className = "",
    "data-reveal": reveal = "fade-up",
    ...props
}: SurfaceCardProps) => {
    return (
        <div data-reveal={reveal} className={`premium-card relative overflow-hidden rounded-xl border ${className}`} {...props}>
            <div className="relative h-full">{children}</div>
        </div>
    );
};
