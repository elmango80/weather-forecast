import React, { useState, useEffect } from "react";
import { normalizeDataForComboBox } from "helpers/dataHelper";

import { EuiComboBox } from "@elastic/eui";
import mockData from "mocks/locationsMock.json";

const allOptionsStatic = normalizeDataForComboBox(mockData);

export default function ComboBoxSearch(props) {
  const [allOptions] = useState(allOptionsStatic);
  const [selectedOptions, setSelected] = useState([]);

  useEffect(() => {
    console.log(...selectedOptions);
  }, [selectedOptions]);

  const onChange = (selectedOptions) => {
    setSelected(selectedOptions);
  };

  return (
    <EuiComboBox
      {...props}
      placeholder="Escriba el nombre del municipio"
      options={allOptions}
      selectedOptions={selectedOptions}
      onChange={onChange}
    />
  );
}
