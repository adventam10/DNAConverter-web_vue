export function stringReplaceAll(text, target, replacement) {
  var regexp = new RegExp(target, 'g');
  return text.replace(regexp, replacement);
}

export function splitStringInto(text, length) {
  var result = [];
  var index = 0;
  while (index + length <= text.length) {
    result.push(text.substring(index, index + length));
    index = index + length;
  }
  return result;
}

// 文字列を16進文字列に変換
export function stringToHexString(text) {
	var bytes = stringToBytes(text);
	var hexString = bytesToHexString(bytes);
	return hexString;
}

// 16進文字列を文字列に変換
export function hexStringToString(hexString) {
	var bytes = hexStringToBytes(hexString);
	var string = bytesToString(bytes);
	return string;
}

// 文字列をバイト配列に変換
function stringToBytes(text) {
    var result = [];
    if (text == null)
        return result;
    for (var i = 0; i < text.length; i++) {
        var c = text.charCodeAt(i);
        if (c <= 0x7f) {
            result.push(c);
        } else if (c <= 0x07ff) {
            result.push(((c >> 6) & 0x1F) | 0xC0);
            result.push((c & 0x3F) | 0x80);
        } else {
            result.push(((c >> 12) & 0x0F) | 0xE0);
            result.push(((c >> 6) & 0x3F) | 0x80);
            result.push((c & 0x3F) | 0x80);
        }
    }
    return result;
}

// バイト値を16進文字列に変換
function byteToHexString(byteNum) {
	var digits = (byteNum).toString(16);
  if (byteNum < 16) return '0' + digits;
  return digits;
}

// バイト配列を16進文字列に変換
function bytesToHexString(bytes) {
	var	result = "";
	for (var i = 0; i < bytes.length; i++) {
		result += byteToHexString(bytes[i]);
	}
	return result;
}

// 16進文字列をバイト値に変換
function hexStringToByte(hexString) {
	return parseInt(hexString, 16);
}

// バイト配列を16進文字列に変換
function hexStringToBytes(hexString) {
	var	result = [];
	for (var i = 0; i < hexString.length; i+=2) {
		result.push(hexStringToByte(hexString.substr(i,2)));
	}
	return result;
}

// バイト配列を文字列に変換
function bytesToString(bytes) {
    if (bytes == null)
        return null;
    var result = "";
    var i;
    while (i = bytes.shift()) {
        if (i <= 0x7f) {
            result += String.fromCharCode(i);
        } else if (i <= 0xdf) {
            var c = ((i&0x1f)<<6);
            c += bytes.shift()&0x3f;
            result += String.fromCharCode(c);
        } else if (i <= 0xe0) {
            var c = ((bytes.shift()&0x1f)<<6)|0x0800;
            c += bytes.shift()&0x3f;
            result += String.fromCharCode(c);
        } else {
            var c = ((i&0x0f)<<12);
            c += (bytes.shift()&0x3f)<<6;
            c += bytes.shift() & 0x3f;
            result += String.fromCharCode(c);
        }
    }
    return result;
}
