export default function Log() {
  const sampleLogs = [
    { date: 'June 16, 2025', planet: 'Mars', symbol: 'Silent Falcon', code: 'MARS-04-FALC', message: 'Move with clarity and fire today.' },
    { date: 'June 15, 2025', planet: 'Neptune', symbol: 'Shadow Bloom', code: 'NEP-07-BLOOM', message: 'Silence reveals your path. Trust stillness.' }
  ];

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '20px',
      height: '100vh',
      overflowY: 'scroll'
    }}>
      <h1>Your Cosmic Log</h1>
      <p>This is your archive of daily symbols, codes, and messages.</p>

      <ul>
        {sampleLogs.map((entry, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <strong>{entry.date}</strong><br />
            Planet: {entry.planet}<br />
            Symbol: {entry.symbol}<br />
            Code: {entry.code}<br />
            Message: <em>{entry.message}</em>
          </li>
        ))}
      </ul>

      <br />
      <a href="/" style={{ color: '#00ffff' }}>← Back to Portal</a>
    </div>
  );
}
