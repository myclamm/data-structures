/* global linkedList, describe, it, expect, should */

describe('makeLinkedList()', function () {
  'use strict';
  var linkedList;

  beforeEach(function(){
    linkedList = makeLinkedList();
  });

  it('exists', function () {
    expect(makeLinkedList).to.be.a('function');

  });

  it('adds nodes', function () {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
  });

  it('removes nodes', function () {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('does not allow you to removeHead on an empty list', function(){
    linkedList.removeHead();
    expect(linkedList.head).to.equal(null);
  });

  // Add more assertions here
});
