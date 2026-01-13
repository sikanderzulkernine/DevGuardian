
import { Effects } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Particles } from "./particles";
import { VignetteShader } from "./shaders/vignetteShader";

type GlQuality = {
  dpr?: [number, number];
  size?: number;
  pointSize?: number;
  opacity?: number;
  noiseScale?: number;
  noiseIntensity?: number;
  speed?: number;
  timeScale?: number;
};

export const GL = ({ hovering, quality }: { hovering: boolean; quality?: GlQuality }) => {
  // Hardcoded values from previous Leva controls
  const config = {
    speed: quality?.speed ?? 1.0,
    noiseScale: quality?.noiseScale ?? 0.6,
    noiseIntensity: quality?.noiseIntensity ?? 0.52,
    timeScale: quality?.timeScale ?? 1,
    focus: 3.8,
    aperture: 1.79,
    pointSize: quality?.pointSize ?? 10.0,
    opacity: quality?.opacity ?? 0.8,
    planeScale: 10.0,
    size: quality?.size ?? 512,
    vignetteDarkness: 1.5,
    vignetteOffset: 0.4,
    useManualTime: false,
    manualTime: 0,
  };

  return (
    <div id="webgl">
      <Canvas
        camera={{
          position: [
            1.2629783123314589, 2.664606471394044, -1.8178993743288914,
          ],
          fov: 50,
          near: 0.01,
          far: 300,
        }}
        dpr={quality?.dpr ?? [1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#000"]} />
        <Particles
          speed={config.speed}
          aperture={config.aperture}
          focus={config.focus}
          size={config.size}
          noiseScale={config.noiseScale}
          noiseIntensity={config.noiseIntensity}
          timeScale={config.timeScale}
          pointSize={config.pointSize}
          opacity={config.opacity}
          planeScale={config.planeScale}
          useManualTime={config.useManualTime}
          manualTime={config.manualTime}
          introspect={hovering}
        />
        <Effects multisampling={0} disableGamma>
          <shaderPass
            args={[VignetteShader]}
            uniforms-darkness-value={config.vignetteDarkness}
            uniforms-offset-value={config.vignetteOffset}
          />
        </Effects>
      </Canvas>
    </div>
  );
};
