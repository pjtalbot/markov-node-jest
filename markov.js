/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chain = new Map()

    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let chainedWord = this.words[i+1] || null;

      if (chain.has(word)) {
        chain.get(word).push(chainedWord);
      } else {
        chain.set(word, [chainedWord])
      }
    }
    this.chain = chain;
  }

  // pick random word
  static choice(arr) {
    let randIndex = Math.floor(Math.random() * arr.length)
    return arr[randIndex]
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let keyArr = Array.from(this.chain.keys())
    let key = MarkovMachine.choice(keyArr)
    let result = []

    while (result.length < numWords && key !== null) {
      result.push(key);
      key = MarkovMachine.choice(this.chains.get(key));
    }
    return result.join(" ")
  }
}

module.exports = {MarkovMachine}
