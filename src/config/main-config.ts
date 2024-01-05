export const mainConfig = {
  app: {
    host: process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000',
  },
  google: {
    analytics: {
      id: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!,
    },
  },
}
