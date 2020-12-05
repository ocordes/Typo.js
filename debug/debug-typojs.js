let Typo = require('../typo/');

console.log('Loading ...');

function test(dict, word){
  console.log('check word \"'+word+'\": '+dict.check(word));
}

var dict = new Typo('it_IT');
//var dict = new Typo('en_US');

console.log('Loaded ...');

test(dict, 'Hello');
test(dict, 'HEllo');
test(dict, 'hello');

//var s = '/ dies ist';
//var t = 'hasa/as';

//console.log(s.replace(/^\/.*/g,''));
//console.log(t.replace(/^\/.*/g,''));

console.log('Done.');
