module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "bootstrap/scss/_functions.scss";
          @import "bootstrap/scss/_mixins.scss";
          @import "bootstrap/scss/_variables.scss";
          `
      }
    }
  }
};
