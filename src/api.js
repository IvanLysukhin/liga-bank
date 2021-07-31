export const getCurrency = (startCurrency, endCurrency, setCurrency, setState, currentState, date = 'latest') => {
  const start = startCurrency.toLowerCase();
  const end = endCurrency.toLowerCase();
  const currency = {};

  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${end}/${start}.json`)
    .then((response) => response.json())
    .then((data) => (
      {
        ...currency,
        wantToHave: data[start],
      }
    ))
    .then((newCurrency) => {
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${start}/${end}.json`)
        .then((response) => response.json())
        .then((second) => {
          setCurrency({
            ...newCurrency,
            haveToWant: second[end],
          });

          setState({
            ...currentState,
            want: currentState.have * second[end],
          });
        });
    });
};
