import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toComboBoxOption } from "helpers/municipalityHelper";

import { EuiComboBox, EuiFlexGrid, EuiFlexItem } from "@elastic/eui";
import { getForecast, removeForecast } from "redux/actions/forecast";

export default function ComboBoxSearch(props) {
  const [allOptions, setAllOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dispatch = useDispatch();
  const { loading, municipalities, msgError } = useSelector(
    (state) => state.municipality
  );

  useEffect(() => {
    return () => {
      dispatch(removeForecast());
    };
  }, [dispatch]);

  useEffect(() => {
    const allOptionsStatic = toComboBoxOption(municipalities);

    setAllOptions(allOptionsStatic);
  }, [municipalities]);

  const onChange = (newSelectedOptions) => {
    setSelectedOptions(newSelectedOptions);

    if (newSelectedOptions > selectedOptions) {
      const { provinceId, municipalityId } = municipalities[
        newSelectedOptions[newSelectedOptions.length - 1].key
      ];

      dispatch(getForecast(provinceId, municipalityId));
    } else {
      const paths = newSelectedOptions.map((item) => item.key);

      dispatch(removeForecast(paths));
    }
  };

  return (
    <EuiFlexGrid columns={1} direction="column" gutterSize="s">
      <EuiFlexItem>
        <EuiComboBox
          {...props}
          fullWidth
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
