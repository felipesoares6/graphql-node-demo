const { GraphQLServer } = require('graphql-yoga')

const links = [
  {
    id: '1',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }
]

const users = [
  {
    id: '1',
    name: 'Felipe',
    email: 'felipe@son.com'
  }
]

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
    users: () => users,
    user: (root, { id }) => {
      return users.find(user => user.id === id)
    }
  },

  Mutation: {
    post(root, args) {
      const link = {
        id: links.length + 1,
        description: args.description,
        url: args.url,
      }

      links.push(link)

      return link
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))
