module.exports = {
  rules: {
    "check-import": {
      meta: {
        type: "problem",
        docs: {
          description: "import error layer",
        },
        fixable: "code",
      },
      create(context) {
        return {
          validateImport(node) {
            console.log(node);
            console.log(context);
          },
        };
      },
    },
  },
};
