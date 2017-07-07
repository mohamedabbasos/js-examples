"use strict";
// Node class
function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}
/**
 * Adding node inside the current node
 * @param {Node} n
 * @return {void}
 */
Node.prototype.addNode = function (n) {
    if (n.value < this.value) {
        if (this.left === null) {
            this.left = n;
        } else {
            this.left.addNode(n);
        }
    } else if (n.value > this.value) {
        if (this.right === null) {
            this.right = n;
        } else {
            this.right.addNode(n);
        }
    }
};
// console.log nodes
Node.prototype.visit = function () {
    if (this.left !== null) {
        this.left.visit();
    }
    console.log(this.value);
    if (this.right !== null) {
        this.right.visit();
    }
};

// Chcek if the node exsist
Node.prototype.search = function (val) {
    if (this.value === val) {
        return this;
    } else if (val < this.value && this.left !== null) {
        return this.left.search(val);
    } else if (val > this.value && this.right !== null) {
        return this.right.search(val);
    }
    return null;
};