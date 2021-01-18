export const mockData = [
  {
    CODIGOINE: "01001000000",
    CODPROV: "01",
    NOMBRE_PROVINCIA: "Araba/Álava",
    NOMBRE: "Alegría-Dulantzi",
  },
  {
    CODIGOINE: "01002000000",
    CODPROV: "01",
    NOMBRE_PROVINCIA: "Araba/Álava",
    NOMBRE: "Amurrio",
  },
  {
    CODIGOINE: "01003000000",
    CODPROV: "01",
    NOMBRE_PROVINCIA: "Araba/Álava",
    NOMBRE: "Aramaio",
  },
  {
    CODIGOINE: "01004000000",
    CODPROV: "01",
    NOMBRE_PROVINCIA: "Araba/Álava",
    NOMBRE: "Artziniega",
  },
  {
    CODIGOINE: "11023000000",
    CODPROV: "11",
    NOMBRE_PROVINCIA: "Cádiz",
    NOMBRE: "Medina-Sidonia",
  },
  {
    CODIGOINE: "11024000000",
    CODPROV: "11",
    NOMBRE_PROVINCIA: "Cádiz",
    NOMBRE: "Olvera",
  },
  {
    CODIGOINE: "11025000000",
    CODPROV: "11",
    NOMBRE_PROVINCIA: "Cádiz",
    NOMBRE: "Paterna de Rivera",
  },
  {
    CODIGOINE: "11026000000",
    CODPROV: "11",
    NOMBRE_PROVINCIA: "Cádiz",
    NOMBRE: "Prado del Rey",
  },
  {
    CODIGOINE: "21063000000",
    CODPROV: "21",
    NOMBRE_PROVINCIA: "Huelva",
    NOMBRE: "San Bartolomé de la Torre",
  },
  {
    CODIGOINE: "21064000000",
    CODPROV: "21",
    NOMBRE_PROVINCIA: "Huelva",
    NOMBRE: "San Juan del Puerto",
  },
  {
    CODIGOINE: "42173000000",
    CODPROV: "42",
    NOMBRE_PROVINCIA: "Soria",
    NOMBRE: "Soria",
  },
  {
    CODIGOINE: "42174000000",
    CODPROV: "42",
    NOMBRE_PROVINCIA: "Soria",
    NOMBRE: "Sotillo del Rincón",
  },
  {
    CODIGOINE: "42175000000",
    CODPROV: "42",
    NOMBRE_PROVINCIA: "Soria",
    NOMBRE: "Suellacabras",
  },
];

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
