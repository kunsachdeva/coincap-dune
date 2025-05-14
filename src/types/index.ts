export type CryptoCurrency = {
    id: string;
    symbol: string;
    name: string;
    supply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: number;
    changePercent24Hr: string;
    rank: number;
}

export type PlotDataPoint = {
    priceUsd: string;
    time: number;
    date: string;
    circulatingSupply: string;
    
}