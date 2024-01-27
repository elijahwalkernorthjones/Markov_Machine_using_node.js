/** Command-line tool to generate Markov text. */


const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

/** Make Markov machine from text and generate text from it */

function generateText(text) {
    let mm = new markov.MarkovMachine(text);

}