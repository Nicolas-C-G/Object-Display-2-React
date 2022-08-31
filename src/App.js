import logo from './logo.svg';
import './App.css';

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

//import ModelViewer from './components/ModelViewer';
import MultiModelViewer from './components/MultiModelViewer';

function App() {
  return (
    <div className="App">
      <MultiModelViewer scale="4" modelPath={"../models/Drill2.glb"} scale2="1" modelPath2={"../models/Orbit7.glb"} />
    </div>
  );
}

export default App;
