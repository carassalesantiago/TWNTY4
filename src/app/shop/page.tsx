export default function ShopPage() {
  return (
    <main
      style={{
        minHeight:'100vh',
        background:'#0a0a0a',
        color:'#e8dfd2',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        padding:'40px'
      }}
    >
      <div>
        <p
          style={{
            letterSpacing:'0.45em',
            textTransform:'uppercase',
            fontSize:'12px',
            opacity:.65
          }}
        >
          TWNTY4
        </p>

        <h1
          style={{
            fontSize:'64px',
            fontWeight:400,
            margin:'25px 0'
          }}
        >
          Temporarily Closed
        </h1>

        <p
          style={{
            maxWidth:'620px',
            lineHeight:1.8,
            opacity:.72,
            margin:'0 auto'
          }}
        >
          Our online store is temporarily closed while
          we refine every detail of the first TWNTY4
          collection.

          Thank you for your patience.
        </p>
      </div>
    </main>
  );
}
