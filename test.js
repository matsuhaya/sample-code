let assert = require('assert');
let search = require('./search.js');

let recipes = search.recipes;

describe('search', () => {
  it('2件ヒットすること', () => {
    assert.deepEqual(search.searchPartialWord(recipes, 'バター'), recipes);
  });
  it('1件ヒットすること', () => {
    assert.deepEqual(search.searchPartialWord(recipes, '胡椒'), [recipes[1]]);
  });
});
