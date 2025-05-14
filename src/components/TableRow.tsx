"use client"

import { CryptoCurrency } from "@/types";

type Props = {
    cryptoCurrency: CryptoCurrency
}

function shortenLargeNumber(num: number, digits: number) {
    var units = ['k', 'M', 'B', 'T'],
        decimal;

    for(var i=units.length-1; i>=0; i--) {
        decimal = Math.pow(1000, i+1);

        if(num <= -decimal || num >= decimal) {
            return +(num / decimal).toFixed(digits) + units[i];
        }
    }

    return num;
}


export default function TableRow({cryptoCurrency}: Props) {

  const handleClick = (id: string) => {
    window.location.href = `/coin/${id}`
  }
  
  
  return (<tr onClick={()=>handleClick(cryptoCurrency.id)} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                
                <td className="px-6 py-4">
                    #{cryptoCurrency.rank}
                </td>
                <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {cryptoCurrency.name}
                </th>
                <td className="px-6 py-4">
                    {shortenLargeNumber(Number(cryptoCurrency.marketCapUsd),1)}
                </td>
                <td className="px-6 py-4">
                    {Number(cryptoCurrency.priceUsd).toFixed(2)}
                </td>
            </tr>);

}