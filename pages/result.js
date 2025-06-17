import { useRouter } from 'next/router';

const symbols = {
  focused: {
    planet: 'Mars',
    symbol: 'Silent Falcon',
    code: 'MARS-04-FALC',
    message: 'Move with clarity and fire today.'
  },
  lost: {
    planet: 'Neptune',
    symbol: 'Shadow Bloom',
    code: 'NEP-07-BLOOM',
    message: 'Silence reveals your path. Trust stillness.'
  },
  confident: {
    planet: 'Jupiter',
    symbol: 'Solar Lion',
    code: 'JUP-05-LION',
    message: 'Lead the way, others will follow your flame.'
  },
  dreaming: {
    planet: 'Venus',
    symbol: 'Whisper Bloom',
    code: 'VEN-09-BLOOM',
    message: 'Softness is your shield. Let beauty guide.'
  }
};

export default function Result() {
  const router = useRouter();
  const { mood } = router.query;
  const result = symbols[mood] || {};

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '20px',
      height: '100vh'
    }}>
      <h1>Your Signal Has Arrived</h1>
      <h2>Planet: {result.planet}</h2>
      <h2>Symbol: {result.symbol}</h2>
      <h3>Code: {result.code}</h3>
      <p>{result.message}</p>

      <br />
      <a href="/learn" style={{ color: '#00ffff' }}>
        Begin Your Learning Path →
      </a>
    </div>
  );
}
