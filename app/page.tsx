import dynamic from 'next/dynamic';

const GameBoard = dynamic(() => import('@/components/GameBoard'), {
  ssr: false
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7e9d7] p-4">
      <GameBoard />
    </main>
  );
}