import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p className="text-center text-blue-600">Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="gatsby astronaut"
      />
    </div>
    <p>
      <Link to="/page-2/">Go to page 2</Link>
    </p>
    <p>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </>
)

export default IndexPage