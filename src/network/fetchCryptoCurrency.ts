import { API_KEY, BASE } from "./globals";

const fetchCryptoCurrency = async (id: string) => {
  const url = `${BASE}/assets/${id}?apiKey=${API_KEY}`;
  const data = await fetch(url);
  const json = await data.json();
  return json.data;
};

export default fetchCryptoCurrency;
