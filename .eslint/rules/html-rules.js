export default {
  rules: {
    "button-must-have-btn-class": {
      meta: {
        type: "problem",
        docs: {
          description: "All <button> elements must have a 'btn' CSS class",
        },
        schema: [],
      },
      create(context) {
        return {
          Element(node) {
            if (node.name === "button") {
              const classAttr = node.attributes.find(
                (attr) => attr.name === "class",
              );

              if (!classAttr || !classAttr.value) {
                context.report({
                  node,
                  message: "<button> must have a 'btn' class",
                });
                return;
              }

              if (!classAttr.value.includes("btn")) {
                context.report({
                  node,
                  message: "<button> must include 'btn' in its class",
                });
              }
            }
          },
        };
      },
    },
  },
};
