import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import hooks from 'feathers-hooks';
import io from 'steal-socket.io';

let token = window.localStorage && window.localStorage.getItem('authToken'),
  query,
  url = 'feathers-donejs.herokuapp.com',
  socketConfig = {
    transports:['websocket']
  };

if (token) {
  socketConfig.query = 'token=' + token;
}
let socket = io(url, socketConfig)
console.log('socket', socket);
const app = feathers()
  .configure(socketio(socket))
  // .configure(hooks());

export {app, socket};
