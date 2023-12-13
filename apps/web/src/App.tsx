import { CurrenciesDropdow } from './components/CurrenciesDropdow';
import { NewWallet } from './components/NewWallet';

export default function App() {
  return (
    <main className='max-w-full'>
      <h1 className='w-full bg-cyan-300 text-center text-2xl'>Digital Wallet Dashboard</h1>
      <div className='mt-5 w-full lg:flex lg:flex-col '>
        <NewWallet />

        <div className='h-44 w-full items-center justify-center gap-4 lg:flex'>
          <div className='mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-md md:p-2 lg:mb-0 lg:w-[40%]'>
            <div className='flex h-32 items-center justify-center space-x-5'>
              <div>
                <h2 className='mb-4 text-4xl font-bold text-gray-600'>ETH rate</h2>
                <div className='flex flex-row gap-6'>
                  <div>
                    <label>Euro</label>
                    <p>$25.365 </p>
                  </div>
                  <div>
                    <label>USD</label>
                    <p>$25.365</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-md md:p-2 lg:mb-0 lg:w-[40%]'>
            <div className='flex h-32 items-center justify-center space-x-5'>
              <div>
                <h2 className='mb-4 text-4xl font-bold text-gray-600'>Convert</h2>
                <CurrenciesDropdow />
                <p>25.365 $</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-4 my-4 rounded-lg bg-white p-4 shadow-md'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className='w-full border-b-2 px-4 py-2 text-left'>
                  <h2 className='text-ml font-bold text-gray-600'>Saved Wallets</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='w-full border-b'>
                <td className='px-4 py-2 text-left align-top'>
                  <div>
                    <h2>0xc0ffee254729296a45a3885639AC7E10F9d54979</h2>
                  </div>
                </td>
                {/* <td className='w-1/2 px-4 py-2 text-right'>
                  <p>
                    <span></span>
                  </p>
                </td> */}
              </tr>
              <tr className='w-full border-b'>
                <td className=' px-4 py-2 text-left align-top'>
                  <div>
                    <h2>0x999999cf1046e68e36E1aA2E0E07105eDDD1f08E</h2>
                  </div>
                </td>
                <td className='py-2 pr-4 text-right'>
                  <p>
                    <span className='text-red-500'>Old!</span>
                  </p>
                </td>
              </tr>
              <tr className='w-full border-b'>
                <td className='px-4 py-2 text-left align-top'>
                  <div>
                    <h2>0x74c5D3c96687406C5667C82179d9a21Bcf3825BD</h2>
                  </div>
                </td>
                {/* <td className='w-1/2 px-4 py-2 text-right text-cyan-500'>
                  <p>
                    <span>50$</span>
                  </p>
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
