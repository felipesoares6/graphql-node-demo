const { GraphQLServer } =  require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/felipe-luiz-soares-633aab/graphql-node-demo/dev',
      secret: 'mysecret123',
      debug: true,
    }),
  }),
})

server.start(() => console.log('Server is running on localhost:4000'))
