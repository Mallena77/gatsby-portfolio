import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <div className="l-main-content l-services">
      <PageTitle title="Services" />
      Services content
    </div>
  </Layout>
)

export default ServicesPage
