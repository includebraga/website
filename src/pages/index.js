import React from "react";

import Layout from "../components/Layout";
import Terminal from "../components/Terminal";
import WhoWeAre from "../sections/WhoWeAre";
import WhatWeDo from "../sections/WhatWeDo";
import History from "../sections/History";
import Team from "../sections/Team";

const IndexPage = () => (
  <Layout>
    <Terminal>
      <WhoWeAre />
      <WhatWeDo />
      <History />
      <Team />
    </Terminal>
  </Layout>
);

export default IndexPage;
