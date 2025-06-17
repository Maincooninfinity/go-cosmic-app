import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from './supabaseClient'

export default function ResultPage() {
  const router = useRouter()
  const { planet, symbol, code, message, user_id } = router.query

  useEffect(() => {
    const saveToSupabase = async () => {
      const { data, error } = await supabase.from('cosmic_logs').insert([
        {
          user_id,
          date: new Date().toISOString().split('T')[0],
          planet,
          symbol,
          code,
          message,
        }
      ])

      console.log('SUPABASE SAVE RESULT:', { data, error })
    }

    if (user_id && planet && symbol && code && message) {
      saveToSupabase()
    }
  }, [planet, symbol, code, message, user_id])

  return (
    <div style={{ background: 'black', color: 'white', height: '100vh', padding: '2rem' }}>
      <h1>Your Signal Has Arrived</h1>
      <p><strong>Planet:</strong> {planet}</p>
      <p><strong>Symbol:</strong> {symbol}</p>
      <p><strong>Code:</strong> {code}</p>
      <p>{message}</p>
      <br />
      <a href="/learn" style={{ color: 'aqua' }}>Begin Your Learning Path →</a>
    </div>
  )
}
