import React, { useState } from 'react'
import { genomeAlpha, genomeBeta } from '../assets/mockData'
import { Blob } from './Blob'
import { createNewGenome } from '../scripts/breed'
import { toText } from '../scripts/utils'

function BlobPage() {
  const [you, setYou] = useState(genomeAlpha)
  const [partner, setPartner] = useState(genomeBeta)
  const [generation, setGeneration] = useState(1)
  const children = []

  const setNextGen = (newGenome) => {
    setGeneration(generation + 1)
    setYou(newGenome)
    setPartner(newGenome)
  }

  for (let i = 0; i < 24; i++) {
    const newGenome = createNewGenome(you, partner)
    children.push(<Blob genome={newGenome} key={`blob-${i}`} onClick={() => setNextGen(newGenome)} />)
  }

  return (
    <div className="App">
      <strong style={{ marginTop: '20px' }}>{`Generation: ${generation}`}</strong>
      <Blob genome={you} label={toText(you)} />
      <div className="blob__container">{children}</div>
    </div>
  )
}

export default BlobPage
