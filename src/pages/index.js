import React from 'react'
import Link from 'gatsby-link'
import ReactMarkdown from 'react-markdown'

import mdContent from 'raw!../../README.md'

const IndexPage = () => (
  <div>
    <ReactMarkdown source={mdContent} />
  </div>
)

export default IndexPage
