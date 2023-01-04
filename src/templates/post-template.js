import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  query($id: String) {
    wpPost(id: {eq: $id}) {
      title
      content
    }
  }
`

const PostTemplate = ({ data }) => {
  const post = data.wpPost

  return (
    <>
      <h1 dangerouslySetInnerHTML={{ __html: post.title}}></h1>
      <div dangerouslySetInnerHTML={{ __html: post.content}}></div>
    </>
  )
}

export default PostTemplate