import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

// Floating geometric nodes component
const FloatingNodes = () => {
  const meshRef = useRef<THREE.Group>(null)
  const scroll = useScroll()
  
  // Create constellation of nodes
  const nodes = useMemo(() => {
    const temp = []
    for (let i = 0; i < 50; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100
        ],
        scale: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.02 + 0.01
      })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    
    // Animate based on scroll position
    const scrollOffset = scroll.offset
    meshRef.current.position.z = scrollOffset * 50 - 25
    
    // Rotate constellation slowly
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.05
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1
  })

  return (
    <group ref={meshRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position} scale={node.scale}>
          <octahedronGeometry args={[1, 0]} />
          <meshBasicMaterial 
            color="#3b82f6" 
            transparent 
            opacity={0.6}
            wireframe
          />
        </mesh>
      ))}
      
      {/* Connection lines between nodes */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array(nodes.flatMap((node, i) => {
              if (i < nodes.length - 1) {
                return [...node.position, ...nodes[i + 1].position]
              }
              return []
            }))}
            count={nodes.length - 1}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.2} />
      </lineSegments>
    </group>
  )
}

// Camera controller for scroll-driven movement
const CameraController = () => {
  const { camera } = useThree()
  const scroll = useScroll()
  
  useFrame(() => {
    // Move camera through the 3D space based on scroll
    const scrollOffset = scroll.offset
    camera.position.z = 50 - scrollOffset * 100
    camera.lookAt(0, 0, 0)
  })
  
  return null
}

// Main 3D scene component
const GlobalScene = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 50], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
        
        <FloatingNodes />
        <CameraController />
      </Canvas>
    </div>
  )
}

export default GlobalScene