export const getCurrency = (startCurrency, endCurrency, setCurrency, setState, currentState, date = 'latest') => {
  const start = startCurrency.toLowerCase();
  const end = endCurrency.toLowerCase();
  let currency = {};

  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${end}/${start}.json`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return {
        ...currency,
        wantToHave: data[start],
      }
    })
    .then((currency) => {
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${start}/${end}.json`)
        .then((response) => {
          return response.json()
        })
        .then((second) => {
          setCurrency({
            ...currency,
            haveToWant: second[end],
          });

          setState({
            ...currentState,
            want: currentState.have * second[end],
          });
        })
    })
}
