import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="l-main-content l-portfolio">
      <PageTitle title="Portfolio" />
      Portfolio content
    </div>
  </Layout>
)

export default PortfolioPage
