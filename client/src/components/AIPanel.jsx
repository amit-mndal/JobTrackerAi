// import { useState, useRef } from 'react';
// import api from '../api/axios';

// const ScoreRing = ({ score }) => {
//   const color = score >= 70 ? '#22c55e' : score >= 40 ? '#eab308' : '#ef4444';
//   return (
//     <div className="flex flex-col items-center">
//       <div
//         className="w-24 h-24 rounded-full flex items-center justify-center border-4"
//         style={{ borderColor: color }}
//       >
//         <span className="text-2xl font-bold" style={{ color }}>{score}%</span>
//       </div>
//       <p className="text-xs text-gray-400 mt-2">AI Match Score</p>
//     </div>
//   );
// };

// export default function AIPanel({ job, onUpdate }) {
//   const [resumeText, setResumeText] = useState(job.resumeText || '');
//   const [bullets, setBullets] = useState('');
//   const [loading, setLoading] = useState('');
//   const [error, setError] = useState('');
//   const [activeTab, setActiveTab] = useState('analyze');
//   const fileRef = useRef(null);

//   const handleAnalyze = async () => {
//     if (!resumeText.trim() && !fileRef.current?.files[0]) {
//       return setError('Please paste your resume text or upload a PDF');
//     }
//     setLoading('analyze');
//     setError('');
//     try {
//       const formData = new FormData();
//       formData.append('jobId', job._id);
//       if (fileRef.current?.files[0]) {
//         formData.append('resume', fileRef.current.files[0]);
//       } else {
//         formData.append('resumeText', resumeText);
//       }
//       const { data } = await api.post('/ai/analyze', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       onUpdate(data);
//       setResumeText(data.resumeText || resumeText);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Analysis failed');
//     } finally {
//       setLoading('');
//     }
//   };

//   const handleRewrite = async () => {
//     if (!bullets.trim()) return setError('Please paste your resume bullets');
//     setLoading('rewrite');
//     setError('');
//     try {
//       const { data } = await api.post('/ai/rewrite', { jobId: job._id, bullets });
//       onUpdate({ rewrittenBullets: data.rewrittenBullets });
//     } catch (err) {
//       setError(err.response?.data?.message || 'Rewrite failed');
//     } finally {
//       setLoading('');
//     }
//   };

//   const handleCoverLetter = async () => {
//     setLoading('cover');
//     setError('');
//     try {
//       const { data } = await api.post('/ai/cover-letter', { jobId: job._id });
//       onUpdate({ coverLetter: data.coverLetter });
//     } catch (err) {
//       setError(err.response?.data?.message || 'Generation failed');
//     } finally {
//       setLoading('');
//     }
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//   };

//   const tabs = ['analyze', 'rewrite', 'cover'];
//   const tabLabels = { analyze: '🎯 Score', rewrite: '✏️ Rewrite', cover: '📝 Cover Letter' };

//   return (
//     <div className="card">
//       <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
//         🤖 AI Assistant
//         <span className="text-xs text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded-full">Powered by Gemini</span>
//       </h2>

//       {/* Tabs */}
//       <div className="flex gap-1 bg-gray-800 p-1 rounded-lg mb-4">
//         {tabs.map(tab => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`flex-1 text-xs py-1.5 rounded-md transition-colors font-medium ${
//               activeTab === tab ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-gray-200'
//             }`}
//           >
//             {tabLabels[tab]}
//           </button>
//         ))}
//       </div>

//       {/* Analyze Tab */}
//       {activeTab === 'analyze' && (
//         <div className="space-y-4">
//           <div>
//             <label className="label">Upload Resume PDF</label>
//             <input
//               ref={fileRef}
//               type="file"
//               accept=".pdf"
//               className="block w-full text-sm text-gray-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-sm file:bg-gray-700 file:text-gray-200 hover:file:bg-gray-600 cursor-pointer"
//             />
//           </div>
//           <div>
//             <label className="label">Or paste resume text</label>
//             <textarea
//               className="input resize-none text-xs"
//               rows={5}
//               placeholder="Paste your full resume text here..."
//               value={resumeText}
//               onChange={e => setResumeText(e.target.value)}
//             />
//           </div>
//           <button
//             onClick={handleAnalyze}
//             className="btn-primary w-full"
//             disabled={loading === 'analyze' || !job.jobDescription}
//           >
//             {loading === 'analyze' ? '🤖 Analyzing...' : '🎯 Analyze Match'}
//           </button>
//           {!job.jobDescription && (
//             <p className="text-yellow-500 text-xs">⚠️ Add a job description first to use AI analysis</p>
//           )}

