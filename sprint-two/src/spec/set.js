/* global linkedList, describe, it, expect, should */

describe('set()', function () {
  'use strict';
  var set;

  beforeEach(function(){
    set = makeSet();
  });

  it('should have methods', function () {
    expect(set.add).to.be.a('function');
    expect(set.remove).to.be.a('function');
    expect(set.contains).to.be.a('function');

  });

  it('adds items to the set', function () {
    set.add('cat');
    expect(set._storage['cat']).to.equal('cat');
  });

  it('removes from the set', function () {
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('does not allow you to removeHead on an empty list', function(){
    linkedList.removeHead();
    expect(linkedList.head).to.equal(null);
  });

  // Add more assertions here
});
