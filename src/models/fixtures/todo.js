import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /todos': store.findAll,
  'GET /todos/{id}': store.findOne,
  'POST /todos': store.create,
  'PUT /todos/{id}': store.update,
  'DELETE /todos/{id}': store.destroy
});

export default store;
