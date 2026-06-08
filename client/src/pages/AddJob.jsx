// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useQueryClient } from '@tanstack/react-query';
// import api from '../api/axios';

// export default function AddJob() {
//   const navigate = useNavigate();
//   const queryClient = useQueryClient();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [form, setForm] = useState({
//     company: '',
//     role: '',
//     jobUrl: '',
//     location: '',
//     salary: '',
//     status: 'wishlist',
//     jobDescription: '',
//     notes: ''
//   });

//   const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
//     try {
//       const { data } = await api.post('/jobs', form);
//       queryClient.invalidateQueries({ queryKey: ['jobs'] });
//       navigate(`/jobs/${data._id}`);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to create job');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto px-4 py-8">
//       <div className="flex items-center gap-3 mb-6">
//         <Link to="/" className="text-gray-400 hover:text-gray-200 transition-colors">← Back</Link>
//         <h1 className="text-xl font-bold">Add New Job</h1>
//       </div>

//       <form onSubmit={handleSubmit} className="card space-y-5">
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="label">Company *</label>
//             <input className="input" placeholder="Google" value={form.company} onChange={set('company')} required />
//           </div>
//           <div>
//             <label className="label">Role *</label>
//             <input className="input" placeholder="Frontend Engineer" value={form.role} onChange={set('role')} required />
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="label">Job URL</label>
//             <input className="input" placeholder="https://..." value={form.jobUrl} onChange={set('jobUrl')} />
//           </div>
//           <div>
//             <label className="label">Location</label>
//             <input className="input" placeholder="Remote / Bangalore" value={form.location} onChange={set('location')} />
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="label">Salary (optional)</label>
//             <input className="input" placeholder="₹12-18 LPA" value={form.salary} onChange={set('salary')} />
//           </div>
//           <div>
//             <label className="label">Status</label>
//             <select className="input" value={form.status} onChange={set('status')}>
//               <option value="wishlist">⭐ Wishlist</option>
//               <option value="applied">📤 Applied</option>
//               <option value="interview">🎯 Interview</option>
//               <option value="offer">🎉 Offer</option>
//               <option value="rejected">❌ Rejected</option>
//             </select>
//           </div>
//         </div>

//         <div>
//           <label className="label">
//             Job Description
//             <span className="text-gray-600 font-normal ml-2">(paste the full JD — used for AI analysis)</span>
//           </label>
//           <textarea
//             className="input resize-none"
//             rows={8}
//             placeholder="Paste the full job description here..."
//             value={form.jobDescription}
//             onChange={set('jobDescription')}
//           />
//         </div>

//         <div>
//           <label className="label">Notes</label>
//           <textarea className="input resize-none" rows={3} placeholder="Interview tips, referral contact, etc." value={form.notes} onChange={set('notes')} />
//         </div>

//         {error && <p className="text-red-400 text-sm">{error}</p>}

//         <div className="flex gap-3">
//           <button type="submit" className="btn-primary flex-1" disabled={loading}>
//             {loading ? 'Saving...' : 'Save Job'}
//           </button>
//           <Link to="/" className="btn-secondary text-center flex-1">Cancel</Link>
//         </div>
//       </form>
//     </div>
//   );
// }












































import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import api from '../api/axios';

const STATUS_OPTIONS = [
  { value: 'wishlist',  label: 'Wishlist' },
  { value: 'applied',   label: 'Applied' },
  { value: 'interview', label: 'Interview' },
  { value: 'offer',     label: 'Offer' },
  { value: 'rejected',  label: 'Rejected' },
];

export default function AddJob() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    company: '', role: '', jobUrl: '', location: '',
    salary: '', status: 'wishlist', jobDescription: '', notes: ''
  });

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault(); setError(''); setLoading(true);
    try {
      const { data } = await api.post('/jobs', form);
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
      navigate(`/jobs/${data._id}`);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save job');
    } finally { setLoading(false); }
  };

  const fieldRow = (children) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>{children}</div>
  );

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '40px 24px' }}>
      {/* Header */}
      <div className="fade-up" style={{ marginBottom: 32 }}>
        {/* <Link to="/" style={{
          fontSize: 13, color: 'var(--muted)', textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 16,
        }}>
          ← Back to Dashboard
        </Link> */}

        <Link
  to="/"
  className="back-link"
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
  ← Back to Dashboard
</Link>





        <h1 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 28, color: '#e8eaf0', letterSpacing: '-0.03em',
        }}>Add New Job</h1>
        <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 6 }}>
          Fill in the details — paste the full job description to unlock AI analysis
        </p>
      </div>

      <form onSubmit={handleSubmit} className="fade-up fade-up-1">
        <div className="glass" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>

          {fieldRow(
            <>
              <div>
                <label className="label">Company *</label>
                <input className="input" placeholder="Google" value={form.company} onChange={set('company')} required />
              </div>
              <div>
                <label className="label">Role *</label>
                <input className="input" placeholder="Frontend Engineer" value={form.role} onChange={set('role')} required />
              </div>
            </>
          )}

          {fieldRow(
            <>
              <div>
                <label className="label">Job URL</label>
                <input className="input" placeholder="https://..." value={form.jobUrl} onChange={set('jobUrl')} />
              </div>
              <div>
                <label className="label">Location</label>
                <input className="input" placeholder="Remote / Bangalore" value={form.location} onChange={set('location')} />
              </div>
            </>
          )}

          {fieldRow(
            <>
              <div>
                <label className="label">Salary</label>
                <input className="input" placeholder="₹12–18 LPA" value={form.salary} onChange={set('salary')} />
              </div>
              <div>
                <label className="label">Status</label>
                <select className="input" value={form.status} onChange={set('status')}
                  style={{ appearance: 'none', cursor: 'pointer' }}>
                  {STATUS_OPTIONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                </select>
              </div>
            </>
          )}

          <div>
            <label className="label">
              Job Description
              <span style={{ color: 'var(--accent)', marginLeft: 8, textTransform: 'none', letterSpacing: 0, fontSize: 11 }}>
                ← paste full JD for AI scoring
              </span>
            </label>
            <textarea
              className="input"
              rows={9}
              placeholder="Paste the complete job description here. The more detail, the better the AI match score."
              value={form.jobDescription}
              onChange={set('jobDescription')}
              style={{ resize: 'vertical', lineHeight: 1.7 }}
            />
          </div>

          <div>
            <label className="label">Notes</label>
            <textarea className="input" rows={3}
              placeholder="Referral contact, prep notes, interview date..."
              value={form.notes} onChange={set('notes')} style={{ resize: 'none' }} />
          </div>

          {error && (
            <div style={{
              background: 'rgba(255,77,106,0.08)', border: '1px solid rgba(255,77,106,0.2)',
              borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#ff4d6a',
            }}>{error}</div>
          )}

          <div style={{ display: 'flex', gap: 12, paddingTop: 4 }}>
            <button type="submit" className="btn-primary" disabled={loading}
              style={{ flex: 1, padding: 12 }}>
              {loading ? 'Saving...' : 'Save & Analyze →'}
            </button>
            <Link to="/" className="btn-ghost" style={{ flex: 1, textAlign: 'center', textDecoration: 'none', padding: 12 }}>
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}