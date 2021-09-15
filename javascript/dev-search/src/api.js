const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: async keyword => {
    return await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`)
    .then(res => res.json())
    .catch(e => new Error(`fetchCats Error : ${e.message}`))
  },
  randomCats: async () => {
    return await fetch(`${API_ENDPOINT}/api/cats/random50`)
    .then(res => res.json())
    .catch(e => new Error(`randomCats Error : ${e.message}`))
  },
  getCatStat: async id => {
    return await fetch(`${API_ENDPOINT}/api/cats/${id}`)
    .then(res => res.json())
    .then(data => data)
    // .catch(e => new Error(`randomCats Error : ${e.message}`))
  }
};
