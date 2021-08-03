import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import { useGLTF } from '@react-three/drei'

function Model({ url, ...props }) {
  // useGLTF suspends the component, it literally stops processing
  const { scene } = useGLTF(url)
  // By the time we're here the model is gueranteed to be available
  return <primitive object={scene} {...props} />
}

// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef()
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   // Rotate mesh every frame, this is outside of React without overhead
//   useFrame(() => {
//     mesh.current.rotation.x = mesh.current.rotation.y += 0.01
//   })
//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? 1.5 : 1}
//       onClick={(e) => setActive(!active)}
//       onPointerOver={(e) => setHover(true)}
//       onPointerOut={(e) => setHover(false)}
//     >
//       <sphereGeometry args={[1, 100, 100]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

const Three = () => {
  return (
    <div className="canvas-container">
      <Suspense fallback={<span>loading...</span>}>
        <Canvas dpr={[1, 2]} camera={{ position: [-2, 2, 10], fov: 25 }}>
          <directionalLight position={[10, 10, 0]} intensity={1.5} />
          <directionalLight position={[-10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, 20, 0]} intensity={1.5} />
          <directionalLight position={[0, -10, 0]} intensity={0.25} />
          <Rotate position-y={0} scale={1.5}>
            <Model url="/shiba/scene.gltf" />
          </Rotate>
        </Canvas>
      </Suspense>
    </div>
  )
}

function Rotate(props) {
  const ref = useRef()
  useFrame((state) => (ref.current.rotation.y = state.clock.elapsedTime))
  return <group ref={ref} {...props} />
}

export default Three
