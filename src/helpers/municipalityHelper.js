import _ from "lodash";

export function normalizeData(data) {
  return _.chain(data)
    .map((item) => {
      return {
        provinceId: item["CODPROV"],
        provinceName: item["NOMBRE_PROVINCIA"],
        municipalityId: item["CODIGOINE"],
        municipalityName: item["NOMBRE"],
      };
    })
    .keyBy("municipalityId")
    .value();
}

export function toComboBoxOption(data) {
  const hashTable = _.toArray(data).reduce((acc, cur) => {
    if (!acc[cur.provinceName]) {
      acc[cur.provinceName] = [
        {
          label: cur.municipalityName,
          key: cur.municipalityId,
        },
      ];
    } else {
      acc[cur.provinceName].push({
        label: cur.municipalityName,
        key: cur.municipalityId,
      });
    }

    return acc;
  }, {});

  const result = [];

  for (const key in hashTable) {
    result.push({ label: key, options: hashTable[key] });
  }

  return result;
}
