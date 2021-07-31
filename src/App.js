import { useState } from 'react'
import './App.css'
import { genomeA, genomeB } from './assets/mockData'
import { Blob } from './components/Blob'
import { createNewGene } from './scripts/breed'

function App() {
  const [partner, setPartner] = useState(genomeB)
  const children = []

  for (let i = 0; i < 24; i++) {
    const newGenome = createNewGene(partner, partner)
    children.push(<Blob genome={newGenome} key={`blob-${i}`} onClick={() => setPartner(newGenome)} />)
  }

  return (
    <div className="App">
      <Blob genome={genomeA} />
      <div className="blob__container">{children}</div>
    </div>
  )
}

export default App
