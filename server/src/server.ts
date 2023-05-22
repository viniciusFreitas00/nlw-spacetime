import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'

const app = fastify()
const port = 3333

app.register(memoriesRoutes)

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`🚀 HTTP server running on port ${3333}`)
  })
