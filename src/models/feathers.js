import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import hooks from 'feathers-hooks';
import io from 'steal-socket.io';

let token = window.localStorage && window.localStorage.getItem('authToken'),
  query,
  url = 'feathers-donejs.herokuapp.com',
  socket,
  socketConfig = {
    transports:['websocket']
  };

if (token) {
  socketConfig.query = 'token=' + token;
}
socket = io(url, socketConfig)

const app = feathers()
  .configure(socketio(socket))
  .configure(hooks());

export {app, socket};
