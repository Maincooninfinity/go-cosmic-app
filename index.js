export default function Home() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1>The Signal Has Found You</h1>
      <p>Do you wish to receive it?</p>
      <a href="/scan" style={{ marginTop: '20px', color: '#00ffff' }}>
        YES, OPEN THE PORTAL →
      </a>
    </div>
  );
}
