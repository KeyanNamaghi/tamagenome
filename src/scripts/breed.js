function getRandomInt(val, range) {
  const min = Math.ceil(val - range >= 0 ? val - range : 0)
  const max = Math.floor(val + range <= 255 ? val + range : 255)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

const calculateChildGene = (gene) => {
  return {
    r: getRandomInt(gene.r, gene.range),
    g: getRandomInt(gene.g, gene.range),
    b: getRandomInt(gene.b, gene.range),
    range: gene.range
  }
}

const fiftyFiftyChance = () => Math.random() > 0.5

export const createNewGene = (geneA, geneB) => {
  let domA = fiftyFiftyChance()
  let domB = fiftyFiftyChance()
  const genome = []

  if ((domA && domB) || (!domA && !domB)) {
    // Equal priority in ordering
    if (fiftyFiftyChance()) {
      genome.push(calculateChildGene(geneA[domA ? 0 : 1]))
      genome.push(calculateChildGene(geneB[domA ? 0 : 1]))
    } else {
      genome.push(calculateChildGene(geneB[domA ? 0 : 1]))
      genome.push(calculateChildGene(geneA[domA ? 0 : 1]))
    }
  } else {
    if (domA) {
      genome.push(calculateChildGene(geneA[0]))
      genome.push(calculateChildGene(geneB[1]))
    } else {
      genome.push(calculateChildGene(geneB[0]))
      genome.push(calculateChildGene(geneA[1]))
    }
  }

  return genome
}
