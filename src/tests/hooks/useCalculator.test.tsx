import { renderHook, act } from "@testing-library/react-hooks";
import useCalculator from "../../hooks/useCalculator"

test("Calculator sustraction", () => {
    const { result } = renderHook(() => useCalculator());
    const {
      substraction
    } = result.current;
    expect(substraction("4","3")).toEqual("1");
  });

  test("Calculator square", () => {
    const { result } = renderHook(() => useCalculator());
    const {
        square
    } = result.current;
    expect(square("16")).toEqual("4");
  });