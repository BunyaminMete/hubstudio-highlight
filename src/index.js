import React from 'react'

export function HighLight({ text, search }) {
  const patternFinder = (text, search) => {
    const splittedByLetters = text.split('');
    const splittedLetterToLowerCase = text.toLowerCase().split('');
    const caseSensitiveOffSearch = search.toLowerCase();

    let indexPositions = [];
    let found = true;
    //pattern control starts.
    for (let i = 0; i < splittedLetterToLowerCase.length; i++) {
      found = true;
      for (let j = 0; j < caseSensitiveOffSearch.length; j++) {
        if (splittedLetterToLowerCase[i + j] !== caseSensitiveOffSearch[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        for (let x = 0; x < caseSensitiveOffSearch.length; x++) {
          indexPositions.push(i + x);
        }
      }
    }
    //pattern  control ends.

    let createNewText = '';
    for (let i = 0; i < splittedByLetters.length; i++) {
      indexPositions.includes(i)
        ? (createNewText += `<span style='background-color:orange;'>${splittedByLetters[i]}</span>`)
        : (createNewText += `${splittedByLetters[i]}`);
    }
    console.log(createNewText);
    return createNewText;
  };

  return <div dangerouslySetInnerHTML={{ __html: patternFinder(text, search) }}></div>;
};



