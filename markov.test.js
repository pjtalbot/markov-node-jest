const { MarkovMachine } = require('./markov');
// const { makeText, generateStr, makeURLTxt } = require('./makeText');
const axios = require("axios");
const process = require("process");
const fs = require('fs')
// const { makeText } = require('./makeText')

// beforeEach(() => {let mm = new MarkovMachine('the end of the day of the end')
    

// })

describe('constructor tests', function() {
    
    let mm = new MarkovMachine("aa bb cc aa BB aa BB");
    test('making instance', function() {
        expect(mm).toBeInstanceOf(MarkovMachine)
    })
    test('chain object', function() {
        expect(typeof mm.chain).toBe('object')
        expect(mm.chain.size).toEqual(4)
    })
    

})

describe('makeChains tests', function() {
    test('making chains', function() {
        let mm = new MarkovMachine("aa bb cc aa BB aa BB");

    expect(mm.chain).toEqual(new Map([
      ["aa", ["bb", "BB", "BB"]],
      ["bb", ["cc"]],
      ["cc", ["aa"]],
      ["BB", ["aa", null]]]));
    console.log(mm.chain.get('aa'))
    expect(mm.chain.get('aa')[1]).toEqual('BB')

  });

  test('returns string', function() {

      let mm = new MarkovMachine('hee hee ha ha ho')
      let result = mm.makeText();
      expect(typeof result).toBe('string')
  })

})


// test('makeText', function() {

    
   
// })


