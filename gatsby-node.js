const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ graphql, actions: {createPage} }) => {
  // create blog posts
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                tags
                draft
              }
              body
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors)  throw result.errors

    const component = path.resolve(`./src/templates/blog-post.js`)

    const makePosts = posts => {
      posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node
  
        createPage({
          path: post.node.fields.slug,
          component,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        })
      })
    }

    // Create blog posts pages.
    const allPosts = result.data.allMdx.edges
    const drafts = allPosts.filter(post => post.node.frontmatter.draft)
    const published = allPosts.filter(post => !post.node.frontmatter.draft)
    makePosts(drafts)
    makePosts(published)

  })
}