//           {/* Results */}
//           {job.aiScore !== null && job.aiScore !== undefined && (
//             <div className="border-t border-gray-700 pt-4 space-y-4">
//               <div className="flex items-start gap-6">
//                 <ScoreRing score={job.aiScore} />
//                 <div className="flex-1">
//                   <p className="text-sm text-gray-300 leading-relaxed">{job.aiVerdict}</p>
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <p className="text-xs font-semibold text-green-400 mb-2">✅ Matched Skills</p>
//                   <div className="flex flex-wrap gap-1.5">
//                     {job.matchedSkills?.map(skill => (
//                       <span key={skill} className="text-xs bg-green-950 text-green-300 border border-green-800 px-2 py-0.5 rounded">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-xs font-semibold text-red-400 mb-2">❌ Missing Skills</p>
//                   <div className="flex flex-wrap gap-1.5">
//                     {job.missingSkills?.map(skill => (
//                       <span key={skill} className="text-xs bg-red-950 text-red-300 border border-red-800 px-2 py-0.5 rounded">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Rewrite Tab */}
//       {activeTab === 'rewrite' && (
//         <div className="space-y-4">
//           <div>
//             <label className="label">Your current resume bullets</label>
//             <textarea
//               className="input resize-none text-xs"
//               rows={6}
//               placeholder="• Developed REST APIs using Node.js&#10;• Built React components for dashboard&#10;• Optimized database queries"
//               value={bullets}
//               onChange={e => setBullets(e.target.value)}
//             />
//           </div>
//           <button
//             onClick={handleRewrite}
//             className="btn-primary w-full"
//             disabled={loading === 'rewrite' || !job.jobDescription}
//           >
//             {loading === 'rewrite' ? '✏️ Rewriting...' : '✏️ Rewrite for This Role'}
//           </button>

//           {job.rewrittenBullets && (
//             <div className="border-t border-gray-700 pt-4">
//               <div className="flex items-center justify-between mb-2">
//                 <p className="text-sm font-semibold text-green-400">✅ AI-Rewritten Bullets</p>
//                 <button onClick={() => copyToClipboard(job.rewrittenBullets)} className="text-xs text-gray-400 hover:text-gray-200">
//                   📋 Copy
//                 </button>
//               </div>
//               <div className="bg-gray-800 rounded-lg p-3">
//                 <pre className="text-xs text-gray-300 whitespace-pre-wrap font-sans leading-relaxed">
//                   {job.rewrittenBullets}
//                 </pre>
//               </div>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Cover Letter Tab */}
//       {activeTab === 'cover' && (
//         <div className="space-y-4">
//           <p className="text-sm text-gray-400">
//             Generate a personalized cover letter based on your resume and the job description.
//             {!job.resumeText && ' Analyze your resume first.'}
//           </p>
//           <button
//             onClick={handleCoverLetter}
//             className="btn-primary w-full"
//             disabled={loading === 'cover' || !job.resumeText || !job.jobDescription}
//           >
//             {loading === 'cover' ? '📝 Generating...' : '📝 Generate Cover Letter'}
//           </button>

//           {job.coverLetter && (
//             <div className="border-t border-gray-700 pt-4">
//               <div className="flex items-center justify-between mb-2">
//                 <p className="text-sm font-semibold text-indigo-400">📝 Generated Cover Letter</p>
//                 <button onClick={() => copyToClipboard(job.coverLetter)} className="text-xs text-gray-400 hover:text-gray-200">
//                   📋 Copy
//                 </button>
//               </div>
//               <div className="bg-gray-800 rounded-lg p-4 max-h-80 overflow-y-auto">
//                 <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
//                   {job.coverLetter}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       )}

//       {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
//     </div>
//   );
// }




















































import { useState, useRef } from 'react';
import api from '../api/axios';

const ScoreGauge = ({ score }) => {
  const color = score >= 70 ? '#00d97e' : score >= 40 ? '#f5a623' : '#ff4d6a';
  const label = score >= 70 ? 'Strong Match' : score >= 40 ? 'Moderate Match' : 'Weak Match';
  const pct = score / 100;
  const r = 36, cx = 44, cy = 44;
  const circ = 2 * Math.PI * r;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <svg width={88} height={88}>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={6} />
          <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={6}
            strokeDasharray={circ}
            strokeDashoffset={circ * (1 - pct)}
            strokeLinecap="round"
            transform={`rotate(-90 ${cx} ${cy})`}
            style={{ transition: 'stroke-dashoffset 1s ease' }}
          />
        </svg>
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 18, fontWeight: 700, color, lineHeight: 1 }}>
            {score}
          </span>
          <span style={{ fontSize: 9, color: 'var(--muted)', marginTop: 2 }}>/ 100</span>
        </div>
      </div>
      <div>
        <p style={{ fontSize: 15, fontWeight: 600, color, marginBottom: 4 }}>{label}</p>
        <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>
          AI match score based on your resume and the job description
        </p>
      </div>
    </div>
  );
};

