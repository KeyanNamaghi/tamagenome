import React from 'react'
import { Pikachu } from '../assets/Pikachu'

export const Blob = ({ genome, label, onClick }) => {
  const { r: r1, g: g1, b: b1 } = genome?.primaryColour[0]
  const { r: r2, g: g2, b: b2 } = genome?.secondaryColour[0]
  const { r: r3, g: g3, b: b3 } = genome?.tertiaryColour[0]
  const { r: r4, g: g4, b: b4 } = genome?.quaternaryColour[0]
  const { scale: eyeSize } = genome?.eyeSize[0]
  const { scale: noseSize } = genome?.noseSize[0]

  const props = {
    primary: `rgb(${r1},${g1},${b1})`,
    primaryShadow: `rgb(${r1 / 2},${g1 / 2},${b1 / 2})`,
    secondary: `rgb(${r2},${g2},${b2})`,
    tertiary: `rgb(${r3},${g3},${b3})`,
    quaternary: `rgb(${r4},${g4},${b4})`,
    noseSize,
    eyeSize
  }

  return (
    <div onClick={onClick}>
      <div className="blob">
        <Pikachu {...props} />
        <div className="blob__label">
          <pre className="blob__genome">{label}</pre>
        </div>
      </div>
    </div>
  )
}
