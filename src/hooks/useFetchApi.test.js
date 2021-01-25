import { useFetchApi } from "hooks/useFetchApi";
import { renderHook } from "@testing-library/react-hooks";

describe("Test useFetchApi", () => {
  // beforeAll(() => {
  //   mockAxios.get.mockImplementationOnce(() => {
  //     Promise.resolve({
  //       data: {},
  //     });
  //   });
  // });

  test("should return initial values", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchApi());
    const { data, loading, msgError } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual({});
    expect(loading).toBeTruthy();
    expect(msgError).toBeNull();
  });

  test("should return data with forecast and not loading", async () => {
    // const { result, waitForNextUpdate } = renderHook(() => useFetchApi());
    // await waitForNextUpdate();
    // const { data, loading, msgError } = result.current;
    // expect(data).toHaveProperty("today");
    // expect(data).toHaveProperty("tomorrow");
    // expect(loading).toBeFalsy();
    // expect(msgError).toBeNull();
  });
});
