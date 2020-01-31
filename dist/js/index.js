new Vue({el:"#converter",data:{picked:"0",originalText:"",convertedText:""},methods:{convert:function(){"0"===this.picked?this.convertedText=convertToDNA(this.originalText):isInvalidDNA(this.originalText)?this.convertedText="むり...":this.convertedText=convertToLanguage(this.originalText)},tweet:function(){if(isInvalidDNA(this.convertedText))alert("むり...");else{var t="&hashtags="+encodeURI("DNA変換");location.href="https://twitter.com/intent/tweet?text="+encodeURI(this.convertedText)+t}}}});var dnaHexValue={AA:"0",AT:"1",AC:"2",AG:"3",TA:"4",TT:"5",TC:"6",TG:"7",CA:"8",CT:"9",CC:"a",CG:"b",GA:"c",GT:"d",GC:"e",GG:"f"};function stringReplaceAll(t,e,n){var r=new RegExp(e,"g");return t.replace(r,n)}function splitStringInto(t,e){for(var n=[],r=0;r+e<=t.length;)n.push(t.substring(r,r+e)),r+=e;return n}function convertToDNA(t){var e=stringToHexString(t);for(var n in dnaHexValue)e=stringReplaceAll(e,dnaHexValue[n],n);return e}function isInvalidDNA(t){return t&&t.length%2==0?null==t.match(/[ATCG]/g):(console.log("empty"),!0)}function convertToLanguage(t){var e=splitStringInto(t,2),n="";for(var r in e)n+=dnaHexValue[e[r]];return hexStringToString(n)}function stringToHexString(t){return bytesToHexString(stringToBytes(t))}function hexStringToString(t){return bytesToString(hexStringToBytes(t))}function stringToBytes(t){var e=[];if(null==t)return e;for(var n=0;n<t.length;n++){var r=t.charCodeAt(n);r<=127?e.push(r):(r<=2047?e.push(r>>6&31|192):(e.push(r>>12&15|224),e.push(r>>6&63|128)),e.push(63&r|128))}return e}function byteToHexString(t){var e=t.toString(16);return t<16?"0"+e:e}function bytesToHexString(t){for(var e="",n=0;n<t.length;n++)e+=byteToHexString(t[n]);return e}function hexStringToByte(t){return parseInt(t,16)}function hexStringToBytes(t){for(var e=[],n=0;n<t.length;n+=2)e.push(hexStringToByte(t.substr(n,2)));return e}function bytesToString(t){if(null==t)return null;for(var e,n="";e=t.shift();)if(e<=127)n+=String.fromCharCode(e);else if(e<=223){var r=(31&e)<<6;r+=63&t.shift(),n+=String.fromCharCode(r)}else if(e<=224){r=(31&t.shift())<<6|2048;r+=63&t.shift(),n+=String.fromCharCode(r)}else{r=(15&e)<<12;r+=(63&t.shift())<<6,r+=63&t.shift(),n+=String.fromCharCode(r)}return n}