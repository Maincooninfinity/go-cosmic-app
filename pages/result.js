// pages/result.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from './supabaseClient';

const Result = () => {
  const router = useRouter();
  const { planet, symbol, code, message } = router.query;

  // Simulate a test user ID (replace with real auth later)
  const user_id = '00000000-0000-0000-0000-000000000000';

  useEffect(() => {
    if (planet && symbol && code && message) {
      const saveToSupabase = async () => {
        const { data, error } = await supabase.from('cosmic_logs').insert([
          {
            user_id,
            planet,
            symbol,
            code,
            message,
            date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
          },
        ]);

        if (error) {
          console.error('❌ Error saving log:', error);
        } else {
          console.log('✅ Cosmic log saved:', data);
        }
      };

      saveToSupabase();
    }
  }, [planet, symbol, code, message]);

  return (
    <div style={{ background: 'black', color: 'white', padding: '2rem' }}>
      <h1>Your Signal Has Arrived</h1>
      <p><strong>Planet:</strong> {planet}</p>
      <p><strong>Symbol:</strong> {symbol}</p>
      <p><strong>Code:</strong> {code}</p>
      <p>{message}</p>

      <br />
      <a href="/learn" style={{ color: 'aqua' }}>Begin Your Learning Path →</a>
    </div>
  );
};

export default Result;
