import AppMap from "can-ssr/app-map";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';
import Todo from 'feathers-donejs/models/todo';

window.Todo = Todo;

const AppViewModel = AppMap.extend({
  define: {
    message: {
      value: 'Hello World!',
      serialize: false
    },
    title: {
      value: 'feathers-donejs',
      serialize: false
    },
    todos: {
      get(){
        return Todo.findAll().then(function(data){
          console.log('app.js response to Todo.findAll():', data);
          return data;
        }, function(error){
          console.log(error);
        });
      }
    }
  }
});

export default AppViewModel;
