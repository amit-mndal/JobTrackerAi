// import { useState } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import api from '../api/axios';
// import AIPanel from '../components/AIPanel';
// import { useDeleteJob } from '../hooks/useJobs';

// const STATUS_OPTIONS = ['wishlist', 'applied', 'interview', 'offer', 'rejected'];
// const STATUS_LABELS = { wishlist: '⭐ Wishlist', applied: '📤 Applied', interview: '🎯 Interview', offer: '🎉 Offer', rejected: '❌ Rejected' };

// export default function JobDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const queryClient = useQueryClient();
//   const deleteJob = useDeleteJob();
//   const [saving, setSaving] = useState(false);

//   const { data: job, isLoading, error, refetch } = useQuery({
//     queryKey: ['job', id],
//     queryFn: async () => {
//       const { data } = await api.get(`/jobs/${id}`);
//       return data;
//     }
//   });

//   const [form, setForm] = useState(null);

//   // Initialize form when job loads
//   if (job && !form) {
//     setForm({
//       status: job.status,
//       notes: job.notes || '',
//       jobDescription: job.jobDescription || '',
//       salary: job.salary || '',
//       location: job.location || '',
//     });
//   }

//   const handleSave = async () => {
//     setSaving(true);
//     try {
//       await api.put(`/jobs/${id}`, form);
//       queryClient.invalidateQueries({ queryKey: ['jobs'] });
//       refetch();
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!window.confirm('Delete this job application?')) return;
//     await deleteJob.mutateAsync(id);
//     navigate('/');
//   };

//   // Called by AIPanel when AI results come back
//   const handleAIUpdate = (updates) => {
//     queryClient.setQueryData(['job', id], old => ({ ...old, ...updates }));
//     queryClient.invalidateQueries({ queryKey: ['jobs'] });
//   };

//   if (isLoading) return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <div className="animate-pulse space-y-4">
//         <div className="h-8 bg-gray-800 rounded w-1/2"></div>
//         <div className="grid grid-cols-3 gap-4">
//           {[...Array(3)].map((_, i) => <div key={i} className="h-64 bg-gray-800 rounded-xl"></div>)}
//         </div>
//       </div>
//     </div>
//   );

//   if (error || !job) return (
//     <div className="max-w-4xl mx-auto px-4 py-8 text-center">
//       <p className="text-red-400">Job not found.</p>
//       <Link to="/" className="text-indigo-400 hover:underline mt-2 block">← Back to Dashboard</Link>
//     </div>
//   );

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-8">
//       {/* Header */}
//       <div className="flex items-start justify-between mb-6 gap-4">
//         <div>
//           <Link to="/" className="text-gray-400 hover:text-gray-200 text-sm">← Dashboard</Link>
//           <h1 className="text-2xl font-bold mt-1">{job.role}</h1>
//           <p className="text-gray-400">{job.company} {job.location && `· ${job.location}`}</p>
//         </div>
//         <div className="flex items-center gap-2 flex-shrink-0">
//           {job.jobUrl && (
//             <a href={job.jobUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-1.5 px-3">
//               View JD ↗
//             </a>
//           )}
//           <button onClick={handleDelete} className="text-red-400 hover:text-red-300 text-sm py-1.5 px-3 border border-red-900 rounded-lg transition-colors">
//             Delete
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
//         {/* Left: Job Details */}
//         <div className="lg:col-span-2 space-y-4">
//           <div className="card space-y-4">
//             <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Details</h2>

//             <div>
//               <label className="label">Status</label>
//               <select
//                 className="input"
//                 value={form?.status}
//                 onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
//               >
//                 {STATUS_OPTIONS.map(s => (
//                   <option key={s} value={s}>{STATUS_LABELS[s]}</option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="label">Salary</label>
//               <input
//                 className="input"
//                 placeholder="₹12-18 LPA"
//                 value={form?.salary}
//                 onChange={e => setForm(f => ({ ...f, salary: e.target.value }))}
//               />
//             </div>

//             <div>
//               <label className="label">Notes</label>
//               <textarea
//                 className="input resize-none"
//                 rows={4}
//                 placeholder="Interview notes, contacts, prep tips..."
//                 value={form?.notes}
//                 onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
//               />
//             </div>

//             <button onClick={handleSave} className="btn-primary w-full" disabled={saving}>
//               {saving ? 'Saving...' : 'Save Changes'}
//             </button>
//           </div>

//           {/* Job Description */}
//           <div className="card">
//             <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Job Description</h2>
//             <textarea
//               className="input resize-none text-xs"
//               rows={10}
//               placeholder="Paste the full job description here..."
//               value={form?.jobDescription}
//               onChange={e => setForm(f => ({ ...f, jobDescription: e.target.value }))}
//             />
//             <button onClick={handleSave} className="btn-secondary w-full mt-3 text-sm" disabled={saving}>
//               {saving ? 'Saving...' : 'Save Description'}
//             </button>
//           </div>
//         </div>

//         {/* Right: AI Panel */}
//         <div className="lg:col-span-3">
//           <AIPanel job={job} onUpdate={handleAIUpdate} />
//         </div>
//       </div>
//     </div>
//   );
// }





























































import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import api from '../api/axios';
import AIPanel from '../components/AIPanel';
import { useDeleteJob } from '../hooks/useJobs';

const STATUS_OPTIONS = [
  { value: 'wishlist',  label: 'Wishlist' },
  { value: 'applied',   label: 'Applied' },
  { value: 'interview', label: 'Interview' },
  { value: 'offer',     label: 'Offer' },
  { value: 'rejected',  label: 'Rejected' },
];

