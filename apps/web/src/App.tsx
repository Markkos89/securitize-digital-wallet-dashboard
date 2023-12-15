import { ConverterCard } from './components/ConverterCard';
import { EthRateCard } from './components/EthRateCard';
import { NewWallet } from './components/NewWallet';
import { WalletAddressList } from './components/WalletAddressList';

export default function App() {
  return (
    <main className='max-w-full'>
      <h1 className='w-full bg-cyan-300 text-center text-2xl'>Digital Wallet Dashboard</h1>
      <div className='mt-5 w-full lg:flex lg:flex-col '>
        <NewWallet />

        <div className='h-44 w-full items-center justify-center gap-4 lg:flex'>
          <EthRateCard />

          <ConverterCard />
        </div>

        <WalletAddressList />
      </div>
    </main>
  );
}
