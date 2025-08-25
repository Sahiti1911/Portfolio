// .eslint/rules/selector-naming.js
export default {
  rules: {
    "selector-naming": {
      meta: {
        type: "suggestion",
        docs: {
          description:
            "Enforce Angular selector naming convention with 'sahiti-' prefix (except app-root)",
        },
        messages: {
          invalidSelector:
            "Selector '{{selector}}' does not follow naming convention. Use 'sahiti-' prefix and kebab-case (except 'app-root').",
        },
        schema: [],
      },
      create(context) {
        return {
          ClassDeclaration(node) {
            if (!node.decorators) return;

            for (const decorator of node.decorators) {
              if (
                decorator.expression.callee?.name === "Component" &&
                decorator.expression.arguments.length > 0
              ) {
                const arg = decorator.expression.arguments[0];
                if (arg.type === "ObjectExpression") {
                  const selectorProp = arg.properties.find(
                    (prop) => prop.key && prop.key.name === "selector",
                  );
                  if (selectorProp && selectorProp.value.type === "Literal") {
                    const selector = selectorProp.value.value;

                    if (
                      typeof selector === "string" &&
                      selector !== "app-root" &&
                      !/^sahiti-[a-z0-9-]+$/.test(selector)
                    ) {
                      context.report({
                        node: selectorProp.value,
                        messageId: "invalidSelector",
                        data: { selector },
                      });
                    }
                  }
                }
              }
            }
          },
        };
      },
    },
  },
};
