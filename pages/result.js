import { useEffect } from 'react';
import { supabase } from './supabaseClient'; // make sure the path is correct
import Link from 'next/link';

export default function ResultPage() {
  const planet = 'Mars';
  const symbol = 'Silent Falcon';
  const code = 'MARS-04-FALC';
  const message = 'Move with clarity and fire today.';

  useEffect(() => {
    const saveToSupabase = async () => {
      const today = new Date().toISOString().split("T")[0];

      const { error } = await supabase.from('cosmic_logs').insert([
        {
          // user_id: 'some-user-id', // Uncomment & replace if using Supabase Auth
          date: today,
          planet,
          symbol,
          code,
          message,
        }
      ]);

      if (error) {
        console.error('Failed to save cosmic log:', error.message);
      } else {
        console.log('Cosmic log saved successfully.');
      }
    };

    saveToSupabase();
  }, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', padding: '2rem' }}>
      <h1>Your Signal Has Arrived</h1>
      <p><strong>Planet:</strong> {planet}</p>
      <p><strong>Symbol:</strong> {symbol}</p>
      <p><strong>Code:</strong> {code}</p>
      <p>{message}</p>

      <br />
      <Link href="/learn">
        <a style={{ color: 'cyan' }}>Begin Your Learning Path →</a>
      </Link>
    </div>
  );
}
