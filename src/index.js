const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const letterLength = 10;
  const letters = [];
  const dote = ".";
  const dash = "-";
  const space = "**********";

  for (let i = 0; i < expr.length; i += letterLength) {
    letters.push(expr.slice(i, i + letterLength));
  }

  const lettersRefactor = letters.map((elem) => {
    return elem.replaceAll("00", "");
  });

  const morseLetters = lettersRefactor.map((elem) => {
    return elem.replaceAll("10", dote).replaceAll("11", dash);
  });

  const decodeLetters = morseLetters.map((letter) => {
    if (letter === space) return " ";
    return MORSE_TABLE[letter];
  });

  return decodeLetters.join("");
}

module.exports = {
  decode,
};
