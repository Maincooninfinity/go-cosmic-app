import { supabase } from './supabaseClient'
import { useEffect } from 'react'

export default function Result() {
  useEffect(() => {
    const insertLog = async () => {
      const { error } = await supabase.from('cosmic_logs').insert([
        {
          user_id: '00000000-0000-0000-0000-000000000000', // static for now
          planet: 'Mars',
          symbol: 'Silent Falcon',
          code: 'MARS-04-FALC',
          message: 'Move with clarity and fire today.',
          date: new Date().toISOString().split('T')[0]
        }
      ])
      if (error) console.error('Insert failed:', error)
      else console.log('Insert successful')
    }

    insertLog()
  }, [])

  return (
    <div style={{ padding: '2rem', color: 'white', background: 'black' }}>
      <h1>Your Signal Has Arrived</h1>
      <p><strong>Planet:</strong> Mars</p>
      <p><strong>Symbol:</strong> Silent Falcon</p>
      <p><strong>Code:</strong> MARS-04-FALC</p>
      <p>Move with clarity and fire today.</p>
      <a href="/learn" style={{ color: 'cyan' }}>Begin Your Learning Path →</a>
    </div>
  )
}
