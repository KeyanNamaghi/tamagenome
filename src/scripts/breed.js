function getRandomInt(val, range) {
  const min = Math.ceil(val - range >= 0 ? val - range : 0)
  const max = Math.floor(val + range <= 255 ? val + range : 255)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

const randomiseGenome = (gene) => {
  return {
    r: getRandomInt(gene.r, gene.range),
    g: getRandomInt(gene.g, gene.range),
    b: getRandomInt(gene.b, gene.range),
    range: gene.range
  }
}

export const createGenome = (genomeA, genomeB) => {
  let domA = false
  let domB = false
  const genome = []

  if (Math.random() < 0.5) {
    domA = true
  }

  if (Math.random() < 0.5) {
    domB = true
  }

  if ((domA && domB) || (!domA && !domB)) {
    if (Math.random() > 0.5) {
      genome.push(randomiseGenome(genomeA[domA ? 0 : 1]))
      genome.push(randomiseGenome(genomeB[domA ? 0 : 1]))
    } else {
      genome.push(randomiseGenome(genomeB[domA ? 0 : 1]))
      genome.push(randomiseGenome(genomeA[domA ? 0 : 1]))
    }
  } else {
    if (domA) {
      genome.push(randomiseGenome(genomeA[0]))
      genome.push(randomiseGenome(genomeB[1]))
    } else {
      genome.push(randomiseGenome(genomeB[0]))
      genome.push(randomiseGenome(genomeA[1]))
    }
  }

  return genome
}
