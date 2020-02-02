import Vue from 'vue'
import {convertToDNA, isInvalidDNA, convertToLanguage} from './dna-converter';

new Vue({
  el: '#converter',
  data: {
    picked: '0',
    originalText: '',
    convertedText: ''
  },
  methods: {
    convert: function () {
      if (this.picked === '0') {
        this.convertedText = convertToDNA(this.originalText);
      } else {
        if (isInvalidDNA(this.originalText)) {
          this.convertedText = 'むり...';
        } else {
          this.convertedText = convertToLanguage(this.originalText);
        }
      }
    },
    tweet: function () {
      if (isInvalidDNA(this.convertedText)) {
        alert('むり...');
        return;
      }
      var hashTag = '&hashtags=' + encodeURI('DNA変換');
      location.href='https://twitter.com/intent/tweet?text=' + encodeURI(this.convertedText) + hashTag;
    }
  }
})
