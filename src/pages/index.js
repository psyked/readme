import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div ng-bind-html="trustedHtml" class="ng-binding"><h4 id="introduction">Introduction</h4>
    <p><em>Hi, I'm James.</em></p>
    <p>Writing a self-README feels like a good way to share my own thoughts about working with myself, in a format that's curated by me and always available - unlike an email, Slack message or passing conversations which can get lost or misrepresented over time.</p>
    <h4 id="getting-started">Getting started</h4>
    <p>I prefer James instead of nicknames. My online handle is predominantly @psyked (siiked - the 'p' is silent) which I came up with back in university. But don't call me that or everyone will be confused, including me.</p>
    <h4 id="personality">Personality</h4>
    <p>By some definitions I'm an Introvert, and by others an Extrovert. In noisy or social environments I tend to be quiet and reserved, but I'm motivated by the feedback of others rather than myself.</p>
    <h4 id="social-media">Social Media</h4>
    <p>I'm on Twitter and Instagram, if you're interested. I use Twitter to harvest industry-related news, and generally avoid making a splash. I use Instagram to record the visual things that I like, but generally nothing too personally identifiable.</p>
    <p>I read for pleasure and I enjoy writing. I appreciate good, engaging writing. I publish things as often as I can on places like Medium and my blog.</p>
  </div>
)

export default IndexPage
