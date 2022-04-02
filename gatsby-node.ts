import type { GatsbyNode } from 'gatsby';

const { graphql } = require('gatsby');
const chunk = require(`lodash/chunk`);
const path = require(`path`);

export const onPostBuild: GatsbyNode["onPostBuild"] = ({reporter}) => {
  reporter.info('Site Built!');
}

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql
}) => {
  // Pages
}
