"use client"
import React from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

import Ufo from './ufo'
import Sidebar from './sidebar'

export default function App() {
  return (
    <div id="root">
      <p className="text-4xl text-white absolute z-50">Hubbell Space Farm</p>
      <Sidebar />
      <Canvas shadows camera={{ position: [0, 550, 0], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <OrbitControls makeDefault autoRotate autoRotateSpeed={0.1} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
        <EffectComposer>
          <Bloom luminanceThreshold={1} intensity={2} levels={9} mipmapBlur />
        </EffectComposer>
        <Ufo position={[0, 6, 0]} />
      </Canvas>
    </div>
  )
}
