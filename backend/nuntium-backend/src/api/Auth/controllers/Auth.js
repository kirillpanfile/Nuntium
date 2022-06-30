"use strict";

/**
 * A set of functions called "actions" for `Auth`
 */

module.exports = {
  async me(ctx) {
    if (ctx.state.user) {
      return ctx.state.user;
    }
    ctx.unauthorized("You are not logged in");
  },
};
