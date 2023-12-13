export const CurrenciesDropdow = () => {
  return (
    <div className='flex w-full flex-row gap-4'>
      <label
        htmlFor='currencies'
        className='mb-2 mt-2 block text-sm font-medium text-gray-900 dark:text-gray-400'
      >
        Currency
      </label>
      <select
        id='currencies'
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
      >
        <option selected value='USD'>
          USD
        </option>
        <option value='EURO'>EURO</option>
      </select>
    </div>
  );
};
