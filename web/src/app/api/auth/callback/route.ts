import { NextRequest, NextResponse } from 'next/server'

import { api } from '@/lib/api'
import { request } from 'http'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const resgisterResponse = await api.post('/register', {
    code,
  })

  const { token } = resgisterResponse.data

  const redirecURL = new URL('/', request.url)

  const cookieExpiresInSecondes = 60 * 60 * 24 * 60

  return NextResponse.redirect(redirecURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSecondes}`,
    },
  })
}
