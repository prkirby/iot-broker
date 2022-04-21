import 'dotenv/config'
import Aedes from 'aedes'
import { createServer } from 'aedes-server-factory'

const port = parseInt(process.env.PORT || '1883')

const aedes = Aedes({
  id: 'PKIRBY_BROKER',
})

const server = createServer(aedes)

server.listen(port, function () {
  console.log('server started and listening on port ', port)
})

// fired when a client connects
aedes.on('client', function (client) {
  console.log(`Client Connected: ${client?.id} to broker ${aedes.id}`)
})

// fired when a client disconnects
aedes.on('clientDisconnect', function (client) {
  console.log(`Client Disconnected: ${client?.id} from broker ${aedes.id}`)
})

aedes.on('subscribe', function (subscriptions, client) {
  console.log(
    `MQTT client ${client?.id} subscribed to topics: ${subscriptions
      .map((s) => s.topic)
      .join('\n')} from broker ${aedes.id}`
  )
})

aedes.on('unsubscribe', function (subscriptions, client) {
  console.log(
    `MQTT client ${client?.id} unsubscribed to topics ${subscriptions.join(
      '\n'
    )} from broker${aedes.id}`
  )
})

// fired when a message is published
aedes.on('publish', async function (packet, client) {
  console.log(
    `Client ${
      client ? client.id : aedes.id
    } has published ${packet.payload.toString()} on ${packet.topic} to broker ${
      aedes.id
    }`
  )
})
