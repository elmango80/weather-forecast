import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import routes from "routes";

import { EuiPageContent, EuiPageContentBody } from "@elastic/eui";

export default function Content() {
  return (
    <EuiPageContent
      verticalPosition="center"
      hasShadow={false}
      color="transparent"
      panelPaddingSize="none"
      className="container"
    >
      <EuiPageContentBody>
        <Suspense fallback={<></>}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                component={(props) => <route.component {...props} />}
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </EuiPageContentBody>
    </EuiPageContent>
  );
}
