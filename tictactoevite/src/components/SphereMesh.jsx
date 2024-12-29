import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

function SphereMesh({ position, winner }) {
    const [sphereTexture] = useLoader(TextureLoader, ['../public/sphere_texture.jpeg']);
    const ref = useRef();

    useFrame(() => {
        if(winner === null || winner === "Sphere") {
            if(ref.current) {
                ref.current.rotation.y += 0.03;
            }
        }
    });

    return (
    <>
        <mesh position={position} ref={ref}>
        <sphereGeometry args={[0.6, 100, 100]} />
        <meshStandardMaterial
            metalness={0.85}
            roughness={0.1}
            map={sphereTexture}
        />
        </mesh>
    </>
    );
}
export default React.memo(SphereMesh);