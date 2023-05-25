import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { AuthRotes } from './routes/auth'

const app = fastify()
const port = 3333

app.register(cors, {
  origin: true,
})
app.register(memoriesRoutes)
app.register(AuthRotes)

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`🚀 HTTP server running on port ${3333}`)
  })
