/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Camera.gltf --transform
Author: AleixoAlonso (https://sketchfab.com/AleixoAlonso)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/canon-at-1-retro-camera-9de66868d0f240e985da00c9480bfc82
Title: Canon AT-1 Retro Camera
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Camera-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['#CAM0001_Body_#CAM0001_Textures_0'].geometry} material={materials.CAM0001_Textures} />
        <mesh geometry={nodes['#CAM0001_Battery_Check_#CAM0001_Textures_0'].geometry} material={materials.CAM0001_Textures} position={[0.05, 0, 0.07]} />
        <mesh geometry={nodes['#CAM0001_Spool_#CAM0001_Textures_0'].geometry} material={materials.CAM0001_Textures} position={[0.05, 0, 0.08]} />
        <mesh geometry={nodes['#CAM0001_Film_Advance_#CAM0001_Textures_0'].geometry} material={materials.CAM0001_Textures} position={[-0.06, 0, 0.08]} />
        <mesh geometry={nodes['#CAM0001_Shutter_#CAM0001_Textures_0'].geometry} material={materials.CAM0001_Textures} position={[-0.03, -0.01, 0.08]} />
        <mesh geometry={nodes['#CAM0001_Shutter_Speed_#CAM0001_Textures_0'].geometry} material={materials.CAM0001_Textures} position={[-0.06, 0, 0.07]} />
      </group>
    </group>
  )
}

useGLTF.preload('/Camera-transformed.glb')
