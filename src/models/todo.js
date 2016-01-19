import can from 'can';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can/map/define/define';
import {app, socket} from 'feathers-donejs/models/feathers';

var service = app.service('todos');
window.service = service;
console.log('todo.js service.find')
service.find().then(function(data){
  console.log('todo.js data', data);
});

export const Todo = can.Map.extend({
  define: {}
});


Todo.List = can.List.extend({
  Map: Todo
}, {});

export const todoConnection = superMap({
  // url: 'todos',
  idProp: '_id',
  Map: Todo,
  List: Todo.List,
  name: 'todo',
  url: {
    getListData(params){
      return service.find(params);
    },
    getData(params){
      return service.get(params[connection.idProp], params);
    },
    createData(data){
      return service.create(data);
    },
    updateData(data){
      return service.update(data[connection.idProp], data);
    },
    destroyData(id){
      return service.remove(id);
    }
  }
});

tag('todo-model', todoConnection);

socket.on('todos created', todo => connection.createInstance(todo));
socket.on('todos updated', todo => connection.updateInstance(todo));
socket.on('todos removed', todo => connection.destroyInstance(todo));

export default Todo;
