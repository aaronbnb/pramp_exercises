function getCheapestCost(rootNode) {
  // your code goes here
  var cost = 0;
  // rootNode.children(forEach (childNode)=> {
  //   cost += childNode.cost
  //   getCheapestCost(childNode)});
}

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost;
  this.children = [];
}

let root = new Node(0);

let depth1a = new Node(5);
let depth1b = new Node(3);
let depth1c = new Node(6);

let depth2a = new Node(4);
let depth2b = new Node(2);
let depth2c = new Node(0);
let depth2d = new Node(1);
let depth2e = new Node(5);

let depth3a = new Node(1);
let depth3b = new Node(10);

let depth4a = new Node(1);

root.children = [depth1a, depth1b, depth1c];

depth1a.children = [depth2a];
depth1b.children = [depth2b, depth2c];
depth1c.children = [depth2d, depth2e];

depth2b.children = [depth3a];
depth2c.children = [depth3b];

depth3a.children = [depth4a];

console.log(root);
