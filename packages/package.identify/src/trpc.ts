import { initTRPC } from '@trpc/server'

const trpcInstance = initTRPC.create()

export const { router, procedure } = trpcInstance