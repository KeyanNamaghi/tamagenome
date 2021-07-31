import { useState } from 'react'
import './App.css'
import { genomeB } from './assets/mockData'
import { Blob } from './components/Blob'
import { createGenome } from './scripts/breed'

function App() {
  // const [mother, setMother] = useState(genomeA);
  const [father, setFather] = useState(genomeB)
  const children = []

  for (let i = 0; i < 1; i++) {
    const newGenome = createGenome(father, father)
    children.push(<Blob genome={newGenome} label={i} key={`blob-${i}`} onClick={() => setFather(newGenome)} />)
  }

  return (
    <div className="App">
      <div className="blob__container">
        <button>set Mother</button>
        <Blob genome={father} label="A" />
        <Blob genome={father} label="B" />
        <button>set Father</button>
      </div>
      <div className="blob__container">{children}</div>
    </div>
  )
}

export default App
