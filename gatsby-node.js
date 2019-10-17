const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`./src/templates/post.js`)
  const articleTemplate = path.resolve(`./src/templates/article.js`)
  // Query for posts and articles
  return graphql(`
      {
        posts: allMarkdownRemark(
          filter: { fileAbsolutePath: {regex:"/content\/post/"}}
          sort: { fields: [frontmatter___date], order: DESC } 
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        articles: allMarkdownRemark(
          filter: { fileAbsolutePath: {regex:"/content\/education/"}}
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create posts pages.
    const posts = result.data.posts.edges
    reporter.log(`Node: ${posts.length}`)
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      reporter.log(`Creating a post: ${post.node.fields.slug}`)

      createPage({
        path: `posts${post.node.fields.slug}`,
        component: postTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // Create education articles
    const articles = result.data.articles.edges
    reporter.log(`Articles: ${articles.length}`)
    articles.forEach(article => {
      reporter.log(`Creating an article: ${article.node.fields.slug}`)
      createPage({
        path: `${article.node.fields.slug}`,
        component: articleTemplate,
        context: {
          slug: article.node.fields.slug
        }
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
