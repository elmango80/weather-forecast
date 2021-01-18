import React, { useState, useEffect } from "react";
import { normalizeDataForComboBox } from "helpers/dataHelper";

import { EuiComboBox, EuiIcon } from "@elastic/eui";
import mockData from "mocks/locationsMock.json";

const allOptionsStatic = normalizeDataForComboBox(mockData);

export default function ComboBoxSearch(props) {
  const [allOptions, setAllOptions] = useState(allOptionsStatic);
  const [selectedOptions, setSelected] = useState([]);

  useEffect(() => {
    console.log(...selectedOptions);
  }, [selectedOptions]);

  const onChange = (selectedOptions) => {
    setSelected(selectedOptions);
  };

  const onCreateOption = (searchValue, flattenedOptions = []) => {
    if (!searchValue) {
      return;
    }

    const normalizedSearchValue = searchValue.trim().toLowerCase();

    if (!normalizedSearchValue) {
      return;
    }

    const newOption = {
      label: searchValue,
    };

    // Create the option if it doesn't exist.
    if (
      flattenedOptions.findIndex(
        (option) => option.label.trim().toLowerCase() === normalizedSearchValue
      ) === -1
    ) {
      if (allOptions[allOptions.length - 1].label !== "Custom") {
        setAllOptions([
          ...allOptions,
          {
            label: "Custom",
            options: [],
          },
        ]);
      }
      const [colors, sounds, custom] = allOptions;
      setAllOptions([
        colors,
        sounds,
        {
          ...custom,
          options: [...custom.options, newOption],
        },
      ]);
    }

    // Select the option.
    setSelected([...selectedOptions, newOption]);
  };

  return (
    <EuiComboBox
      {...props}
      placeholder="Escriba el nombre del municipio"
      options={allOptions}
      selectedOptions={selectedOptions}
      onChange={onChange}
      onCreateOption={onCreateOption}
      prepend={[<EuiIcon type="vector" />]}
    />
  );
}
