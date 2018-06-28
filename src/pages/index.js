import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import placeHolder from '../img/placeHolder.png'

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "row"
});

const Posts = styled("div")({
  backgroundColor: '#f1f1f1',
  border: '2px solid #0078cf', 
  padding: '1em 2em',
  marginBottom: '1.5em'
});

const PostTitles = styled("div")({
  fontSize: '25px',
  fontWeight: 'bold',
  textDecorationLine: 'underline',
  textAlign: "center",
});

const Quote = styled("div")({
  fontSize: '9px',
  fontWeight: 'bold',
  textAlign: "center"
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
                    <PostTitles className="has-text-primary">
                     {post.frontmatter.title}
                    </PostTitles>
                  </p>
                  <p>
                  <Quote className="has-text-primary" >
                    {post.frontmatter.description}
                  </Quote>
                    <br />
                  <div>
                    <img src={placeHolder} alt="Herring"/>
                  </div>
                     <br />
                   <div className="button is-small">
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
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`