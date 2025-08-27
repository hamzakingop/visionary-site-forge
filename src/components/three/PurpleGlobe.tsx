import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useScroll, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Purple Black Hole Component
const BlackHole = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const scroll = useScroll()
  
  useFrame((state) => {
    if (!meshRef.current || !scroll) return
    
    const scrollOffset = scroll.offset || 0
    
    // Move black hole based on scroll
    meshRef.current.position.y = -scrollOffset * 20
    meshRef.current.position.x = Math.sin(scrollOffset * Math.PI * 2) * 10
    
    // Rotate and distort
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.5
    meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.1)
  })

  return (
    <mesh ref={meshRef} position={[5, 0, -20]}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshBasicMaterial color="#000000" />
      
      {/* Accretion disk */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.5, 8, 64]} />
        <meshBasicMaterial 
          color="#8b5cf6" 
          transparent 
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Event horizon glow */}
      <mesh>
        <sphereGeometry args={[3.2, 32, 32]} />
        <meshBasicMaterial 
          color="#6d28d9" 
          transparent 
          opacity={0.6}
        />
      </mesh>
    </mesh>
  )
}

// Animated Purple Globe
const PurpleGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!meshRef.current) return
    
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 2
  })

  return (
    <Sphere ref={meshRef} args={[8, 128, 128]} position={[-15, 0, -30]}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.1}
      />
    </Sphere>
  )
}

// Floating Purple Particles
const PurpleParticles = () => {
  const meshRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const positions = new Float32Array(1000 * 3)
    const colors = new Float32Array(1000 * 3)
    
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
      
      // Purple color variations
      colors[i * 3] = 0.5 + Math.random() * 0.5     // R
      colors[i * 3 + 1] = 0.1 + Math.random() * 0.4 // G
      colors[i * 3 + 2] = 0.8 + Math.random() * 0.2 // B
    }
    
    return { positions, colors }
  }, [])
  
  useFrame((state) => {
    if (!meshRef.current) return
    
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.02
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.01
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles.positions}
          count={1000}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={particles.colors}
          count={1000}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.8} 
        vertexColors 
        transparent 
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  )
}

// Main Purple 3D Scene
const PurpleGlobeScene = () => {
  return (
    <div className="fixed inset-0 -z-20">
      <Canvas
        camera={{ position: [0, 0, 50], fov: 75 }}
        style={{ background: 'linear-gradient(135deg, #000000 0%, #1a0b2e 50%, #16213e 100%)' }}
      >
        <ambientLight intensity={0.3} color="#8b5cf6" />
        <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6d28d9" />
        <directionalLight position={[0, 0, 5]} intensity={0.5} color="#c084fc" />
        
        <PurpleGlobe />
        <BlackHole />
        <PurpleParticles />
      </Canvas>
    </div>
  )
}

export default PurpleGlobeScene