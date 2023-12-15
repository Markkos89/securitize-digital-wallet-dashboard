import { useState } from 'react';

type Props = {};

export const NewWallet = (props: Props) => {
  const [newWalletAddress, setNewWalletAddress] = useState('');

  const handleSaveNewWalletAddress = () => {
    console.log('handleSaveNewWalletAddress');
  };

  return (
    <div className='mb-4 w-2/4 self-center rounded-full border-none bg-white p-3 shadow-md'>
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
          onClick={handleSaveNewWalletAddress}
        >
          Add
        </button>
      </div>
    </div>
  );
};
