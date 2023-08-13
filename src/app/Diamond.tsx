import { useEffect, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {
  useGLTF,
  Caustics,
  CubeCamera,
  Environment,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshRefractionMaterial,
  MeshTransmissionMaterial
} from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { RGBELoader } from 'three-stdlib'
import { TextureLoader } from 'three'

export default function Diamond(props) {
  const ref = useRef()
  const { nodes, materials } = useGLTF('/images/dflat.glb')
  const texture = useLoader(TextureLoader, '/images/karen_2.png')
  
  const config = useControls({
    bounces: { value: 3, min: 0, max: 8, step: 1 },
    aberrationStrength: { value: 0.01, min: 0, max: 0.1, step: 0.01 },
    ior: { value: 2.75, min: 0, max: 10 },
    fresnel: { value: 1, min: 0, max: 1 },
    color: 'white',
    fastChroma: true
  })

  useFrame(() => {
    if (ref.current) {
      // ref.current.rotation.z += 0.001
      // ref.current.rotation.y += 0.001
      ref.current.rotation.y += 0.001

    }
  })
  
  return (
    <CubeCamera  resolution={1026} frames={1} envMap={texture}>
      {(texture) => (
        <Caustics
          backfaces
          color={config.color}
          position={[0, 1, 0]}
          lightSource={[5, 5, -10]}
          worldRadius={0.1}
          ior={1.0}
          backfaceIor={1.1}
          intensity={0.1}>
          <mesh castShadow ref={ref} geometry={nodes.Diamond_1_0.geometry} {...props}>
            <MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} />
          </mesh>
        </Caustics>
      )}
    </CubeCamera>
  )
}
