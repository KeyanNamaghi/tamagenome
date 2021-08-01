function getRandomInt(val, range) {
  const min = Math.ceil(val - range >= 0 ? val - range : 0)
  const max = Math.floor(val + range <= 255 ? val + range : 255)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

function getRandomPercent(val, range) {
  const min = Math.ceil(val - range >= 0 ? val - range : 0)
  const max = Math.floor(val + range <= 100 ? val + range : 100)
  return Math.random() * (max - min) + min
}

const calculateChildGene = (gene) => {
  if (gene.r !== undefined) {
    return {
      r: getRandomInt(gene.r, gene.range),
      g: getRandomInt(gene.g, gene.range),
      b: getRandomInt(gene.b, gene.range),
      range: gene.range
    }
  } else if (gene.scale !== undefined) {
    return {
      scale: getRandomPercent(gene.scale, gene.range),
      range: gene.range
    }
  }
  console.error(gene)
}

const fiftyFiftyChance = () => Math.random() > 0.5

const createNewGene = (geneA, geneB) => {
  let domA = fiftyFiftyChance()
  let domB = fiftyFiftyChance()
  const gene = []

  if ((domA && domB) || (!domA && !domB)) {
    // Equal priority in ordering
    if (fiftyFiftyChance()) {
      gene.push(calculateChildGene(geneA[domA ? 0 : 1]))
      gene.push(calculateChildGene(geneB[domA ? 0 : 1]))
    } else {
      gene.push(calculateChildGene(geneB[domA ? 0 : 1]))
      gene.push(calculateChildGene(geneA[domA ? 0 : 1]))
    }
  } else {
    if (domA) {
      gene.push(calculateChildGene(geneA[0]))
      gene.push(calculateChildGene(geneB[1]))
    } else {
      gene.push(calculateChildGene(geneB[0]))
      gene.push(calculateChildGene(geneA[1]))
    }
  }

  return gene
}

export const createNewGenome = (genomeA, genomeB) => {
  const newGenome = {}

  newGenome.primaryColour = createNewGene(genomeA.primaryColour, genomeB.primaryColour)
  newGenome.secondaryColour = createNewGene(genomeA.secondaryColour, genomeB.secondaryColour)
  newGenome.tertiaryColour = createNewGene(genomeA.tertiaryColour, genomeB.tertiaryColour)
  newGenome.quaternaryColour = createNewGene(genomeA.quaternaryColour, genomeB.quaternaryColour)
  newGenome.noseSize = createNewGene(genomeA.noseSize, genomeB.noseSize)
  newGenome.eyeSize = createNewGene(genomeA.eyeSize, genomeB.eyeSize)

  return newGenome
}
