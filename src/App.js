import React, { useState } from 'react'
import './App.css'
import { genomeA, genomeB } from './assets/mockData'
import { Blob } from './components/Blob'
import { createNewGene } from './scripts/breed'

function App() {
  const [you, setYou] = useState(genomeA)
  const [partner, setPartner] = useState(genomeB)
  const [generation, setGeneration] = useState(1)
  const children = []

  const setNextGen = (newGenome) => {
    setGeneration(generation + 1)
    setYou(newGenome)
    setPartner(newGenome)
  }

  for (let i = 0; i < 24; i++) {
    const newGenome = createNewGene(you, partner)
    children.push(<Blob genome={newGenome} key={`blob-${i}`} onClick={() => setNextGen(newGenome)} />)
  }

  return (
    <div className="App">
      <strong style={{ marginTop: '20px' }}>{`Generation: ${generation}`}</strong>
      <Blob genome={you} label={JSON.stringify(you)} />
      <div className="blob__container">{children}</div>
    </div>
  )
}

export default App
