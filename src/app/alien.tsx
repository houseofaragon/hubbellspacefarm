import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Ufo(props: JSX.IntrinsicElements['group']) {
  const group = useRef<any>()
  const { nodes, materials, animations } = useGLTF('main.glb') as any
 console.log(materials)
 console.log(animations)

 const { ref, actions } = useAnimations(animations)
  console.log(actions)
//   useFrame(() => {
//     if (group.current) {
//       group.current.rotation.y += 0.001
//     }
//   })

  return (
    <group ref={group} {...props} dispose={null}>
        <group
        position={[-1, 0, 0]}
        scale={[.01, .01, .01]}
        >
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
            material={materials.Skin}
            geometry={nodes.Body_Bodymesh.geometry}
            skeleton={nodes.Body_Bodymesh.skeleton}
        />
        <skinnedMesh
            material={materials.Clothes}
            geometry={nodes.Cylinder.geometry}
            skeleton={nodes.Cylinder.skeleton}
        />
        <skinnedMesh
            material={materials.Clothes}
            geometry={nodes.default_defaultmesh.geometry}
            skeleton={nodes.default_defaultmesh.skeleton}
        />
        <skinnedMesh
            material={materials.Eyelashes_Eyelashesmesh}
            geometry={nodes.Eyelashes_Eyelashesmesh.geometry}
            skeleton={nodes.Eyelashes_Eyelashesmesh.skeleton}
        />
        </group>
    </group>
  )
}