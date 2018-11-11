module.exports = {
  Query: {
    info: () => `GraphQL demo made with Node.js and Prisma`,

    feed: (root, args, context, info) => {
      return context.db.query.links({}, info)
    },
  },

  Mutation: {
    post: (root, args, context, info) => {
      return context.db.mutation.createLink({
        data: {
          url: args.url,
          description: args.description,
        },
      }, info)
    },
  },
}
