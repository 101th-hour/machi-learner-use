const machi_learner_use = require('machi-learner-use');
const machi_learner_fullkit = require('machi-learner-fullkit');
const react_dom = require('react-dom');
const web3_react = require('web3-react');
const react_redux = require('react-redux');
const enzyme = require('enzyme');
const truffle = require('truffle');
const request = require('request');
const react = require('react');

// Get the number of transactions for an address
const address = '0xaddress';
web3.eth.getTransactionCount(address).then(count => {
  console.log('Transaction count:', count);
}).catch(err => {
  console.error('Error getting transaction count:', err);
});

function sum(...args) {
  return args.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3));

const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);
console.log(`Roots: ${roots}`);