const SkillPill = ({ skill, type }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 4,
    fontSize: 11, fontFamily: 'Inter, sans-serif',
    padding: '3px 9px', borderRadius: 99,
    background: type === 'match' ? 'rgba(148,163,184,0.08)' : 'rgba(203,213,225,0.08)',
    border: `1px solid ${type === 'match' ? 'rgba(148,163,184,0.2)' : 'rgba(148,163,184,0.2)'}`,
    color: type === 'match' ? '#1DB954' : '#ff4d6a',
  }}>
    {type === 'match'} {skill}
  </span>
);

const TABS = [
  { id: 'analyze', label: ' Score' },
  { id: 'rewrite', label: ' Rewrite' },
  { id: 'cover',   label: ' Cover Letter' },
];

export default function AIPanel({ job, onUpdate }) {
  const [resumeText, setResumeText] = useState(job.resumeText || '');
  const [bullets, setBullets] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const [tab, setTab] = useState('analyze');
  const [copied, setCopied] = useState('');
  const fileRef = useRef(null);

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(''), 2000);
  };

  const handleAnalyze = async () => {
    if (!resumeText.trim() && !fileRef.current?.files[0]) return setError('Paste your resume or upload a PDF');
    setLoading('analyze'); setError('');
    try {
      const fd = new FormData();
      fd.append('jobId', job._id);
      if (fileRef.current?.files[0]) fd.append('resume', fileRef.current.files[0]);
      else fd.append('resumeText', resumeText);
      const { data } = await api.post('/ai/analyze', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      onUpdate(data);
      if (data.resumeText) setResumeText(data.resumeText);
    } catch (err) { setError(err.response?.data?.message || 'Analysis failed'); }
    finally { setLoading(''); }
  };

  const handleRewrite = async () => {
    if (!bullets.trim()) return setError('Paste your resume bullets');
    setLoading('rewrite'); setError('');
    try {
      const { data } = await api.post('/ai/rewrite', { jobId: job._id, bullets });
      onUpdate({ rewrittenBullets: data.rewrittenBullets });
    } catch (err) { setError(err.response?.data?.message || 'Rewrite failed'); }
    finally { setLoading(''); }
  };

  const handleCover = async () => {
    setLoading('cover'); setError('');
    try {
      const { data } = await api.post('/ai/cover-letter', { jobId: job._id });
      onUpdate({ coverLetter: data.coverLetter });
    } catch (err) { setError(err.response?.data?.message || 'Generation failed'); }
    finally { setLoading(''); }
  };

  const section = (title, content) => (
    <div style={{
      background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 8, padding: 16, marginTop: 16,
    }}>
      <p style={{ fontSize: 11, color: 'var(--subtle)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
        {title}
      </p>
      {content}
    </div>
  );

  return (
    <div className="glass" style={{ padding: 24 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 18, color: '#e8eaf0' }}>
            AI Assistant
          </h2>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>Powered by Gemini ✦︎</p>
        </div>
        {/* <div style={{
          fontSize: 11, color: 'var(--accent)',
          background: 'rgba(79,124,255,0.08)',
          border: '1px solid rgba(79,124,255,0.2)',
          padding: '4px 10px', borderRadius: 99,
          fontFamily: 'DM Mono, monospace',
        }}>Freei</div> */}
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex', gap: 4,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 8, padding: 4, marginBottom: 20,
      }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex: 1, padding: '7px 4px', borderRadius: 6,
            border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 500,
            fontFamily: 'Outfit, sans-serif',
            background: tab === t.id ? 'var(--accent)' : 'transparent',
            color: tab === t.id ? '#fff' : 'var(--muted)',
            transition: 'all 0.15s',
          }}>{t.label}</button>
        ))}
      </div>

      {/* ── Analyze Tab ── */}
      {tab === 'analyze' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label className="label">Upload Resume PDF</label>
            <input ref={fileRef} type="file" accept=".pdf" style={{
              display: 'block', width: '100%', fontSize: 12,
              color: 'var(--muted)', cursor: 'pointer',
            }} />
          </div>
          <div>
            <label className="label">Or paste resume text</label>
            <textarea className="input" rows={5} style={{ resize: 'none', fontSize: 12 }}
              placeholder="Paste your full resume text..."
              value={resumeText} onChange={e => setResumeText(e.target.value)} />
          </div>

          {!job.jobDescription && (
            <div style={{
              background: 'rgba(148,163,184,0.06)', border: '1px solid rgba(245,166,35,0.2)',
              borderRadius: 8, padding: '10px 14px', fontSize: 12, color: '#f5a623',
            }}>
              ⚠️ Add a job description first to enable AI analysis
            </div>
          )}

          <button onClick={handleAnalyze} className="btn-primary" disabled={loading === 'analyze' || !job.jobDescription}
            style={{ background: '#011F5B',width: '100%', padding: 11 }}>
            {loading === 'analyze' ? 'Analyzing...' : 'Analyze Match Score'}
          </button>

          {/* Score Results */}
          {job.aiScore != null && section('Match Analysis', (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <ScoreGauge score={job.aiScore} />
              <p style={{ fontSize: 13, color: 'var(--subtle)', lineHeight: 1.7, padding: '0 4px' }}>
                {job.aiVerdict}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <p style={{ fontSize: 11, color: '#CBD5E1', marginBottom: 8, fontWeight: 600 }}>Matched</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                    {job.matchedSkills?.map(s => <SkillPill key={s} skill={s} type="match" />)}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: 11, color: '#CBD5E1', marginBottom: 8, fontWeight: 600 }}>Missing</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                    {job.missingSkills?.map(s => <SkillPill key={s} skill={s} type="miss" />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Rewrite Tab ── */}
      {tab === 'rewrite' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label className="label">Your current resume bullets</label>
            <textarea className="input" rows={6} style={{ resize: 'none', fontSize: 12 }}
              placeholder={"• Built REST APIs using Node.js\n• Developed React dashboard components\n• Optimized SQL queries for performance"}
              value={bullets} onChange={e => setBullets(e.target.value)} />
          </div>
          <button onClick={handleRewrite} className="btn-primary" disabled={loading === 'rewrite' || !job.jobDescription}
            style={{ background: '#011F5B', width: '100%', padding: 11 }}>
            {loading === 'rewrite' ? 'Rewriting...' : 'Rewrite for This Role'}
          </button>

          {job.rewrittenBullets && section('AI-Rewritten Bullets', (
            <>
              <button onClick={() => copy(job.rewrittenBullets, 'bullets')} style={{
                float: 'right', background: 'none', border: 'none',
                fontSize: 11, color: copied === 'bullets' ? '#00d97e' : 'var(--muted)',
                cursor: 'pointer', marginTop: -8, marginBottom: 8,
              }}>{copied === 'bullets' ? '✓ Copied' : '❏ Copy'}</button>
              <pre style={{
                fontSize: 12, color: 'var(--subtle)', whiteSpace: 'pre-wrap',
                fontFamily: 'DM Mono, monospace', lineHeight: 1.8, clear: 'both',
              }}>{job.rewrittenBullets}</pre>
            </>
          ))}
        </div>
      )}

      {/* ── Cover Letter Tab ── */}
      {tab === 'cover' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>
            Generates a personalized cover letter using your resume + job description.
            {!job.resumeText && ' Run "Analyze Match" first to load your resume.'}
          </p>
          <button onClick={handleCover} className="btn-primary"
            disabled={loading === 'cover' || !job.resumeText || !job.jobDescription}
            style={{background: '#011F5B', width: '100%', padding: 11 }}>
            {loading === 'cover' ? 'Generating...' : 'Generate Cover Letter'}
          </button>

          {job.coverLetter && section('Generated Cover Letter', (
            <>
              <button onClick={() => copy(job.coverLetter, 'cover')} style={{
                float: 'right', background: 'none', border: 'none',
                fontSize: 11, color: copied === 'cover' ? '#00d97e' : 'var(--muted)',
                cursor: 'pointer', marginTop: -8, marginBottom: 8,
              }}>{copied === 'cover' ? '✓ Copied' : '❏ Copy'}</button>
              <div style={{
                maxHeight: 320, overflowY: 'auto', clear: 'both',
                fontSize: 13, color: 'var(--subtle)', lineHeight: 1.8, whiteSpace: 'pre-wrap',
              }}>{job.coverLetter}</div>
            </>
          ))}
        </div>
      )}

      {error && (
        <div style={{
          background: 'rgba(203,213,225,0.08)', border: '1px solid rgba(255,77,106,0.2)',
          borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#ff4d6a', marginTop: 14,
        }}>{error}</div>
      )}
    </div>
  );
}