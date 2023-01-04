const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // query content for WordPress posts
  const result = await graphql(`
  {
    allWpPage {
      nodes {
        id
        uri
      }
    }
    allWpPost {
      nodes {
        id
        uri
      }
    }
  }
  `)

  const pages = result.data.allWpPage.nodes
  const posts = result.data.allWpPost.nodes

  const pageTemplate = path.resolve(`./src/templates/page-template.js`)
  const postTemplate = path.resolve(`./src/templates/post-template.js`)

  pages.forEach(page => {
    createPage({
      path: page.uri,
      component: slash(pageTemplate),
      context: {
        id: page.id,
      }
    })
  })
  posts.forEach(post => {
    createPage({
      path: post.uri,
      component: slash(postTemplate),
      context: {
        id: post.id,
      }
    })
  })
}