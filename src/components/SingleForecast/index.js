import React from "react";
import { useSelector } from "react-redux";

import CardForecast from "components/CardForecast";

export default function SingleForecast() {
  const { data } = useSelector((state) => state.forecast);

  return <>{data && <CardForecast {...data} />}</>;
}
