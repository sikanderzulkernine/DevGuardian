"use client";

import React from "react";

export const SurfaceCard = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`relative overflow-hidden rounded-xl border ${className}`}>
            <div className="relative h-full">{children}</div>
        </div>
    );
};
