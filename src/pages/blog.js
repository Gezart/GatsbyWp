import React from 'react'
import AllBlog from '../components/AllBlog'
import Container from '../components/Container/Container'
import Header from '../components/Header'
import { graphql } from 'gatsby'

const Blog = ({data}) => {
    console.log("All posts:", data.allWpPost)
    return (
        <>
            <Header />
            <Container>
                <AllBlog posts={data.allWpPost.nodes} />
            </Container>   
        </>
    )
}

export default Blog


export const data = graphql `
query MyQuery {
    allWpPost {
      nodes {
        date
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        content
        slug
      }
    }
  } 
`
