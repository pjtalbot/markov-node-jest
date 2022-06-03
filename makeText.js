/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

function generateStr(text) {
    let newMarkov = new markov.MarkovMachine(text)
    console.log(newMarkov.makeText())

}

function makeText(path) {
    fs.readFile(path, "utf8", function cb(err, data) {
        if (err) {
            console.error('Unable to read or locate file')
            process.exit(1);
        } else {
            generateStr(data);
        }
    })
}

async function makeURLTxt(url) {
    let res;
    try {
        res = await axios.get(url);
    } catch (err) {
        console.error('Unable to read or locate file')
        process.exit(1)
    }
    generateStr(resp.data)
}

// Is there another way to write whats below?
// makes command line args

let [method, path] = process.argv.slice(2)

if (method === 'file') {
    makeText(path)
}

else if (method === "url") {
    makeURLTxt(path)
}
else {
    console.error(`Unknown Method: ${method}`)
    process.exit(1)
}

module.exports = { makeText }