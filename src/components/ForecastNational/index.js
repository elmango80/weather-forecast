import React, { Fragment } from "react";
import { htmlIdGenerator } from "@elastic/eui/lib/services";

import { useFetchApi } from "hooks/useFetchApi";

import {
  EuiLoadingContent,
  EuiPanel,
  EuiSpacer,
  EuiTabbedContent,
  EuiText,
  EuiTitle,
} from "@elastic/eui";

import "./styles.css";

const tabContent = (paragraphs) =>
  paragraphs.map((paragraph, index) => (
    <Fragment key={index}>
      <EuiText data-test-subj="forecast-national">{paragraph}</EuiText>
      <EuiSpacer />
    </Fragment>
  ));

export default function ForecastNational() {
  const { data: forecast, loading, msgError } = useFetchApi();

  const tabs = [
    {
      id: htmlIdGenerator()(),
      name: "Hoy",
      content: (
        <>
          <EuiSpacer />
          {loading ? (
            <>
              <EuiLoadingContent data-test-subj="loading-content" lines={2} />
              <EuiLoadingContent data-test-subj="loading-content" lines={3} />
            </>
          ) : msgError ? (
            <EuiText color="danger" data-test-subj="forecast-national-error">
              {msgError}
            </EuiText>
          ) : (
            tabContent(forecast.today)
          )}
        </>
      ),
    },
    {
      id: htmlIdGenerator()(),
      name: "Mañana",
      content: (
        <>
          <EuiSpacer />
          {!loading && !msgError && tabContent(forecast.tomorrow)}
        </>
      ),
    },
  ];

  return (
    <EuiPanel className="panel-forecast-national">
      <EuiTitle>
        <span>Previsión España</span>
      </EuiTitle>
      <EuiSpacer size="l" />
      {!loading &&
        (msgError ? (
          <EuiText color="danger">msgError</EuiText>
        ) : (
          <EuiTabbedContent
            tabs={tabs}
            disabled={loading || msgError}
            initialSelectedTab={tabs[0]}
            autoFocus="selected"
          />
        ))}
    </EuiPanel>
  );
}
