import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars, Html } from '@react-three/drei';
import * as THREE from 'three';
import { PROJECTS, Project } from '../lib/constants';

const ProjectPin = ({ project, onHover }: { project: Project, onHover: (p: Project | null) => void }) => {
  const [lat, lng] = project.coordinates;
  
  // Convert lat/lng to 3D coordinates
  const position = useMemo(() => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const radius = 2.05;
    return new THREE.Vector3(
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  }, [lat, lng]);

  const color = useMemo(() => {
    switch (project.category) {
      case 'aviation': return '#00d9ff';
      case 'infrastructure': return '#3b82f6';
      case 'industrial': return '#f59e0b';
      case 'mixed-use': return '#fbbf24';
      default: return '#ffffff';
    }
  }, [project.category]);

  return (
    <mesh 
      position={position} 
      onPointerOver={() => onHover(project)}
      onPointerOut={() => onHover(null)}
    >
      <sphereGeometry args={[0.03, 16, 16]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={2} 
      />
      <pointLight color={color} intensity={0.5} distance={0.5} />
    </mesh>
  );
};

const GlobeModel = ({ onHover }: { onHover: (p: Project | null) => void }) => {
  const globeRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Earth Sphere */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial 
          color="#1e293b" 
          wireframe 
          transparent 
          opacity={0.3} 
        />
      </Sphere>
      
      {/* Inner Glow Sphere */}
      <Sphere args={[1.98, 64, 64]}>
        <meshStandardMaterial 
          color="#0f172a" 
          metalness={0.9} 
          roughness={0.1} 
        />
      </Sphere>

      {/* Project Pins */}
      {PROJECTS.map((project) => (
        <ProjectPin key={project.id} project={project} onHover={onHover} />
      ))}
    </group>
  );
};

export const Globe = () => {
  const [hoveredProject, setHoveredProject] = React.useState<Project | null>(null);

  return (
    <div className="w-full h-[600px] relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <GlobeModel onHover={setHoveredProject} />
        <OrbitControls 
          enableZoom={false} 
          autoRotate={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI * 3 / 4}
        />
      </Canvas>

      {/* Hover Info Overlay */}
      {hoveredProject && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-cyan-500/30 shadow-2xl animate-in fade-in zoom-in duration-300">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{hoveredProject.title}</h3>
            <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">{hoveredProject.location}, {hoveredProject.country}</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 max-w-[200px]">{hoveredProject.description}</p>
          </div>
        </div>
      )}

      <div className="absolute bottom-4 left-4 text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest">
        Interactive Global Presence
      </div>
    </div>
  );
};
