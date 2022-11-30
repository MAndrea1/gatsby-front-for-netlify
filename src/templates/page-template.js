import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  query($id: String) {
    wpPage(id: {eq: $id}) {
      title
      content
    }
  }
`

const PageTemplate = ({ data }) => {
  const page = data.wpPage

  return (
    <>
      <h1 dangerouslySetInnerHTML={{ __html: page.title}}></h1>
      <div dangerouslySetInnerHTML={{ __html: page.content}}></div>
    </>
  )
}

export default PageTemplate