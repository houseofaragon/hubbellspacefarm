import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Ufo(props: JSX.IntrinsicElements['group']) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('scene-transformed.glb')

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="RootNode">
          <group name="UFO">
            <group name="Cylinder" position={[0, 56.134, -131.342]}>
              <mesh name="Cylinder_NEON_0" geometry={nodes.Cylinder_NEON_0.geometry} material={materials.PaletteMaterial001} />
            </group>
            <group name="Cylinder_2" position={[113.745, 56.134, -65.671]} rotation={[0, -Math.PI / 3, 0]}>
              <mesh name="Cylinder_2_NEON_0" geometry={nodes.Cylinder_2_NEON_0.geometry} material={materials.PaletteMaterial001} />
            </group>
            <group name="Cylinder_3" position={[113.745, 56.134, 65.671]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
              <mesh name="Cylinder_3_NEON_0" geometry={nodes.Cylinder_3_NEON_0.geometry} material={materials.PaletteMaterial001} />
            </group>
            <group name="Cylinder_4" position={[0, 56.134, 131.342]} rotation={[Math.PI, 0, Math.PI]}>
              <mesh name="Cylinder_4_NEON_0" geometry={nodes.Cylinder_4_NEON_0.geometry} material={materials.PaletteMaterial001} />
            </group>
            <group name="Cylinder_5" position={[-113.745, 56.134, 65.671]} rotation={[Math.PI, Math.PI / 3, -Math.PI]}>
              <mesh name="Cylinder_5_NEON_0" geometry={nodes.Cylinder_5_NEON_0.geometry} material={materials.PaletteMaterial001} />
            </group>
            <group name="Cylinder_6" position={[-113.745, 56.134, -65.671]} rotation={[0, Math.PI / 3, 0]}>
              <mesh name="Cylinder_6_NEON_0" geometry={nodes.Cylinder_6_NEON_0.geometry} material={materials.PaletteMaterial001} />
            </group>
            <group name="Array" position={[0, 17.682, 0]}>
              <group name="Sphere_13" position={[0, 0, -190]}>
                <mesh name="Sphere_13_METAL_0" geometry={nodes.Sphere_13_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Sphere_12" position={[88.297, 0, -168.237]} rotation={[0, -0.483, 0]}>
                <mesh name="Sphere_12_METAL_0" geometry={nodes.Sphere_12_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Sphere_11" position={[156.367, 0, -107.932]} rotation={[0, -0.967, 0]}>
                <mesh name="Sphere_11_METAL_0" geometry={nodes.Sphere_11_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Sphere_10" position={[188.615, 0, -22.902]} rotation={[0, -1.45, 0]}>
                <mesh name="Sphere_10_METAL_0" geometry={nodes.Sphere_10_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Sphere_9" position={[177.653, 0, 67.375]} rotation={[Math.PI, -1.208, Math.PI]}>
                <mesh name="Sphere_9_METAL_0" geometry={nodes.Sphere_9_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Sphere_8" position={[125.993, 0, 142.217]} rotation={[Math.PI, -0.725, Math.PI]}>
                <mesh name="Sphere_8_METAL_0" geometry={nodes.Sphere_8_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Sphere_7" position={[45.47, 0, 184.479]} rotation={[Math.PI, -0.242, Math.PI]}>
                <mesh name="Sphere_7_METAL_0" geometry={nodes.Sphere_7_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Sphere_6" position={[-45.47, 0, 184.479]} rotation={[Math.PI, 0.242, -Math.PI]}>
                <mesh name="Sphere_6_METAL_0" geometry={nodes.Sphere_6_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Sphere_5" position={[-125.993, 0, 142.217]} rotation={[Math.PI, 0.725, -Math.PI]}>
                <mesh name="Sphere_5_METAL_0" geometry={nodes.Sphere_5_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Sphere_4" position={[-177.653, 0, 67.375]} rotation={[Math.PI, 1.208, -Math.PI]}>
                <mesh name="Sphere_4_METAL_0" geometry={nodes.Sphere_4_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Sphere_3" position={[-188.615, 0, -22.902]} rotation={[0, 1.45, 0]}>
                <mesh name="Sphere_3_METAL_0" geometry={nodes.Sphere_3_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Sphere_2" position={[-156.367, 0, -107.932]} rotation={[0, 0.967, 0]}>
                <mesh name="Sphere_2_METAL_0" geometry={nodes.Sphere_2_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Sphere_1" position={[-88.297, 0, -168.237]} rotation={[0, 0.483, 0]}>
                <mesh name="Sphere_1_METAL_0" geometry={nodes.Sphere_1_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
            </group>
            <group name="Cloner" position={[0, 56.134, 0]}>
              <group name="Tube_1_0" position={[0, 0, -136]}>
                <mesh name="Tube_1_0_METAL_0" geometry={nodes.Tube_1_0_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Tube_1_1" position={[117.779, 0, -68]} rotation={[0, -Math.PI / 3, 0]}>
                <mesh name="Tube_1_1_METAL_0" geometry={nodes.Tube_1_1_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Tube_1_2" position={[117.779, 0, 68]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
                <mesh name="Tube_1_2_METAL_0" geometry={nodes.Tube_1_2_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Tube_1_3" position={[0, 0, 136]} rotation={[Math.PI, 0, Math.PI]}>
                <mesh name="Tube_1_3_METAL_0" geometry={nodes.Tube_1_3_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Tube_1_4" position={[-117.779, 0, 68]} rotation={[Math.PI, Math.PI / 3, -Math.PI]}>
                <mesh name="Tube_1_4_METAL_0" geometry={nodes.Tube_1_4_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
              <group name="Tube_1_5" position={[-117.779, 0, -68]} rotation={[0, Math.PI / 3, 0]}>
                <mesh name="Tube_1_5_METAL_0" geometry={nodes.Tube_1_5_METAL_0.geometry} material={materials.PaletteMaterial002} />
              </group>
            </group>
            <group name="Loft" position={[0, 2.414, 0]}>
              <group name="Cap_1" position={[0, 39.175, 0]}>
                <mesh name="Cap_1_BODY_0" geometry={nodes.Cap_1_BODY_0.geometry} material={materials.PaletteMaterial001} />
              </group>
              <group name="Cap_2" position={[0, -48.946, 0]}>
                <mesh name="Cap_2_BODY_0" geometry={nodes.Cap_2_BODY_0.geometry} material={materials.PaletteMaterial001} />
              </group>
              <mesh name="Loft_BODY_0" geometry={nodes.Loft_BODY_0.geometry} material={materials.PaletteMaterial001} />
            </group>
            <group name="Sphere">
              <mesh name="Sphere_NEON_0" geometry={nodes.Sphere_NEON_0.geometry} material={materials.PaletteMaterial001} />
            </group>
            <group name="Capsule" position={[0, 107.594, 0]}>
              <mesh name="Capsule_GLASS_0" geometry={nodes.Capsule_GLASS_0.geometry} material={materials.PaletteMaterial003} />
            </group>
            <group name="Capsule_2" position={[0, 107.594, 0]}>
              <mesh name="Capsule_2_GLASS_0" geometry={nodes.Capsule_2_GLASS_0.geometry} material={materials.PaletteMaterial003} />
            </group>
            <group name="Tube" position={[0, 56.262, 0]}>
              <mesh name="Tube_CABIN_0" geometry={nodes.Tube_CABIN_0.geometry} material={materials.PaletteMaterial004} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}