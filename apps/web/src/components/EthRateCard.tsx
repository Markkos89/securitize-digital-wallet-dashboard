import { useState } from 'react';
import { FaCheck, FaEdit, FaTimes } from 'react-icons/fa';

type Props = {};

export const EthRateCard = (props: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [newEuroRate, setNewEuroRate] = useState(0);
  const [newUSDRate, setNewUSDRate] = useState(0);

  const handleEditModeOnClick = () => {
    setEditMode(true);
  };

  const handleEditModeOffClick = () => {
    setEditMode(false);
  };

  const handleSaveEditedRateClick = () => {
    console.log('handleSaveEditedRateClick');
    setNewEuroRate(0);
    setNewUSDRate(0);
    setEditMode(false);
  };

  const handleNewEuroRateInputChange = (event: any) => {
    setNewEuroRate(event.target.value);
  };

  const handleNewUSDRateInputChange = (event: any) => {
    setNewUSDRate(event.target.value);
  };

  return (
    <div className='mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-md md:p-2 lg:mb-0 lg:w-[40%]'>
      <div className='flex h-32 flex-col items-center justify-center space-x-5'>
        <div className='flex w-full justify-end pr-16'>
          {editMode ? (
            <>
              <FaCheck
                className='mr-4 cursor-pointer text-green-500'
                onClick={handleSaveEditedRateClick}
              />
              <FaTimes className='cursor-pointer text-red-500' onClick={handleEditModeOffClick} />
            </>
          ) : (
            <FaEdit className='cursor-pointer text-blue-500' onClick={handleEditModeOnClick} />
          )}
        </div>
        <div>
          <h2 className='mb-4 text-4xl font-bold text-gray-600'>ETH rate</h2>
          <div className='flex flex-row gap-6'>
            <div className='flex flex-col gap-2'>
              <label>Euro</label>
              {editMode ? (
                <input
                  value={newEuroRate}
                  onChange={handleNewEuroRateInputChange}
                  className='w-10'
                />
              ) : (
                <p>$25.365 </p>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <label>USD</label>
              {editMode ? (
                <input value={newUSDRate} onChange={handleNewUSDRateInputChange} className='w-10' />
              ) : (
                <p>$25.365 </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
