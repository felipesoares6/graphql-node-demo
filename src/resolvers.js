module.exports = {
  Query: {
    info: () => `GraphQL demo made with Node.js and Prisma`,

    feed: (root, args, context, info) => {
      return context.db.query.links({}, info)
    },

    users: (root, args, context, info) => {
      return context.db.query.users({}, info)
    },

    user: (root, args, context, info) => {
      return context.db.query.user({
        where: {
          id: args.id
        }
      }, info)
    },
  },

  Mutation: {
    post: (root, args, context, info) => {
      return context.db.mutation.createLink({
        data: {
          url: args.url,
          description: args.description,
        }
      }, info)
    },

    createUser: (root, args, context, info) => {
      return context.db.mutation.createUser({
        data: {
          name: args.name,
          email: args.email,
        }
      }, info)
    },
    updateUser: (root, args, context, info) => {
      return context.db.mutation.updateUser({
        data: {
          name: args.name,
          email: args.email,
        },
        where: {
          id: args.id
        }
      }, info)
    },
    deleteUser: (root, args, context, info) => {
      return context.db.mutation.deleteUser({
        where: {
          id: args.id
        }
      }, info)
    },
  },
}
