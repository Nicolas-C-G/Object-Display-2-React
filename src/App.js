import logo from './logo.svg';
import './App.css';

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

import ModelViewer from './components/ModelViewer';

function App() {
  return (
    <div className="App">
      <ModelViewer scale="1" modelPath={"../models/Drill2.glb"} />
    </div>
  );
}

export default App;
