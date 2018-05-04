import React from "react";

import History from "../sections/History";
import Team from "../sections/Team";
import Terminal from "../components/Terminal";
import WhatWeDo from "../sections/WhatWeDo";
import WhoWeAre from "../sections/WhoWeAre";

const IndexPage = () => (
  <div>
    <Terminal>
      <WhoWeAre />
      <WhatWeDo />
      <History />
      <Team />
    </Terminal>
  </div>
);

export default IndexPage;
