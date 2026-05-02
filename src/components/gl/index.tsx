"use client";

import { Canvas } from "@react-three/fiber";
import { Particles } from "./particles";
import { useEffect, useState } from "react";

type ResponsiveConfig = {
  isMobile: boolean;
  isTablet: boolean;
  pixelRatio: number;
  size: number;
  pointSize: number;
  focus: number;
  aperture: number;
  planeScale: number;
  cameraPosition: [number, number, number];
  fov: number;
};

function getResponsiveConfig(): ResponsiveConfig {
  if (typeof window === "undefined") {
    return {
      isMobile: false,
      isTablet: false,
      pixelRatio: 1,
      size: 512,
      pointSize: 10.0,
      focus: 3.8,
      aperture: 1.79,
      planeScale: 10.0,
      cameraPosition: [1.26, 2.66, -1.82],
      fov: 50,
    };
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isLandscape = width > height;
  const rawPixelRatio = window.devicePixelRatio || 1;
  const pixelRatio = isMobile
    ? Math.min(rawPixelRatio, 1.25)
    : Math.min(rawPixelRatio, 1.75);

  // Keep the animation visible on every device while avoiding excessive FBO work on mobile.
  const size = isMobile ? 256 : 512;

  let cameraPosition: [number, number, number] = [1.26, 2.66, -1.82];
  let fov = 50;
  let planeScale = 10.0;

  if (isMobile) {
    if (isLandscape) {
      cameraPosition = [1.0, 3.2, -2.2];
      fov = 55;
      planeScale = 8.0;
    } else {
      cameraPosition = [0.8, 3.5, -2.5];
      fov = 60;
      planeScale = 8.0;
    }
  } else if (isTablet) {
    cameraPosition = [1.1, 2.9, -2.0];
    fov = 52;
    planeScale = 9.0;
  }

  return {
    isMobile,
    isTablet,
    pixelRatio,
    size,
    pointSize: isMobile ? 8.0 * pixelRatio : isTablet ? 9.0 * pixelRatio : 10.0 * pixelRatio,
    focus: isMobile ? 4.2 : isTablet ? 4.0 : 3.8,
    aperture: isMobile ? 1.5 : isTablet ? 1.65 : 1.79,
    planeScale,
    cameraPosition,
    fov,
  };
}

// Hook to detect device type and get responsive values
function useResponsiveConfig() {
  const [config, setConfig] = useState<ResponsiveConfig>(() => getResponsiveConfig());

  useEffect(() => {
    let frameId: number | null = null;

    const updateConfig = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        setConfig(getResponsiveConfig());
      });
    };

    window.addEventListener("resize", updateConfig);
    window.addEventListener("orientationchange", updateConfig);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("resize", updateConfig);
      window.removeEventListener("orientationchange", updateConfig);
    };
  }, []);

  return config;
}

export const GL = ({ hovering }: { hovering: boolean }) => {
  const {
    size,
    pointSize,
    focus,
    aperture,
    planeScale,
    cameraPosition,
    fov,
    pixelRatio,
    isMobile,
  } = useResponsiveConfig();

  // Fixed values that don't need to be responsive
  const speed = 1.0;
  const noiseScale = 0.6;
  const noiseIntensity = 0.52;
  const timeScale = 1;
  const opacity = 0.8;

  return (
    <div id="webgl" className="absolute inset-0 h-full w-full pointer-events-none">
      <Canvas
        dpr={pixelRatio}
        performance={{ min: 0.5 }}
        camera={{
          position: cameraPosition,
          fov: fov,
          near: 0.01,
          far: 300,
        }}
        gl={{
          antialias: !isMobile, // Disable antialiasing on mobile for performance
          powerPreference: "high-performance",
          alpha: false,
        }}
      >
        <color attach="background" args={["#000"]} />
        <Particles
          speed={speed}
          aperture={aperture}
          focus={focus}
          size={size}
          noiseScale={noiseScale}
          noiseIntensity={noiseIntensity}
          timeScale={timeScale}
          pointSize={pointSize}
          opacity={opacity}
          planeScale={planeScale}
          useManualTime={false}
          manualTime={0}
          introspect={hovering}
        />
      </Canvas>
    </div>
  );
};
