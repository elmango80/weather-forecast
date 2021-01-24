import React from "react";
import ReactLoading from "react-loading";

import { EuiOverlayMask } from "@elastic/eui";

export default function LoadingOverlay() {
  return (
    <>
      <EuiOverlayMask headerZindexLocation="below">
        <ReactLoading className="m-auto" type="bars" color="#f5df4d" />
      </EuiOverlayMask>
    </>
  );
}
