import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('feathers-donejs functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('feathers-donejs main page shows up', function() {
  F('title').text('feathers-donejs', 'Title is set');
});
