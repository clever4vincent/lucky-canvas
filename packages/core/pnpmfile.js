module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.dependencies && pkg.dependencies.tslib) {
        pkg.dependencies.tslib = "2.3.1";
      }
      if (pkg.devDependencies && pkg.devDependencies.tslib) {
        pkg.devDependencies.tslib = "2.3.1";
      }
      return pkg;
    },
  },
};
