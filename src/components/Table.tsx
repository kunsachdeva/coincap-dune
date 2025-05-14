"use client";

import { CryptoCurrency } from "@/types";
import TableRow from "./TableRow";
import { useState } from "react";

type Props = {
  top20CryptoCurrencies: CryptoCurrency[];
};

export default function Table({ top20CryptoCurrencies }: Props) {
  const [sort, setSort] = useState<"asc" | "dec">();
  const handlePriceHeadClick = () => {
    setSort((prevSort) => (prevSort === "asc" ? "dec" : "asc"));
  };

  const displayCoins =
    sort === "asc"
      ? top20CryptoCurrencies.sort(
          (coinA, coinB) => coinA.priceUsd - coinB.priceUsd,
        )
      : sort === "dec"
        ? top20CryptoCurrencies.sort(
            (coinA, coinB) => coinB.priceUsd - coinA.priceUsd,
          )
        : top20CryptoCurrencies;

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Rank
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Market Cap
          </th>
          <th scope="col" onClick={handlePriceHeadClick} className="px-6 py-3">
            Price (click to sort)
          </th>
        </tr>
      </thead>
      <tbody>
        {displayCoins?.map((cryptoCurrency: CryptoCurrency) => (
          <TableRow key={cryptoCurrency.id} cryptoCurrency={cryptoCurrency} />
        ))}
      </tbody>
    </table>
  );
}
