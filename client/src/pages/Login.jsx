// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// export default function Login() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
//     try {
//       await login(form.email, form.password);
//       navigate('/');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <div className="card w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center mb-2">Welcome back</h1>
//         <p className="text-gray-400 text-center text-sm mb-8">
//           Sign in to your job tracker
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="label">Email</label>
//             <input
//               className="input"
//               type="email"
//               placeholder="you@email.com"
//               value={form.email}
//               onChange={e => setForm({ ...form, email: e.target.value })}
//               required
//             />
//           </div>
//           <div>
//             <label className="label">Password</label>
//             <input
//               className="input"
//               type="password"
//               placeholder="••••••••"
//               value={form.password}
//               onChange={e => setForm({ ...form, password: e.target.value })}
//               required
//             />
//           </div>
//           {error && <p className="text-red-400 text-sm">{error}</p>}
//           <button type="submit" className="btn-primary w-full" disabled={loading}>
//             {loading ? 'Signing in...' : 'Sign In'}
//           </button>
//         </form>
//         <p className="text-center text-gray-400 text-sm mt-6">
//           Don't have an account?{' '}
//           <Link to="/register" className="text-indigo-400 hover:underline">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }





























import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';

import { insights } from '../data/insights';
const randomInsight =
insights[Math.floor(Math.random() * insights.length)];


export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); setLoading(true);
    try {
      await login(form.email, form.password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally { setLoading(false); }
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      padding: 24, position: 'relative',
    }}>
      {/* Background radial */}
      <div style={{
        position: 'fixed', bottom: 0, right: 0,
        width: 500, height: 500,
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      

      




      <div className="fade-up" style={{ width: '100%', maxWidth: 400 }}>



        

        






        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          {/* <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: 'linear-gradient(135deg, #4f7cff, #7c3aed)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, fontWeight: 700, color: '#fff',
            margin: '0 auto 20px',
            boxShadow: '0 0 32px rgba(79,124,255,0.25)',
          }}>J</div> */}
          <img
            src={logo}
            alt="JobTrack AI"
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              objectFit: 'cover',
              margin: '0 auto 20px',
              display: 'block',
            }}
          />
          <h1 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 28, color: '#e8eaf0',
            letterSpacing: '-0.03em', marginBottom: 8,
          }}>Welcome Back</h1>
          <p style={{ fontSize: 14, color: 'var(--muted)' }}>
            Sign in to your account
          </p>
        </div>

        {/* Card */}
        <div className="glass" style={{ padding: 32 }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <label className="label">Email address</label>
              <input
                className="input"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>

            {error && (
              <div style={{
                background: 'rgba(255,77,106,0.08)',
                border: '1px solid rgba(255,77,106,0.2)',
                borderRadius: 8, padding: '10px 14px',
                fontSize: 13, color: '#ff4d6a',
              }}>
                {error}
              </div>
            )}

            <button type="submit" className="btn-primary" disabled={loading}
              style={{ background:'#5B21B6',width: '100%', padding: '11px', marginTop: 4 }}>
              {loading ? 'Signing in...' : 'Sign In →'}
            </button>
          </form>
        </div>

        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 14, color: 'var(--muted)' }}>
          No account?{' '}
          <Link to="/register" style={{ color: '#4f7cff', textDecoration: 'none', fontWeight: 500 }}>
            Create one
          </Link>
        </p>


        <div
          className="insight-banner"
          style={{
            width: '100vw',
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            marginBottom: 48,
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#64748B',
              marginTop: 30,
              fontWeight: 600,
            }}
          >
            {randomInsight.type}
          </div>

          <div
              style={{
                maxWidth: 700,
                margin: '0 auto',
              }}
            >
              <div
                style={{
                  fontSize: 15,
                  color: '#CBD5E1',
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                {randomInsight.text}
              </div>

              {randomInsight.author && (
                <div
                  style={{
                    marginTop: 8,
                    textAlign: 'right',
                    fontSize: 12,
                    color: '#64748B',
                    fontStyle: 'italic',
                    letterSpacing: '0.02em',
                  }}
                >
                  — {randomInsight.author}
                </div>
              )}
            </div>
        </div>








      </div>
    </div>
  );
}