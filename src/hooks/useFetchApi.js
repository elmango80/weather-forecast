import { useState, useEffect } from "react";
import { axios } from "helpers/axiosHelper";

export const useFetchApi = () => {
  const [state, setState] = useState({
    data: {},
    loading: true,
    msgError: null,
  });

  useEffect(() => {
    axios
      .get(`/home`)
      .then((response) => {
        const data = {
          today: response.data.today.p,
          tomorrow: response.data.tomorrow.p,
        };

        setState({ data, loading: false, msgError: null });
      })
      .catch((error) => {
        setState({
          data: [],
          loading: false,
          msgError: "No se ha podido obtener el pronóstico nacional",
        });

        console.error(error);
      });
  }, []);

  return state;
};
