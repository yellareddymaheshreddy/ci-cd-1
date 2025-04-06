import {WebSocketServer} from 'ws';
import {client} from "@repo/db/client"

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async function connection(ws) {
  const user=await client.user.create({
    data: {
      name: 'John Doe',}} )
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something'+JSON.stringify(user));
});