// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Canvas
        camera={{
          fov: 50,
          position: [-10, -5, -15],
          rotation:[Math.PI, 0, 0],
        }}
      >
        <OrbitControls maxDistance={40} enableDamping />

        {/* add lighting */}
        <ambientLight />
        <pointLight
          position={[-150, 300, -300]}
          intensity={0.9}
        />
        <Environment background={true} files={"./public/space.hdr"}/>
      </Canvas>

      
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default React.memo(App);
