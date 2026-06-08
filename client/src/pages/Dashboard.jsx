// import { useJobs, useStats } from '../hooks/useJobs';
// import KanbanBoard from '../components/KanbanBoard';
// import { Link } from 'react-router-dom';

// const StatCard = ({ label, value, color }) => (
//   <div className="card text-center">
//     <p className={`text-3xl font-bold ${color}`}>{value}</p>
//     <p className="text-gray-400 text-sm mt-1">{label}</p>
//   </div>
// );

// export default function Dashboard() {
//   const { data: jobs = [], isLoading, error } = useJobs();
//   const { data: stats } = useStats();

//   if (isLoading) {
//     return (
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="animate-pulse space-y-4">
//           <div className="h-8 bg-gray-800 rounded w-1/3"></div>
//           <div className="grid grid-cols-5 gap-4">
//             {[...Array(5)].map((_, i) => (
//               <div key={i} className="h-24 bg-gray-800 rounded-xl"></div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="max-w-6xl mx-auto px-4 py-8 text-center">
//         <p className="text-red-400">Failed to load jobs. Please try again.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h1 className="text-2xl font-bold">Your Applications</h1>
//           <p className="text-gray-400 text-sm mt-1">
//             {jobs.length} total · drag cards to update status
//           </p>
//         </div>
//         <Link to="/add-job" className="btn-primary">
//           + Add Job
//         </Link>
//       </div>

//       {/* Stats Row */}
//       {stats && (
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
//           <StatCard label="Wishlist"  value={stats.wishlist}   color="text-gray-300" />
//           <StatCard label="Applied"   value={stats.applied}    color="text-blue-400" />
//           <StatCard label="Interview" value={stats.interview}  color="text-yellow-400" />
//           <StatCard label="Offers"    value={stats.offer}      color="text-green-400" />
//           <StatCard label="Rejected"  value={stats.rejected}   color="text-red-400" />
//           <StatCard label="Avg Score" value={`${stats.avgAiScore}%`} color="text-indigo-400" />
//         </div>
//       )}

//       {/* Kanban Board */}
//       {jobs.length === 0 ? (
//         <div className="text-center py-24">
//           <p className="text-6xl mb-4">🎯</p>
//           <h2 className="text-xl font-semibold text-gray-300 mb-2">No applications yet</h2>
//           <p className="text-gray-500 mb-6">Add your first job to get started</p>
//           <Link to="/add-job" className="btn-primary">Add Your First Job</Link>
//         </div>
//       ) : (
//         <KanbanBoard jobs={jobs} />
//       )}
//     </div>
//   );
// }




















import { useJobs, useStats } from '../hooks/useJobs';
import KanbanBoard from '../components/KanbanBoard';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const StatCard = ({ label, value, color, delay }) => (
  <div className={`glass glass-hover fade-up fade-up-${delay}`} style={{
    padding: '20px 24px', position: 'relative', overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 2,
      background: 'rgba(255,255,255,0.08)', opacity: 0.6,
    }} />
    <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: 28, fontWeight: 500, color, lineHeight: 1, marginBottom: 8,
    }}>{value}</p>
    <p style={{ fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
      {label}
    </p>
  </div>
);

export default function Dashboard() {
  const { data: jobs = [], isLoading } = useJobs();
  const { data: stats } = useStats();
  const { user } = useAuth();

  if (isLoading) return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 16, marginBottom: 32 }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="skeleton" style={{ height: 88 }} />
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 16 }}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="skeleton" style={{ height: 300 }} />
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px' }}>
      {/* Header */}
      <div className="fade-up" style={{ marginBottom: 36, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'DM Mono, monospace', marginBottom: 6 }}>
            Good day, {user?.name?.split(' ')[0]}
          </p>
          <h1 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 32, color: '#e8eaf0',
            letterSpacing: '-0.03em', lineHeight: 1.1,
          }}>
            Your Pipeline
          </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>
            {jobs.length} application{jobs.length !== 1 ? 's' : ''}
          </span>
          <Link to="/add-job" className="btn-primary">+ New Job</Link>
        </div>
      </div>

      {/* Stats */}
      {stats && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 12, marginBottom: 32,
        }}
          className="sm:grid-cols-3 lg:grid-cols-6"
        >
          <StatCard label="Wishlist"  value={stats.wishlist}          color="#8892a4" delay={1} />
          <StatCard label="Applied"   value={stats.applied}           color="#4f7cff" delay={2} />
          <StatCard label="Interview" value={stats.interview}         color="#f5a623" delay={3} />
          <StatCard label="Offers"    value={stats.offer}             color="#00d97e" delay={4} />
          <StatCard label="Rejected"  value={stats.rejected}          color="#ff4d6a" delay={5} />
          <StatCard label="Avg Score" value={`${stats.avgAiScore}%`}  color="#a78bfa" delay={5} />
        </div>
      )}

      {/* Board or Empty */}
      {jobs.length === 0 ? (
        <div className="fade-up" style={{
          textAlign: 'center', padding: '80px 24px',
          border: '1px dashed rgba(255,255,255,0.08)', borderRadius: 16,
        }}>
          <p style={{ fontSize: 40, marginBottom: 16 }}>🎯</p>
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 22, color: '#e8eaf0', marginBottom: 8,
          }}>No applications yet</h2>
          <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 28 }}>
            Add your first job and let AI do the heavy lifting
          </p>
          <Link to="/add-job" className="btn-primary">Add Your First Job</Link>
        </div>
      ) : (
        <div className="fade-up fade-up-3">
          <KanbanBoard jobs={jobs} />
        </div>
      )}
    </div>
  );
}