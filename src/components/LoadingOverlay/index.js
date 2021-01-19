import React, { useState } from "react";

import { EuiLoadingElastic, EuiOverlayMask } from "@elastic/eui";

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
        <EuiLoadingElastic size="xxl" />
      </EuiOverlayMask>
    </React.Fragment>
  );

  return <React.Fragment>{maskOpen ? overlay : undefined}</React.Fragment>;
}
