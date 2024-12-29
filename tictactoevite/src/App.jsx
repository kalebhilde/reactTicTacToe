import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import './App.css'

import GridLine from './components/GridLine';
import GridBox from "./components/GridBox";

const positions = [
  [-1.2, 2.4, 0],
  [1.2, 2.4, 0],
  [3.6, 2.4, 0],
  [-1.2, 0, 0],
  [1.2, 0, 0],
  [3.6, 0, 0],
  [-1.2, -2.4, 0],
  [1.2, -2.4, 0],
  [3.6, -2.4, 0],
 ];

function App() {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [nextTurn, setNextTurn] = useState(true);

  function handleClick(i) {
    const boardCopy = [...gameBoard];
    
    boardCopy[i] = nextTurn ? "Sphere" : "Cube";
    setGameBoard(boardCopy);
    setNextTurn(prevNextTurn => !prevNextTurn);
  };

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

        <Environment files={"../public/space.hdr"} background />
        {/* Create Grid */}
        <GridLine position={[2.5, 0, 0]}/>
        <GridLine position={[0, 0, 0]}/>
        <GridLine position={[1.2, -1.2, 0]} rotation={[0, 0, Math.PI / 2]}/>
        <GridLine position={[1.2, 1.2, 0]} rotation={[0, 0, Math.PI / 2]}/>

        {positions.map((gridBox, idx) => {
          return (
            <GridBox
              key={idx}
              shape={gameBoard[idx]}
              position={gridBox}
              handleClick={() => handleClick(idx)}
              winner={null}
            />
          )
        })}
      </Canvas>
    </>
  )
};

export default App;
