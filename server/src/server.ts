import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()
const port = 3333

app.register(cors, {
  origin: true,
})
app.register(memoriesRoutes)

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`🚀 HTTP server running on port ${3333}`)
  })
