// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// export default function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <nav className="border-b border-gray-800 bg-gray-950 sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
//         <Link to="/" className="text-indigo-400 font-bold text-lg tracking-tight">
//           JobTracker <span className="text-xs text-indigo-600 font-normal">AI</span>
//         </Link>
//         <div className="flex items-center gap-4">
//           <span className="text-gray-400 text-sm hidden sm:block">
//             Hi, {user?.name?.split(' ')[0]} 👋
//           </span>
//           <Link to="/add-job" className="btn-primary text-sm py-1.5 px-3">
//             + Add Job
//           </Link>
//           <button
//             onClick={handleLogout}
//             className="text-gray-400 hover:text-gray-200 text-sm transition-colors"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }



















import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';

import { Bell, Search, Plus } from 'lucide-react';
import { motion } from 'framer-motion';


export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => { logout(); navigate('/login'); };

  return (
    
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(8,11,16,0.85)',
      backdropFilter: 'blur(16px)',
    }}>
      <nav style={{
        maxWidth: 1100, margin: '0 auto',
        padding: '0 24px',
        height: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: 'linear-gradient(135deg, #4f7cff, #7c3aed)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 700, color: '#fff',
            boxShadow: '0 0 16px rgba(79,124,255,0.3)',
          }}>J</div> */}
          <img
            src={logo}
            alt="JobTrack AI"
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              objectFit: 'cover',
              // boxShadow: '0 0 20px rgba(79,124,255,0.35)'
            }}
          />
          <span style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 18, color: '#e8eaf0', letterSpacing: '-0.02em',
          }}>
            JobTrack <span style={{ color: '#4f7cff', fontStyle: 'italic' }}>AI</span>
          </span>
        </Link>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span 
          style={{
            fontSize: 13, color: 'var(--muted)',
            fontFamily: 'DM Mono, monospace',
          }}
          >
            {user?.name?.split(' ')[0]}
          </span>

          <Link
            to="/add-job"
            className="btn-primary"
            style={{ background:  '#011F5B',fontSize: 13, padding: '7px 16px' }}
          >
            <span style={{fontSize: 16, lineHeight: 1 }}>+</span> New Job
          </Link>

          <button onClick={handleLogout} className="btn-ghost" style={{ color: '#F87171',fontSize: 13, padding: '7px 14px' }}>
            Sign out
          </button>
        </div>
      </nav>
    </header>
  );
}