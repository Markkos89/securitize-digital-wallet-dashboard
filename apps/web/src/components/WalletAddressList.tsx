type Props = {};

export const WalletAddressList = (props: Props) => {
  return (
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
  );
};
