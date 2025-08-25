export default {
  rules: {
    "no-any": {
      meta: {
        type: "problem",
        docs: {
          description: "Disallow usage of 'any' type",
        },
        messages: {
          noAny: "Avoid using 'any'. Use a more specific type.",
        },
        schema: [], // no options
      },
      create(context) {
        return {
          TSAnyKeyword(node) {
            context.report({
              node,
              messageId: "noAny",
            });
          },
        };
      },
    },
  },
};
