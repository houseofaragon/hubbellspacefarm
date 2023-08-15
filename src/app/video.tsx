import React, { Suspense, useRef } from 'react'
import { useGLTF, useAnimations, useVideoTexture, useAspect, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import THREE from 'three'

function VideoMaterial({ url }: { url: string }) {
  const texture = useVideoTexture(url)
  console.log(texture)
  texture.flipY = true;
  return <meshBasicMaterial map={texture} side={1} />
}

function FallbackMaterial({ url }: { url: string }) {
  const texture = useTexture(url)
  texture.flipY = true;
  return <meshBasicMaterial map={texture}  />
}

export default function Video(props: JSX.IntrinsicElements['group']) {
    const size = useAspect(1024, 1024)
    return (
        <mesh>
        <sphereGeometry args={[1, 64, 32]} />
        <Suspense fallback={<FallbackMaterial url="/images/karen.png" />}>
        <FallbackMaterial url="/images/karen.png" />
          <VideoMaterial url="/images/hubbel-scratch.mp4" />
        </Suspense>
      </mesh>

    )
}