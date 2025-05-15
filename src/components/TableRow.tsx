"use client";

import { DarkModeContext } from "@/context/DarkModeContext";
import { CryptoCurrency } from "@/types";
import { shortenLargeNumber } from "@/utils";
import { useContext } from "react";

type Props = {
  cryptoCurrency: CryptoCurrency;
};

export default function TableRow({ cryptoCurrency }: Props) {
  const handleClick = (id: string) => {
    window.location.href = `/coin/${id}`;
  };
  const { contextValue: isDarkMode } = useContext(DarkModeContext);
  return (
    <tr
      onClick={() => handleClick(cryptoCurrency.id)}
      className={`border-b ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <td className="px-6 py-4">#{cryptoCurrency.rank}</td>
      <th
        scope="row"
        className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {cryptoCurrency.name}
      </th>
      <td className="px-6 py-4">
        {shortenLargeNumber(Number(cryptoCurrency.marketCapUsd), 1)}
      </td>
      <td className="px-6 py-4">
        {Number(cryptoCurrency.priceUsd).toFixed(2)}
      </td>
    </tr>
  );
}
