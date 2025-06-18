import { useEffect } from 'react'
import { supabase } from '../supabaseClient.js';

export default function Home() {
  useEffect(() => {
    const testInsert = async () => {
      const { data, error } = await supabase.from('symbols').insert([
        {
          user_ref: '00000000-0000-0000-0000-000000000000', // ✅ Dummy user_ref for testing
          planet: 'Mars',
          symbol: 'Silent Falcon',
          code: 'MARS-04-FALC',
          message: 'Move with clarity and fire today.'
        }
      ]);

      if (error) {
        console.error('Insert failed:', error);
      } else {
        console.log('Insert success:', data);
      }
    };

    testInsert();
  }, []);

  return (
    <div>
      <h1>Go Cosmic</h1>
      <p>Testing Supabase insert…</p>
    </div>
  );
}
