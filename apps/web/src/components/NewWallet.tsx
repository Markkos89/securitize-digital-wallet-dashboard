import { useState } from 'react';

type Props = {};

export const NewWallet = (props: Props) => {
  const [newWalletAddress, setNewWalletAddress] = useState('');
  return (
    <div className='mb-4 self-center rounded-full border-none bg-white p-3 shadow-md lg:max-w-md'>
      <div className='flex items-center'>
        <input
          type='text'
          placeholder='Add new wallet...'
          className='ml-3 w-full pt-4 text-start align-middle focus:outline-none'
          value={newWalletAddress}
          onChange={(e) => setNewWalletAddress(e.target.value)}
        />
        <button
          className='cursor-pointer rounded-full bg-cyan-400 p-4 text-center hover:enabled:bg-cyan-700 hover:enabled:font-bold hover:enabled:text-white disabled:cursor-not-allowed disabled:opacity-50'
          disabled={newWalletAddress === ''}
        >
          Add
        </button>
      </div>
    </div>
  );
};
