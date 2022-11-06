import React from "react"

import Layout from "../components/layout"
import SideBar from "../components/SideBar"

const NotFoundPage = () => (
  <Layout>
    <SideBar title="404: Not found" />
    <h1>404: Not Found</h1>
    {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
  </Layout>
)

export default NotFoundPage
