const { add, multiply } = require('./index.js');
const assert = require('assert');

// Test pour la fonction add
assert.strictEqual(add(2,3), 5, 'add(2, 3) doit retourner 5');

// Test pour la fonction multiply
assert.strictEqual(multiply(4,5), 20, 'multiply(4, 5) doit retourner 20');

console.log('Tous les tests ont réussi !');