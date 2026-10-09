import { useState } from 'react'
import { useRouter } from 'next/router'

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
      // Lazy load Supabase only when needed
      const { supabase } = await import('@/lib/supabase')

      // Query Supabase for the account
      const { data, error: queryError } = await supabase
        .from('franchisee_accounts')
        .select('id, location_slug, password_hash, active')
        .eq('email', email)
        .single()

      console.log('Query result:', data, queryError)

      if (queryError || !data) {
        console.log('Account not found')
        setError('Login Failed. Please Try Again')
        setLoading(false)
        return
      }

      if (!data.active) {
        console.log('Account inactive')
        setError('Account is inactive')
        setLoading(false)
        return
      }

      // Compare passwords (basic - should be bcrypt in production)
      if (data.password_hash !== password) {
        console.log('Password mismatch')
        setError('Login Failed. Please Try Again')
        setLoading(false)
        return
      }

      // Create session
      const token = Math.random().toString(36).substring(2, 15)
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()

      const { error: insertError } = await supabase
        .from('session_tokens')
        .insert({
          account_id: data.id,
          token,
          expires_at: expiresAt,
        })

      console.log('Session insert result:', insertError)

      if (insertError) {
        setError('Failed to create session')
        setLoading(false)
        return
      }

      localStorage.setItem('session_token', token)
      router.push(`/franchisee/dashboard/${data.location_slug}`)
    } catch (err) {
      console.error('Login error:', err)
      setError('Login Failed. Please Try Again')
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#1A1A1A' }}>K9 Shop — Franchisee Login</h1>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
              placeholder="your@email.com"
            />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div style={{ background: '#fee', padding: '12px', borderRadius: '6px', marginBottom: '20px', color: '#c00', fontSize: '14px' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px',
              background: loading ? '#ccc' : '#C0392B',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '14px',
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: '#999' }}>
          Forgot your password? Contact support.
        </p>
      </div>
    </div>
  )
}