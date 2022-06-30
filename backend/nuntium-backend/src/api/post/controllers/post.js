"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = await parseMultipartData(ctx);
      data.author = ctx.state.user.id;
      entity = await strapi.services.post.create(data, { files });
    } else {
      ctx.request.body.author = ctx.state.user.id;
      entity = await strapi.services.Post.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.post });
  },
}));
