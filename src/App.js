import { useState } from "react";
import "./App.css";

function getRandomInt(val, range) {
  const min = Math.ceil(val - range >= 0 ? val - range : 0);
  const max = Math.floor(val + range <= 255 ? val + range : 255);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const randomiseGenome = (gene) => {
  return {
    r: getRandomInt(gene.r, gene.range),
    g: getRandomInt(gene.g, gene.range),
    b: getRandomInt(gene.b, gene.range),
    range: gene.range,
  };
};

const genomeA = [
  {
    // Purple
    r: 170,
    g: 40,
    b: 170,
    range: 15,
  },
  {
    // blue
    r: 17,
    g: 40,
    b: 170,
    range: 10,
  },
];

const genomeB = [
  {
    r: 220,
    g: 30,
    b: 160,
    range: 12,
  },
  {
    r: 12,
    g: 30,
    b: 160,
    range: 13,
  },
];

const createGenome = (genomeA, genomeB) => {
  let domA = false;
  let domB = false;
  const genome = [];

  if (Math.random() < 0.5) {
    domA = true;
  }

  if (Math.random() < 0.5) {
    domB = true;
  }

  if ((domA && domB) || (!domA && !domB)) {
    if (Math.random() > 0.5) {
      genome.push(randomiseGenome(genomeA[domA ? 0 : 1]));
      genome.push(randomiseGenome(genomeB[domA ? 0 : 1]));
    } else {
      genome.push(randomiseGenome(genomeB[domA ? 0 : 1]));
      genome.push(randomiseGenome(genomeA[domA ? 0 : 1]));
    }
  } else {
    if (domA) {
      genome.push(randomiseGenome(genomeA[0]));
      genome.push(randomiseGenome(genomeB[1]));
    } else {
      genome.push(randomiseGenome(genomeB[0]));
      genome.push(randomiseGenome(genomeA[1]));
    }
  }

  return genome;
};

const Blob = ({ genome, label, onClick }) => {
  const { r, g, b } = genome[0];
  const fill = `rgb(${r},${g},${b})`;
  return (
    <div onClick={onClick}>
      <div className="blob">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
        >
          <circle cx="50" cy="50" r="50" />
        </svg>
        <div className="blob__label">
          <span>{label}</span>
          <span>{`(${r},${g},${b})`}</span>
        </div>
      </div>
    </div>
  );
};

function App() {
  // const [mother, setMother] = useState(genomeA);
  const [father, setFather] = useState(genomeB);

  console.log(father);

  const children = [];

  for (let i = 0; i < 1; i++) {
    const newGenome = createGenome(father, father);
    children.push(
      <Blob
        genome={newGenome}
        label={i}
        key={`blob-${i}`}
        onClick={() => setFather(newGenome)}
      />
    );
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
  );
}

export default App;
