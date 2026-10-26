import { useState } from 'react'
import { useRouter } from 'next/router'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()

      if (!res.ok || !data.token) {
        setError('Login Failed. Please Try Again')
        setLoading(false)
        return
      }

      localStorage.setItem('session_token', data.token)
      router.push(`/franchisee/dashboard/${data.location_slug}`)
    } catch (err) {
      console.error('Login error:', err)
      setError('Login Failed. Please Try Again')
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid #DDD',
    borderRadius: 4,
    fontSize: 15,
    marginBottom: 16,
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  }

  return (
    <>
      <SiteNav />

      <div style={{ background: '#F9F9F7', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 20px' }}>
        <form
          onSubmit={handleLogin}
          style={{ background: '#FFF', border: '1px solid #E5E5E5', borderRadius: 8, padding: 32, width: '100%', maxWidth: 400 }}
        >
          <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: '0.2em', color: '#C0392B', textTransform: 'uppercase', marginBottom: 12 }}>
            Franchisee Login
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 900, color: '#1A1A1A', margin: '0 0 24px 0' }}>Sign In</h1>

          <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: '#333' }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
            style={inputStyle}
          />

          <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: '#333' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
            style={inputStyle}
          />

          {error && <p style={{ color: '#C0392B', fontSize: 14, margin: '0 0 16px 0' }}>{error}</p>}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%', background: '#C0392B', color: '#FFF', border: 'none', borderRadius: 4,
              padding: '14px', fontWeight: 900, fontSize: 13, letterSpacing: '0.1em',
              textTransform: 'uppercase', cursor: loading ? 'wait' : 'pointer',
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>

      <SiteFooter />
    </>
  )
}