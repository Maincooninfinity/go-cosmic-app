import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Scan() {
  const [zodiac, setZodiac] = useState('');
  const [mood, setMood] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (zodiac && mood) {
      router.push(`/result?zodiac=${zodiac}&mood=${mood}`);
    }
  };

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '20px',
      height: '100vh'
    }}>
      <h2>Your frequency shapes the universe.</h2>

      <label>
        Zodiac/Birth Month:
        <select value={zodiac} onChange={(e) => setZodiac(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="aries">Aries</option>
          <option value="taurus">Taurus</option>
          <option value="gemini">Gemini</option>
          <option value="cancer">Cancer</option>
          <option value="leo">Leo</option>
          <option value="virgo">Virgo</option>
          <option value="libra">Libra</option>
          <option value="scorpio">Scorpio</option>
          <option value="sagittarius">Sagittarius</option>
          <option value="capricorn">Capricorn</option>
          <option value="aquarius">Aquarius</option>
          <option value="pisces">Pisces</option>
        </select>
      </label>

      <br /><br />

      <label>
        Mood:
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="focused">Focused</option>
          <option value="lost">Lost</option>
          <option value="confident">Confident</option>
          <option value="dreaming">Dreaming</option>
        </select>
      </label>

      <br /><br />

      <button onClick={handleSubmit} style={{ backgroundColor: '#00ffff', padding: '10px' }}>
        Receive My Symbol
      </button>
    </div>
  );
}
