/*global Node*/
"use strict";
// Tree class
function Tree() {
    this.root = null;
}
// Adding new value/Node
Tree.prototype.addValue = function (val) {
    var n = new Node(val);
    if (this.root === null) { // First node
        this.root = n;
    } else {
        this.root.addNode(n);
    }
};

// Print all nodes in console
Tree.prototype.traverse = function () {
    this.root.visit();
};

// Search for a value. reutrn the value and `null` if the value not found
Tree.prototype.search = function (val) {
    return this.root.search(val);
};