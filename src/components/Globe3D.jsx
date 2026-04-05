import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Float, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { PROJECTS } from '../lib/app-params';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectPin = ({ project, onHover, onClick }) => {
  const [lat, lng] = project.coordinates;
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const radius = 2.02;
  
  const position = [
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  ];

  const color = useMemo(() => {
    switch (project.category) {
      case 'aviation': return '#0ea5e9';
      case 'infrastructure': return '#2563eb';
      case 'industrial': return '#d97706';
      case 'mixed-use': return '#ca8a04';
      default: return '#64748b';
    }
  }, [project.category]);

  return (
    <group position={position}>
      <mesh 
        onPointerOver={(e) => { e.stopPropagation(); onHover(project); }}
        onPointerOut={() => onHover(null)}
        onClick={() => onClick(project)}
      >
        <sphereGeometry args={[0.045, 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} />
      </mesh>
      <pointLight color={color} intensity={0.8} distance={1.5} />
    </group>
  );
};

const GlobeModel = ({ onHover, onClick, isPaused }) => {
  const globeRef = useRef();
  const texture = useMemo(() => new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'), []);
  const specularMap = useMemo(() => new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg'), []);
  const normalMap = useMemo(() => new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg'), []);

  useFrame((state, delta) => {
    if (globeRef.current && !isPaused) {
      globeRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={globeRef}>
      <Sphere args={[2, 128, 128]}>
        <meshStandardMaterial 
          map={texture}
          specularMap={specularMap}
          normalMap={normalMap}
          metalness={0.1}
          roughness={0.7}
        />
      </Sphere>
      <Sphere args={[2.01, 64, 64]}>
        <meshStandardMaterial 
          color="#0ea5e9"
          transparent
          opacity={0.05}
          wireframe
        />
      </Sphere>
      {PROJECTS.map((p) => (
        <ProjectPin key={p.id} project={p} onHover={onHover} onClick={onClick} />
      ))}
    </group>
  );
};

export const Globe3D = () => {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full h-full min-h-[600px] relative">
      <Canvas shadows dpr={[1, 2]} alpha={true}>
        <PerspectiveCamera makeDefault position={[0, 0, 5.5]} />
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <spotLight position={[-10, 10, 10]} angle={0.2} penumbra={1} intensity={1.5} castShadow />
        
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
          <GlobeModel onHover={setHovered} onClick={setSelected} isPaused={!!hovered} />
        </Float>
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={false} 
          minDistance={3.5} 
          maxDistance={8}
          enableDamping={true}
          dampingFactor={0.05}
        />
        <ContactShadows position={[0, -2.8, 0]} opacity={0.25} scale={12} blur={2.5} far={5} />
      </Canvas>

      <AnimatePresence>
        {hovered && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute top-10 right-10 z-20 w-72 glass-card p-5 rounded-3xl border border-white/50 shadow-2xl pointer-events-none"
          >
            <div className="relative h-36 rounded-2xl overflow-hidden mb-4">
              <img src={hovered.image} alt={hovered.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1">{hovered.title}</h3>
            <p className="text-xs text-cyan-600 dark:text-cyan-400 font-bold mb-2 uppercase tracking-wider">{hovered.location}</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">{hovered.description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {selected && (
        <div className="absolute inset-0 z-30 flex items-center justify-center p-6 bg-slate-900/20 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="max-w-xl w-full glass-card p-10 rounded-[2.5rem] border border-white/60 shadow-2xl relative"
          >
            <button 
              onClick={() => setSelected(null)} 
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              ✕
            </button>
            <div className="h-64 rounded-3xl overflow-hidden mb-8 shadow-lg">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-3xl font-bold mb-3 text-slate-900 dark:text-white">{selected.title}</h2>
            <p className="text-cyan-600 dark:text-cyan-400 font-bold text-lg mb-4">{selected.location}</p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{selected.description}</p>
            <div className="mt-8 flex gap-4">
              <div className="px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest">
                {selected.category}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
