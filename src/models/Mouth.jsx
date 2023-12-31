/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Mouth.gltf --transform
Author: POLYCOSM (https://sketchfab.com/POLYCOSM)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/screaming-mouth-sculpt-49351fdbda3440d0999f6a590f2dd15b
Title: Screaming Mouth Sculpt
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Mouth-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Base_Face__0.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Base_Face__0_1.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Base_Face__0_2.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Base_Face__0_3.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Base_Face__0_4.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Base_Face__0_5.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Base_Face__0_6.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Base_Face__0_7.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Base_Face__0_8.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Base_Face__0_9.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Base_Face__0_10.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Base_Face__0_11.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Base_Face__0_12.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Base_Face__0_13.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Base_Face__0_14.geometry} material={materials['Scene_-_Root']} />
      </group>
      <group position={[0, -6.06, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Teeth_Lower_Inner__0.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Teeth_Lower_Inner__0_1.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Teeth_Lower_Inner__0_2.geometry} material={materials['Scene_-_Root']} />
      </group>
      <group position={[0, -5.52, -24.48]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Tongue__0.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Tongue__0_1.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Tongue__0_2.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Tongue__0_3.geometry} material={materials['Scene_-_Root']} />
      </group>
      <group position={[0, -30.11, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={100}>
        <mesh geometry={nodes.Teeth_Upper_Outer__0.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Teeth_Upper_Outer__0_1.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Teeth_Upper_Outer__0_2.geometry} material={materials['Scene_-_Root']} />
      </group>
      <mesh geometry={nodes.Teeth_Upper_Inner__0.geometry} material={materials['Scene_-_Root']} position={[0, -6.06, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Teeth_Lower_Outer__0.geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/Mouth-transformed.glb')