// const STATUS_COLORS = {
//   wishlist: '#8892a4', applied: '#4f7cff',
//   interview: '#f5a623', offer: '#00d97e', rejected: '#ff4d6a',
// };

const STATUS_COLORS = {
  wishlist: '#94A3B8',   // slate
  applied: '#F8FAFC',    // white
  interview: '#CBD5E1',  // light gray
  offer: '#D1FAE5',      // soft mint
  rejected: '#F1F5F9',   // light gray
};

export default function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const deleteJob = useDeleteJob();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState(null);

  const { data: job, isLoading, error, refetch } = useQuery({
    queryKey: ['job', id],
    queryFn: async () => { const { data } = await api.get(`/jobs/${id}`); return data; }
  });

  if (job && !form) {
    setForm({
      status: job.status, notes: job.notes || '',
      jobDescription: job.jobDescription || '',
      salary: job.salary || '', location: job.location || '',
    });
  }

  const handleSave = async () => {
    setSaving(true);
    try {
      await api.put(`/jobs/${id}`, form);
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
      refetch();
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) { console.error(err); }
    finally { setSaving(false); }
  };

  const handleDelete = async () => {
    if (!window.confirm('Delete this application?')) return;
    await deleteJob.mutateAsync(id);
    navigate('/');
  };

  const handleAIUpdate = (updates) => {
    queryClient.setQueryData(['job', id], old => ({ ...old, ...updates }));
    queryClient.invalidateQueries({ queryKey: ['jobs'] });
  };

  if (isLoading) return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 24 }}>
        <div className="skeleton" style={{ height: 500 }} />
        <div className="skeleton" style={{ height: 500 }} />
      </div>
    </div>
  );

  if (error || !job) return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px', textAlign: 'center' }}>
      <p style={{ color: '#ff4d6a' }}>Job not found.</p>
      <Link to="/" style={{ color: 'var(--accent)', fontSize: 14 }}>← Back</Link>
    </div>
  );

  const statusColor = STATUS_COLORS[job.status] || '#8892a4';

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px' }}>
      {/* Header */}
      <div className="fade-up" style={{ marginBottom: 32 }}>
        {/* <Link to="/" style={{
          fontSize: 13, color: 'var(--muted)', textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 16,
        }}>← Dashboard</Link> */}

        <Link
          to="/"
          className="dashboard-link"
          style={{
            fontSize: 13,
            color: 'var(--muted)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            marginBottom: 16,
          }}
        >
          ← Dashboard
        </Link>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {/* Company avatar */}
            <div style={{
              width: 52, height: 52, borderRadius: 12, flexShrink: 0,
              background: `linear-gradient(135deg, ${statusColor}22, ${statusColor}11)`,
              border: `1px solid ${statusColor}33`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'DM Serif Display, serif', fontSize: 22, color: statusColor,
            }}>{job.company[0]}</div>
            <div>
              <h1 style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 26, color: '#e8eaf0', letterSpacing: '-0.03em',
              }}>{job.role}</h1>
              <p style={{ fontSize: 14, color: 'var(--subtle)', marginTop: 2 }}>
                {job.company}
                {job.location && <span style={{ color: 'var(--muted)' }}> · {job.location}</span>}
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
            {job.jobUrl && (
              <a href={job.jobUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost"
                style={{ fontSize: 13 }}>View JD ↗</a>
            )}
            <button onClick={handleDelete} style={{
              background: 'rgba(255,77,106,0.06)',
              border: '1px solid rgba(255,77,106,0.2)',
              color: '#F87171', fontSize: 13, padding: '7px 14px',
              borderRadius: 8, cursor: 'pointer',
            }}>Delete</button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 20 }}>
        {/* Left panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Details card */}
          <div className="glass fade-up fade-up-1" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <p style={{ fontSize: 11, color: 'var(--subtle)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
              Application Details
            </p>

            <div>
              <label className="label">Status</label>
              <select className="input" value={form?.status}
                onChange={e => setForm(f => ({ ...f, status: e.target.value }))}

                style={{  color: statusColor, cursor: 'pointer' }}
                >
                {STATUS_OPTIONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>

            <div>
              <label className="label">Salary</label>
              <input className="input" placeholder="₹12–18 LPA"
                value={form?.salary} onChange={e => setForm(f => ({ ...f, salary: e.target.value }))} />
            </div>

            <div>
              <label className="label">Notes</label>
              <textarea className="input" rows={5} style={{ resize: 'none', fontSize: 13 }}
                placeholder="Interview prep, contacts, reminders..."
                value={form?.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} />
            </div>

            <button onClick={handleSave} className="btn-primary" disabled={saving}
              style={{ width: '100%', padding: 10 }}>
              {saved ? '✓ Saved' : saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>

          {/* JD card */}
          <div className="glass fade-up fade-up-2" style={{ padding: 24 }}>
            <p style={{ fontSize: 11, color: 'var(--subtle)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12 }}>
              Job Description
            </p>
            <textarea className="input" rows={10} style={{ resize: 'none', fontSize: 12, lineHeight: 1.7 }}
              placeholder="Paste the full job description..."
              value={form?.jobDescription} onChange={e => setForm(f => ({ ...f, jobDescription: e.target.value }))} />
            <button onClick={handleSave} className="btn-ghost" disabled={saving}
              style={{ width: '100%', marginTop: 12, padding: 9, fontSize: 13 }}>
              {saving ? 'Saving...' : 'Save Description'}
            </button>
          </div>
        </div>

        {/* Right panel — AI */}
        <div className="fade-up fade-up-2">
          <AIPanel job={job} onUpdate={handleAIUpdate} />
        </div>
      </div>
    </div>
  );
}