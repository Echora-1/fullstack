export const state = () => ({
  tickersList: null,
  markets: {
    USDT: [
      {
        currency: 'BTC',
        market: 'USDT',
        margin: false,
        bid: 0,
        ask: 0,
        scale: 2,
        previous: 21198.73,
        previous_day: 21205.76,
        latest: 21205.76,
        max: 21205.76,
        min: 21205.76,
        volume: 0,
      },
      {
        currency: 'TBCC',
        market: 'USDT',
        margin: false,
        bid: 0.048,
        ask: 0.0559,
        scale: 4,
        previous: 0.0559,
        previous_day: 0.045,
        latest: 0.0559,
        max: 0.056,
        min: 0.045,
        volume: 7.2417,
      },
      {
        currency: 'GOLDT',
        market: 'USDT',
        margin: false,
        bid: 1750,
        ask: 1850,
        scale: 2,
        previous: 1750,
        previous_day: 1750,
        latest: 1750,
        max: 1750,
        min: 1750,
        volume: 0,
      },
    ],
  },
})