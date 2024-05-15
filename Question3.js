Question3.js
//DNAStrand("ATTGC") -> "TAACG"
//DNAStrand ("GTAT") -> "CATA"

function DNAStrand(dna) {
    return dna.replace(/A/g, 'X')
              .replace(/T/g, 'A')
              .replace(/X/g, 'T')
              .replace(/C/g, 'Y')
              .replace(/G/g, 'C')
              .replace(/Y/g, 'G');
}
const input = "ATTGC";
const ADN = DNAStrand(input);
console.log(ADN);