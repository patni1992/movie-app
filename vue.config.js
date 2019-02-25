module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "bootstrap/scss/_functions.scss";
          @import "@/assets/scss/_photo-app.scss";
          @import "bootstrap/scss/_mixins.scss";
          @import "bootstrap/scss/_variables.scss";
          `
      }
    }
  }
};
