import { FastifyInstance } from 'fastify'
import axios from 'axios'
import { z } from 'zod'

export async function AuthRotes(app: FastifyInstance) {
  app.post('/register', async (resquest) => {
    const bodyScheme = z.object({
      code: z.string(),
    })

    const { code } = bodyScheme.parse(resquest.body)

    const accessTokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      },
    )

    const { access_token } = accessTokenResponse.data

    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    const userSchema = z.object({
      id: z.number(),
      login: z.string(),
      name: z.string(),
      avatar_url: z.string().url(),
    })

    const user = userSchema.parse(userResponse.data)

    return {
      user,
    }
  })
}
