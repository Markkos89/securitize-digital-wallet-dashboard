import { CurrenciesDropdow } from './CurrenciesDropdow';

type Props = {};

export const ConverterCard = (props: Props) => {
  return (
    <div className='mb-4 rounded-lg border border-gray-200 bg-white p-6 shadow-md md:p-2 lg:mb-0 lg:w-[40%]'>
      <div className='flex h-32 items-center justify-center space-x-5'>
        <div>
          <h2 className='mb-4 text-4xl font-bold text-gray-600'>Convert</h2>
          <CurrenciesDropdow />
          <p>25.365 $</p>
        </div>
      </div>
    </div>
  );
};
