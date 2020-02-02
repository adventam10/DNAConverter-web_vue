import {stringReplaceAll, splitStringInto, stringToHexString, hexStringToString} from './string-converter';

var dnaHexValue = {'AA': '0', 'AT': '1', 'AC': '2', 'AG': '3',
         'TA': '4', 'TT': '5', 'TC': '6', 'TG': '7',
         'CA': '8', 'CT': '9', 'CC': 'a', 'CG': 'b',
         'GA': 'c', 'GT': 'd', 'GC': 'e', 'GG': 'f'};

export function convertToDNA(text) {
  var hex = stringToHexString(text);
  var result = hex;
  for (var dna in dnaHexValue) {
    result = stringReplaceAll(result, dnaHexValue[dna], dna);
  }
  return result;
}

export function isInvalidDNA(text) {
  if (!text || text.length % 2 != 0) {
    return true;
  }
  var result = text.match(/[ATCG]/g);
  return result == null;
}

export function convertToLanguage(text) {
  var dnaArray = splitStringInto(text, 2);
  var result = ""
  for (var index in dnaArray) {
    result = result + dnaHexValue[dnaArray[index]];
  }
  return hexStringToString(result);
}
