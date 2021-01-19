import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toComboBoxOption } from "helpers/municipalityHelper";
import { getMunicipalities } from "redux/actions/municipality";

import { EuiComboBox, EuiFlexGrid, EuiFlexItem, EuiTitle } from "@elastic/eui";
import { getForecast, removeForecast } from "redux/actions/forecast";

export default function ComboBoxSearch(props) {
  const [allOptions, setAllOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dispatch = useDispatch();
  const { loading, list, msgError } = useSelector(
    (state) => state.municipality
  );

  useEffect(() => {
    dispatch(getMunicipalities());

    return () => {
      dispatch(removeForecast());
    };
  }, [dispatch]);

  useEffect(() => {
    const allOptionsStatic = toComboBoxOption(list);

    setAllOptions(allOptionsStatic);
  }, [list]);

  const onChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);

    if (selectedOptions.length) {
      const { provinceId, municipalityId } = list[selectedOptions[0].label];

      dispatch(getForecast(provinceId, municipalityId));
    } else {
      dispatch(removeForecast());
    }
  };

  return (
    <EuiFlexGrid columns={1} direction="column" gutterSize="s">
      <EuiFlexItem>
        <EuiTitle>
          <h1>Selecciona un municipio</h1>
        </EuiTitle>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiComboBox
          {...props}
          fullWidth
          singleSelection={{ asPlainText: true }}
          placeholder="Escriba el nombre del municipio"
          sortMatchesBy="startsWith"
          options={allOptions}
          isInvalid={msgError}
          selectedOptions={selectedOptions}
          onChange={onChange}
          isLoading={loading}
        />
      </EuiFlexItem>
    </EuiFlexGrid>
  );
}
