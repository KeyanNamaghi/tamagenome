export const toText = (genome) => {
  const { r: r1, g: g1, b: b1 } = genome?.primaryColour[0]
  const { r: r2, g: g2, b: b2 } = genome?.secondaryColour[0]
  const { r: r3, g: g3, b: b3 } = genome?.tertiaryColour[0]
  const { r: r4, g: g4, b: b4 } = genome?.quaternaryColour[0]

  const active = {
    primary: `(${r1},${g1},${b1})`,
    secondary: `(${r2},${g2},${b2})`,
    tertiary: `(${r3},${g3},${b3})`,
    quaternary: `(${r4},${g4},${b4})`
  }

  const { r: r1h, g: g1h, b: b1h } = genome?.primaryColour[1]
  const { r: r2h, g: g2h, b: b2h } = genome?.secondaryColour[1]
  const { r: r3h, g: g3h, b: b3h } = genome?.tertiaryColour[1]
  const { r: r4h, g: g4h, b: b4h } = genome?.quaternaryColour[1]

  const hidden = {
    primary: `(${r1h},${g1h},${b1h})`,
    secondary: `(${r2h},${g2h},${b2h})`,
    tertiary: `(${r3h},${g3h},${b3h})`,
    quaternary: `(${r4h},${g4h},${b4h})`
  }

  return JSON.stringify({ active }) + '\n' + JSON.stringify({ hidden })
}
