export function normalizeData(data) {
  return {
    provinceName: data["municipio"]["NOMBRE_PROVINCIA"],
    municipalityName: data["municipio"]["NOMBRE"],
    date: data["fecha"],
    stateSkyId: data["stateSky"]["id"],
    stateSkyDescription: data["stateSky"]["description"],
    currentTemperature: data["temperatura_actual"],
    maxTemperature: data["temperaturas"]["max"],
    minTemperature: data["temperaturas"]["min"],
    humidity: data["humedad"],
    wind: data["viento"],
    rain: data["lluvia"],
  };
}
