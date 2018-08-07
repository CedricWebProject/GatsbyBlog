import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import travel from '../img/Travel.png'

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
});

const Posts = styled("div")({
  backgroundColor: '#f1f1f1',
  border: '2px solid #0078cf', 
  padding: '1em 2em',
  marginBottom: '1.5em',
  position: 'relative',
});

const PostTitles = styled("div")({
  fontSize: '20px',
  fontWeight: 'bold',
});

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <Wrapper className="container">
          {posts
            .map(({ node: post }) => (
              <Link to={post.fields.slug} key={post.id}>
                <Posts className="content" >
                  <p>
                    <PostTitles className="has-text-primary" to={post.fields.slug}>
                     {post.frontmatter.title}
                    </PostTitles>
                  </p>
                  <p>
                   <div>
                    <img src={travel} alt="TravelImage"/>
                   </div>
                     <br />
                     <br />
                   <div className="button is-small" to={post.fields.slug}>
                    Start Reading →
                   </div>
                 </p>
                </Posts>
              </Link>
            ))}
        </Wrapper>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
