import React, { useState } from "react";
import ReactLoading from "react-loading";

import { EuiOverlayMask } from "@elastic/eui";

export default function LoadingOverlay() {
  const [maskOpen, changeMask] = useState(true);

  const overlay = (
    <React.Fragment>
      <EuiOverlayMask
        headerZindexLocation="below"
        onClick={() => {
          changeMask(false);
        }}
      >
        <ReactLoading className="m-auto" type="bars" color="#f5df4d" />
      </EuiOverlayMask>
    </React.Fragment>
  );

  return <React.Fragment>{maskOpen ? overlay : undefined}</React.Fragment>;
}
