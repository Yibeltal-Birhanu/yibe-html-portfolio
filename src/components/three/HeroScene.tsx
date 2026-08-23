"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* ── AI Chip Body ── */
function ChipBody() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.15;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.08} floatIntensity={0.15}>
      <group ref={ref}>
        {/* Main chip body */}
        <mesh>
          <boxGeometry args={[2.4, 0.15, 2.4]} />
          <meshStandardMaterial
            color="#0a1628"
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>

        {/* Top surface layer (slightly raised) */}
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[2.0, 0.02, 2.0]} />
          <meshStandardMaterial
            color="#0d1f3c"
            roughness={0.4}
            metalness={0.6}
            emissive="#00d4ff"
            emissiveIntensity={0.02}
          />
        </mesh>

        {/* Circuit traces on top surface */}
        <CircuitTraces />

        {/* AI Core (glowing sphere in center) */}
        <mesh position={[0, 0.18, 0]}>
          <octahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={1.2}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Core glow halo */}
        <mesh position={[0, 0.18, 0]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshBasicMaterial
            color="#00d4ff"
            transparent
            opacity={0.08}
          />
        </mesh>

        {/* Chip edge pins — 4 sides */}
        <ChipPins />

        {/* Corner markers */}
        {[[-1, 0, -1], [1, 0, -1], [-1, 0, 1], [1, 0, 1]].map((pos, i) => (
          <mesh key={i} position={[pos[0] * 1.05, 0.09, pos[2] * 1.05]}>
            <cylinderGeometry args={[0.03, 0.03, 0.04, 8]} />
            <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

/* ── Circuit Traces on chip surface ── */
function CircuitTraces() {
  const traces = useMemo(() => {
    const result: { pos: [number, number, number]; length: number; angle: number }[] = [];
    // Radiating lines from center to edges
    const dirs = [
      { dx: 1, dz: 0, len: 0.6 },
      { dx: -1, dz: 0, len: 0.6 },
      { dx: 0, dz: 1, len: 0.6 },
      { dx: 0, dz: -1, len: 0.6 },
      { dx: 1, dz: 1, len: 0.5 },
      { dx: -1, dz: 1, len: 0.5 },
      { dx: 1, dz: -1, len: 0.5 },
      { dx: -1, dz: -1, len: 0.5 },
    ];
    for (const d of dirs) {
      const cx = d.dx * 0.6;
      const cz = d.dz * 0.6;
      const angle = Math.atan2(d.dz, d.dx);
      result.push({ pos: [cx, 0.09, cz], length: d.len, angle });
    }
    // Horizontal and vertical traces
    for (let i = -0.6; i <= 0.6; i += 0.4) {
      result.push({ pos: [0, 0.09, i], length: 1.8, angle: 0 });
      result.push({ pos: [i, 0.09, 0], length: 1.8, angle: Math.PI / 2 });
    }
    return result;
  }, []);

  return (
    <group>
      {traces.map((t, i) => (
        <mesh key={i} position={t.pos} rotation={[0, -t.angle, 0]}>
          <boxGeometry args={[t.length, 0.005, 0.012]} />
          <meshBasicMaterial color="#00d4ff" transparent opacity={0.18} />
        </mesh>
      ))}
    </group>
  );
}

/* ── Chip Pins (edge connectors) ── */
function ChipPins() {
  const pins = useMemo(() => {
    const result: { pos: [number, number, number]; rot: [number, number, number] }[] = [];
    const count = 10;
    const spacing = 2.0 / (count - 1);

    for (let i = 0; i < count; i++) {
      const offset = -1.0 + i * spacing;
      // Front edge (z+)
      result.push({ pos: [offset, -0.02, 1.25], rot: [0, 0, 0] });
      // Back edge (z-)
      result.push({ pos: [offset, -0.02, -1.25], rot: [0, 0, 0] });
      // Left edge (x-)
      result.push({ pos: [-1.25, -0.02, offset], rot: [0, Math.PI / 2, 0] });
      // Right edge (x+)
      result.push({ pos: [1.25, -0.02, offset], rot: [0, Math.PI / 2, 0] });
    }
    return result;
  }, []);

  return (
    <group>
      {pins.map((pin, i) => (
        <mesh key={i} position={pin.pos} rotation={pin.rot}>
          <boxGeometry args={[0.12, 0.04, 0.04]} />
          <meshStandardMaterial
            color="#c0c0c0"
            roughness={0.4}
            metalness={0.8}
            emissive="#00d4ff"
            emissiveIntensity={0.05}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Floating Code/Data Particles ── */
function DataParticles({ count = 200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.5 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      vel[i * 3] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }
    return { positions: pos, velocities: vel };
  }, [count]);

  useFrame(() => {
    if (!ref.current) return;
    const posAttr = ref.current.geometry.attributes.position;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i * 3];
      arr[i * 3 + 1] += velocities[i * 3 + 1];
      arr[i * 3 + 2] += velocities[i * 3 + 2];
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#00d4ff" size={0.02} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

/* ── Receding Grid Floor ── */
function GridFloor() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.z = (state.clock.elapsedTime * 0.1) % 2;
    }
  });

  return (
    <group ref={ref} position={[0, -2.5, 0]}>
      <gridHelper args={[80, 80, "#1a1a3a", "#0a0a1a"]} />
    </group>
  );
}

/* ── Orbital Rings ── */
function OrbitalRing({ radius, speed, color, opacity, tilt = [0.4, 0, 0] }: {
  radius: number;
  speed: number;
  color: string;
  opacity: number;
  tilt?: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  return (
    <group rotation={tilt}>
      <mesh ref={ref}>
        <torusGeometry args={[radius, 0.004, 8, 128]} />
        <meshBasicMaterial color={color} transparent opacity={opacity} />
      </mesh>
    </group>
  );
}

/* ── Mouse-follow camera ── */
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  const handleMove = useCallback((e: PointerEvent) => {
    mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
  }, []);

  useMemo(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("pointermove", handleMove);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("pointermove", handleMove);
      }
    };
  }, [handleMove]);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.3 - camera.position.x) * 0.015;
    camera.position.y += (-mouse.current.y * 0.2 + 0.5 - camera.position.y) * 0.015;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ── Full Scene ── */
function Scene() {
  return (
    <>
      <CameraRig />
      <ambientLight intensity={0.2} />
      <directionalLight position={[4, 6, 4]} intensity={0.7} color="#ffffff" />
      <pointLight position={[-4, -2, 3]} intensity={0.5} color="#00d4ff" distance={15} />
      <pointLight position={[4, 2, -3]} intensity={0.3} color="#7c3aed" distance={15} />
      <pointLight position={[0, 3, 0]} intensity={0.3} color="#ffffff" distance={12} />

      <ChipBody />
      <DataParticles count={250} />
      <OrbitalRing radius={2.5} speed={0.12} color="#00d4ff" opacity={0.06} tilt={[0.5, 0, 0.2]} />
      <OrbitalRing radius={3.0} speed={-0.08} color="#7c3aed" opacity={0.04} tilt={[0.3, 0.5, 0]} />
      <GridFloor />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 1.5, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
