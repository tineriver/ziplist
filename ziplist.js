const _ = require('underscore');

function ziplist(list1, list2){
  let newList = [];
  for(let i = 0; i < list1.length; i++){
    newList.push(list1[i]);
    newList.push(list2[i]);
  }
  return newList;
}

let letters = ['a', 'b', 'c'];
let numbers = [1, 2, 3];
console.log(ziplist(letters, numbers));

function ziplistTheSimpleWay(list1, list2){
  let grouped = _.zip(list1, list2);
  return _.flatten(grouped);
}

console.log(ziplistTheSimpleWay(letters, numbers));