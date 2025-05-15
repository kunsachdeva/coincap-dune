import { API_KEY, BASE } from "./constants";

const fetchTop20CryptoCurrencies = async () => {
  const url = `${BASE}/assets?limit=20&apiKey=${API_KEY}`;
  const data = await fetch(url);
  const json = await data.json();
  return json.data;
};

export default fetchTop20CryptoCurrencies;
