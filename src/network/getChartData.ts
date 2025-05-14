import { API_KEY, BASE } from "./globals"

const getChartsData = async (id: string) => {
    
    const url = `${BASE}/assets/${id}/history?interval=m30&apiKey=${API_KEY}`
    const data = await fetch(url)
    const json = await data.json()
    return json.data
}

export default getChartsData