const useCalculator = () => {
  const addition = (value1: string, value2: string) : string => {
    return Number(Number(value1) + Number(value2)).toString();
  };

  const substraction = (value1: string, value2: string) : string => {
    return Number(Number(value1) - Number(value2)).toString();
  };

  const division = (value1: string, value2: string) : string => {
    return Number(Number(value1) / Number(value2)).toString();
  };

  const modulo = (value1: string, value2: string) : string => {
    return Number(Number(value1) % Number(value2)).toString();
  };

  const square = (value1: string) : string => {
    return Math.sqrt(Number(value1)).toString();
  };

  const multiplicator = (value1: string, value2 : string) : string => {
    return Number(Number(value1) * Number(value2)).toString();
  };

  return {
    addition,
    substraction,
    square,
    division,
    multiplicator,
    modulo
  };
};

export default useCalculator;
