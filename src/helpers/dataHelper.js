export function normalizeDataForComboBox(data) {
  const indentedData = data.reduce((acc, cur) => {
    if (!acc[cur.NOMBRE_PROVINCIA]) {
      acc[cur.NOMBRE_PROVINCIA] = [{ label: cur.NOMBRE }];
    } else {
      acc[cur.NOMBRE_PROVINCIA].push({ label: cur.NOMBRE });
    }

    return acc;
  }, {});

  const result = [];

  for (const key in indentedData) {
    result.push({ label: key, options: indentedData[key] });
  }

  return result;
}
