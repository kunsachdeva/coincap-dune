import Table from "@/components/Table";
import fetchTop20CryptoCurrencies from "@/network/fetchTop20CryptoCurrencies";

export default async function Home() {
  const top20CryptoCurrencies = await fetchTop20CryptoCurrencies();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[16px] row-start-2 sm:items-start">
        <div className="relative overflow-x-auto">
          <Table top20CryptoCurrencies={top20CryptoCurrencies} />
        </div>
      </main>
    </div>
  );
}
