import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import * as THREE from 'three'

interface GridNode {
  id: string
  title: string
  description: string
  image: string
  tech: string[]
  position: [number, number, number]
}

interface HolographicGridProps {
  projects: GridNode[]
  onProjectSelect: (project: GridNode) => void
}

// 3D Grid Lines Component
const GridLines = () => {
  const gridRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      gridRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5
    }
  })

  const lines = []
  const gridSize = 10
  const step = 2

  // Create grid lines
  for (let i = -gridSize; i <= gridSize; i += step) {
    // Horizontal lines
    lines.push(
      <line key={`h-${i}`}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array([-gridSize, 0, i, gridSize, 0, i])}
            count={2}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00ffff" transparent opacity={0.3} />
      </line>
    )
    
    // Vertical lines
    lines.push(
      <line key={`v-${i}`}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array([i, 0, -gridSize, i, 0, gridSize])}
            count={2}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00ffff" transparent opacity={0.3} />
      </line>
    )
  }

  return <group ref={gridRef}>{lines}</group>
}

// Project Node Component
const ProjectNode = ({ 
  project, 
  isHovered, 
  onHover, 
  onClick 
}: {
  project: GridNode
  isHovered: boolean
  onHover: (hover: boolean) => void
  onClick: () => void
}) => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      const scale = isHovered ? 1.5 : 1
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, scale, 0.1))
      
      if (isHovered) {
        meshRef.current.rotation.y = state.clock.elapsedTime * 2
      }
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={project.position}
      onPointerEnter={() => onHover(true)}
      onPointerLeave={() => onHover(false)}
      onClick={onClick}
    >
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshBasicMaterial 
        color={isHovered ? "#ff00ff" : "#00ffff"} 
        transparent 
        opacity={0.8}
        wireframe
      />
      
      {/* Pulsing ring effect when hovered */}
      {isHovered && (
        <mesh>
          <ringGeometry args={[0.5, 0.7, 32]} />
          <meshBasicMaterial 
            color="#ff00ff" 
            transparent 
            opacity={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </mesh>
  )
}

const HolographicGrid = ({ projects, onProjectSelect }: HolographicGridProps) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<GridNode | null>(null)

  const handleProjectClick = (project: GridNode) => {
    setSelectedProject(project)
    onProjectSelect(project)
  }

  return (
    <div className="relative w-full h-screen bg-black">
      {/* 3D Grid Canvas */}
      <Canvas
        camera={{ position: [0, 5, 10], fov: 75 }}
        className="absolute inset-0"
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
        
        <GridLines />
        
        {projects.map((project) => (
          <ProjectNode
            key={project.id}
            project={project}
            isHovered={hoveredProject === project.id}
            onHover={(hover) => setHoveredProject(hover ? project.id : null)}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </Canvas>

      {/* Holographic Project Preview */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="bg-black/80 border border-cyan-400 rounded-lg p-6 backdrop-blur-md shadow-2xl shadow-cyan-400/20">
              <div className="text-cyan-400 font-mono text-sm mb-2">
                {projects.find(p => p.id === hoveredProject)?.title}
              </div>
              <div className="text-white text-xs max-w-xs">
                {projects.find(p => p.id === hoveredProject)?.description}
              </div>
              <div className="flex flex-wrap gap-1 mt-3">
                {projects.find(p => p.id === hoveredProject)?.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs px-2 py-1 bg-cyan-400/20 text-cyan-300 rounded border border-cyan-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* UI Overlay */}
      <div className="absolute top-4 left-4 text-cyan-400 font-mono text-sm">
        <div>NEURAL NETWORK INTERFACE</div>
        <div className="text-xs opacity-60">HOVER TO SCAN • CLICK TO ENGAGE</div>
      </div>
    </div>
  )
}

export default HolographicGrid