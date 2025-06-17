// pages/result.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from './supabaseClient';

export default function Result() {
  const router = useRouter();
  const { planet, symbol, code, message } = router.query;

  useEffect(() => {
    // Only run if all values exist
    if (planet && symbol && code && message) {
      const saveResult = async () => {
        const { data, error } = await supabase.from('cosmic_logs').insert([
          {
            user_id: 'anonymous', // Replace with real user ID when auth is added
            date: new Date().toISOString().split('T')[0],
            planet,
            symbol,
            code,
            message,
          },
        ]);

        if (error) {
          console.error('❌ Error saving to Supabase:', error.message);
        } else {
          console.log('✅ Cosmic log saved:', data);
        }
      };

      saveResult();
    }
  }, [planet, symbol, code, message]);

  return (
    <div style={{ background: 'black', color: 'white', minHeight: '100vh', padding: '2rem' }}>
      <h1>Your Signal Has Arrived</h1>
      <p><strong>Planet:</strong> {planet}</p>
      <p><strong>Symbol:</strong> {symbol}</p>
      <p><strong>Code:</strong> {code}</p>
      <p>{message}</p>

      <br />
      <a href="/learn" style={{ color: 'aqua' }}>Begin Your Learning Path →</a>
    </div>
  );
}
