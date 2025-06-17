import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

export default function Result() {
  const [planet, setPlanet] = useState('Neptune')
  const [symbol, setSymbol] = useState('Silent Falcon')
  const [code, setCode] = useState('NEP-07-FALC')
  const [message, setMessage] = useState('Today is not for movement. It is for vision.')
  const [status, setStatus] = useState('')

  const saveLog = async () => {
    const { data, error } = await supabase
      .from('cosmic_logs')
      .insert([
        {
          user_id: 'test-user-id', // replace with real user_id later
          date: new Date().toISOString().split('T')[0],
          planet,
          symbol,
          code,
          message,
        },
      ])

    if (error) {
      console.error('Save failed:', error)
      setStatus('❌ Failed to save transmission.')
    } else {
      console.log('Saved:', data)
      setStatus('✅ Transmission saved to the stars.')
    }
  }

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center',
    }}>
      <h1>Your Signal Has Arrived</h1>
      <p><strong>Planet:</strong> {planet}</p>
      <p><strong>Symbol:</strong> {symbol}</p>
      <p><strong>Code:</strong> {code}</p>
      <p><strong>Message:</strong> {message}</p>

      <button onClick={saveLog} style={{
        marginTop: '20px',
        backgroundColor: '#00ffff',
        color: 'black',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Save This Transmission
      </button>

      {status && <p style={{ marginTop: '10px' }}>{status}</p>}
    </div>
  )
}
