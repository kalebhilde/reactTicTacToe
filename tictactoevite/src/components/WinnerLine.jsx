import React, {useLayoutEffect, useRef} from 'react';
import * as THREE from 'three';

function WinnerLine({positions, indices}) {
    const ref = useRef();

    const startPosition = positions[indices[0]];
    const endPosition = positions[indices[2]];

    useLayoutEffect(() => {
        ref.current.geometry.setFromPoints([startPosition, endPosition].map((point) => new THREE.Vector3(...point)))
      }, [startPosition, endPosition])

    return (
        <line ref={ref}>
            <bufferGeometry />
            <lineBasicMaterial color="red"  linewidth={30} />
        </line>
    )
}

export default React.memo(WinnerLine);