// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      // console.log(this.dna)
      const selectBase = Math.floor(Math.random() * 15);
      let newBase = this.dna[selectBase];
      while (newBase === this.dna[selectBase]) {
        newBase = returnRandBase();
      }
      this.dna.splice(selectBase, 1, newBase);
      return this.dna;
    },
    compareDNA(pAequor) {
      const sameBase = [];
      for (let i = 0; i < pAequor.dna.length; i++) {
        if (pAequor.dna[i] === this.dna[i]) sameBase.push(this.dna[i]);
      }
      const fraction = (sameBase.length / this.dna.length) * 100;
      return fraction.toFixed(2);
    },
    willLikelySurvive() {
      if (
        this.dna.filter((base) => base === "C").length >= 9 ||
        this.dna.filter((base) => base === "G").length >= 9
      ) {
        return true;
      } else return false;
    },
  };
};

let count = 0;
const pAequor = [];
while (count < 30) {
  const Aequor = pAequorFactory(count, mockUpStrand());
  if (Aequor.willLikelySurvive()) {
    pAequor.push(Aequor);
    count++;
  }
}


