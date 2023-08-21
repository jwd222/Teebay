export function FormWrapper({ label, children }) {
  return (
    <>
      <h2 style={{ textAlign: 'center', margin: 0, marginBottom: '2rem' }}>
        {label}
      </h2>
      <div
        style={{
          display: 'flex',
          gap: '1rem .5rem',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        {children}
      </div>
    </>
  )
}
