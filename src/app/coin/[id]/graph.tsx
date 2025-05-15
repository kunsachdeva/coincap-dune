"use client";

import { PlotDataPoint } from "@/types";
import ApexCharts from "apexcharts";
import { useEffect, useState } from "react";
import getGraphOptions from "./generateGraphOptions";

type Props = {
  cryptoCurrencyId: string;
};

export default function Plot({ cryptoCurrencyId }: Props) {
  const [firstPoint, setFirstPoint] = useState<PlotDataPoint>();
  const [lastPoint, setLastPoint] = useState<PlotDataPoint>();
  useEffect(() => {
    getGraphOptions(cryptoCurrencyId).then((options) => {
      setFirstPoint(options.series[0].data[0]);
      setLastPoint(options.series[0].data[options.series[0].data.length - 1]);
      const chart = new ApexCharts(
        document.getElementById("area-chart"),
        options,
      );
      chart.render();
      setInterval(() => {
        getGraphOptions(cryptoCurrencyId).then((newOptions) => {
          chart.updateOptions(newOptions);
        });
      }, 10000);
    });
  }, [cryptoCurrencyId]);

  return (
    <div className="max-h-420 w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-4 md:p-6 mb-6">
      {firstPoint && (
        <div className="flex justify-between">
          <div>
            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
              ${Number(lastPoint).toFixed(2)}
            </h5>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Historical price chart
            </p>
          </div>
          <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-gray-500 dark:text-gray-500 text-center">
            {(
              (100 * (Number(lastPoint) - Number(firstPoint))) /
              Number(firstPoint)
            ).toFixed(2)}
            %
          </div>
        </div>
      )}
      <div className="overflow-hidden" id="area-chart"></div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="lastDaysdropdown"
            data-dropdown-placement="bottom"
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
            type="button"
          >
            Last 15 days
            <svg
              className="w-2.5 m-2.5 ms-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="lastDaysdropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Yesterday
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Today
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Last 7 days
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Last 30 days
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Last 90 days
                </a>
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
          >
            Detailed report
            <svg
              className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
