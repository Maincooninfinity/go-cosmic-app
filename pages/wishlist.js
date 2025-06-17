export default function Wishlist() {
  const sampleWishlist = [
    { item: 'Neptune Cloak Hoodie', description: 'For dreamers who walk unseen.' },
    { item: 'Orbit 7 Slide – Moon Edition', description: 'Walk like your mind is in orbit.' }
  ];

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '20px',
      height: '100vh',
      overflowY: 'scroll'
    }}>
      <h1>Your Wishlist</h1>
      <p>These are the pieces you've chosen to resonate with your planetary energy.</p>

      <ul>
        {sampleWishlist.map((entry, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <strong>{entry.item}</strong><br />
            <em>{entry.description}</em>
          </li>
        ))}
      </ul>

      <br />
      <a href="/" style={{ color: '#00ffff' }}>← Back to Portal</a>
    </div>
  );
}
