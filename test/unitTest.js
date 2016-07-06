var expect = require('chai').expect;
var toDo = require('../src/toDo').toDo;

describe('To do List', function() {
  var todo = new toDo();

  it('list includes Eat Breakfast', function() {
    todo.add('Eat Breakfast');
    expect(todo.list()[0][0]).to.include('Eat Breakfast');
  });

  it('returns boolean when complete', function() {
    expect(todo.complete()).to.be.a('boolean');
  });

  xit('changes not complete to complete', function() {
    todo.add('Eat Breakfast');
    todo.complete('Eat Breakfast,false');
    expect(todo.list()[0][1]).to.equal(true);
  });
});