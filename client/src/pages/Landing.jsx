// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowRight, Zap, Target, BarChart2, FileText, CheckCircle, TrendingUp, Star } from 'lucide-react';
// import logo from '../assets/logo.png';

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
// };
// const stagger = {
//   hidden: {},
//   show:   { transition: { staggerChildren: 0.09 } }
// };

// // ── exact colors from your login page ──
// const C = {
//   bg:       '#0d1117',
//   surface:  '#161b27',
//   card:     '#1a2133',
//   border:   'rgba(255,255,255,0.08)',
//   text:     '#e8eaf0',
//   muted:    '#6b7280',
//   subtle:   '#9ca3af',
//   purple:   '#7c3aed',
//   purpleHover: '#6d28d9',
//   purpleLight: 'rgba(124,58,237,0.12)',
// };

// const features = [
//   { icon: <Target size={20}/>,    title: 'AI Resume Scoring',      desc: 'See exactly how well your resume matches any job description. Get a score, matched skills, and gaps to fix.',         color: '#7c3aed', bg: 'rgba(124,58,237,0.1)' },
//   { icon: <BarChart2 size={20}/>, title: 'Kanban Pipeline',        desc: 'Drag and drop applications across Wishlist, Applied, Interview, Offer and Rejected. See your full search at a glance.',  color: '#3b82f6', bg: 'rgba(59,130,246,0.1)'  },
//   { icon: <FileText size={20}/>,  title: 'Cover Letter Generator', desc: 'Generate a tailored cover letter for every role in seconds, personalized to the company and job description.',          color: '#10b981', bg: 'rgba(16,185,129,0.1)'  },
//   { icon: <Zap size={20}/>,       title: 'Resume Rewriter',        desc: 'Paste your bullets and AI rewrites them using the exact keywords the ATS is scanning for in that specific role.',         color: '#f59e0b', bg: 'rgba(245,158,11,0.1)'  },
//   { icon: <TrendingUp size={20}/>,title: 'Application Analytics',  desc: 'Track your response rate, average AI score, and interview conversion across all applications in one dashboard.',          color: '#ef4444', bg: 'rgba(239,68,68,0.1)'   },
//   { icon: <CheckCircle size={20}/>,title:'PDF Resume Parsing',     desc: 'Upload your resume as a PDF. We extract and analyse the content automatically — no copy-pasting required.',              color: '#06b6d4', bg: 'rgba(6,182,212,0.1)'   },
// ];

// const steps = [
//   { num: '01', title: 'Add a job',       desc: 'Paste the company, role, and full job description into the tracker.' },
//   { num: '02', title: 'Analyze with AI', desc: 'Upload your resume and get an ATS score, skill gaps, and rewritten bullets instantly.' },
//   { num: '03', title: 'Track & apply',   desc: 'Move cards across your board as you progress. Never lose track again.' },
// ];

// const testimonials = [
//   { text: "Got 3 interviews in 2 weeks after using the AI scorer. It showed me exactly which keywords I was missing.", name: "Rahul M.",  role: "SWE @ Razorpay",  avatar: "R", color: "#7c3aed" },
//   { text: "The cover letter generator is insane. What used to take an hour now takes 30 seconds — and it's actually good.", name: "Priya S.", role: "Frontend @ Swiggy", avatar: "P", color: "#3b82f6" },
//   { text: "Finally a job tracker that doesn't look like a 2015 spreadsheet. The Kanban board alone is worth it.", name: "Arjun K.", role: "Full Stack @ Zepto",  avatar: "A", color: "#10b981" },
// ];

// // ── shared section wrapper ──
// const Section = ({ id, children, style = {} }) => (
//   <section id={id} style={{
//     padding: '96px 28px',
//     borderBottom: `1px solid ${C.border}`,
//     ...style,
//   }}>
//     <div style={{ maxWidth: 1080, margin: '0 auto' }}>
//       {children}
//     </div>
//   </section>
// );

// // ── section label + heading ──
// const SectionHead = ({ label, heading, sub }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }} transition={{ duration: 0.5 }}
//     style={{ textAlign: 'center', marginBottom: 60 }}
//   >
//     <span style={{
//       fontSize: 11, fontWeight: 700, color: C.purple,
//       letterSpacing: '0.12em', textTransform: 'uppercase',
//       background: C.purpleLight, padding: '5px 12px', borderRadius: 99,
//       display: 'inline-block', marginBottom: 16,
//     }}>{label}</span>
//     <h2 style={{
//       fontFamily: 'DM Serif Display, serif',
//       fontSize: 'clamp(26px, 4vw, 38px)',
//       color: C.text, lineHeight: 1.15,
//       letterSpacing: '-0.02em', marginBottom: sub ? 14 : 0,
//     }}>{heading}</h2>
//     {sub && <p style={{ fontSize: 16, color: C.muted, maxWidth: 460, margin: '0 auto', lineHeight: 1.75 }}>{sub}</p>}
//   </motion.div>
// );

// export default function Landing() {
//   return (
//     <div style={{ background: C.bg, fontFamily: 'Plus Jakarta Sans, sans-serif', color: C.text,  backgroundImage: `
//     linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
//     linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
//   `,
//   backgroundSize: '40px 40px', }}>

//       {/* ── NAVBAR ── */}
//       <motion.nav
//         initial={{ y: -16, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.4, ease: 'easeOut' }}
//         style={{
//           position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
//           background: 'rgba(13,17,23,0.85)', backdropFilter: 'blur(16px)',
//           borderBottom: `1px solid ${C.border}`,
//         }}
//       >
//         <div style={{
//           maxWidth: 1080, margin: '0 auto', padding: '0 28px',
//           height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//         }}>
//           {/* Logo */}
//           <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
//             <img src={logo} alt="JobTrack AI" style={{ width: 30, height: 30, borderRadius: 8 }} />
//             <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 18, color: C.text, letterSpacing: '-0.01em' }}>
//               JobTrack <span style={{ color: C.purple, fontStyle: 'italic' }}>AI</span>
//             </span>
//           </Link>

//           {/* Nav links */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
//             {[['#features','Features'], ['#how-it-works','How it works'], ['#testimonials','Testimonials']].map(([href, label]) => (
//               <a key={href} href={href} style={{
//                 fontSize: 14, color: C.muted, textDecoration: 'none', fontWeight: 500,
//                 transition: 'color 0.15s',
//               }}
//                 onMouseEnter={e => e.target.style.color = C.text}
//                 onMouseLeave={e => e.target.style.color = C.muted}
//               >{label}</a>
//             ))}
//           </div>

//           {/* Auth buttons */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//             <Link to="/login" style={{
//               fontSize: 14, color: C.muted, textDecoration: 'none',
//               fontWeight: 500, padding: '8px 16px', borderRadius: 8,
//               transition: 'color 0.15s',
//             }}
//               onMouseEnter={e => e.target.style.color = C.text}
//               onMouseLeave={e => e.target.style.color = C.muted}
//             >Sign in</Link>
//             <Link to="/register" style={{
//               fontSize: 14, fontWeight: 600, color: '#fff',
//               background: C.purple, padding: '9px 20px', borderRadius: 8,
//               textDecoration: 'none',
//               //boxShadow: '0 2px 12px rgba(124,58,237,0.3)',
//               transition: 'background 0.15s, box-shadow 0.15s',
//             }}
//               onMouseEnter={e => { e.currentTarget.style.background = C.purpleHover; e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,58,237,0.4)'; }}
//               onMouseLeave={e => { e.currentTarget.style.background = C.purple; e.currentTarget.style.boxShadow = '0 2px 12px rgba(124,58,237,0.3)'; }}
//             >Get started free</Link>
//           </div>
//         </div>
//       </motion.nav>

//       {/* ── HERO ── */}
//       <section style={{
//         minHeight: '100vh', paddingTop: 60,
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         borderBottom: `1px solid ${C.border}`,
//         background: `radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.07) 0%, transparent 65%)`,
//       }}>
//         <motion.div
//           variants={stagger} initial="hidden" animate="show"
//           style={{ maxWidth: 680, textAlign: 'center', padding: '80px 28px' }}
//         >
//           {/* Logo */}
//           <motion.div variants={fadeUp} style={{ marginBottom: 28 }}>
//             <img src={logo} alt="logo" style={{ width: 68, height: 68, borderRadius: 18,display: 'block', margin: '0 auto 24px' }} />
//           </motion.div>

//           {/* Badge */}
//           <motion.div variants={fadeUp} style={{ marginBottom: 24 }}>
//             <span style={{
//               display: 'inline-flex', alignItems: 'center', gap: 6,
//               background: C.purpleLight, border: `1px solid rgba(124,58,237,0.25)`,
//               color: '#a78bfa', fontSize: 12, fontWeight: 600,
//               padding: '5px 14px', borderRadius: 99, letterSpacing: '0.02em',
//             }}>
//               <Zap size={12} /> Powered by Gemini AI
//             </span>
//           </motion.div>

//           {/* Headline */}
//           <motion.h1 variants={fadeUp} style={{
//             fontFamily: 'DM Serif Display, serif',
//             fontSize: 'clamp(38px, 6vw, 62px)',
//             color: C.text, lineHeight: 1.1,
//             letterSpacing: '-0.03em', marginBottom: 22,
//           }}>
//             The smartest way to<br />
//             <span style={{ color: C.purple, fontStyle: 'italic' }}>track your job search</span>
//           </motion.h1>

//           {/* Sub */}
//           <motion.p variants={fadeUp} style={{
//             fontSize: 17, color: C.muted, lineHeight: 1.8,
//             marginBottom: 40, maxWidth: 520, margin: '0 auto 40px',
//           }}>
//             AI scores your resume against every JD, rewrites your bullets,
//             generates cover letters and tracks every application..  All in one place.
//           </motion.p>

//           {/* CTAs */}
//           <motion.div variants={fadeUp} style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
//             <Link to="/register" style={{
//               display: 'inline-flex', alignItems: 'center', gap: 8,
//               background: C.purple, color: '#fff',
//               fontSize: 15, fontWeight: 600,
//               padding: '13px 28px', borderRadius: 10,
//               textDecoration: 'none',
//               //boxShadow: '0 4px 20px rgba(124,58,237,0.35)',
//               transition: 'background 0.15s, transform 0.15s, box-shadow 0.15s',
//             }}
//               onMouseEnter={e => { e.currentTarget.style.background = C.purpleHover; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,58,237,0.4)'; }}
//               onMouseLeave={e => { e.currentTarget.style.background = C.purple; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,58,237,0.35)'; }}
//             >
//               Start for free <ArrowRight size={16} />
//             </Link>
//             <Link to="/login" style={{
//               display: 'inline-flex', alignItems: 'center', gap: 8,
//               background: 'transparent', color: C.subtle,
//               fontSize: 15, fontWeight: 500,
//               padding: '13px 28px', borderRadius: 10,
//               textDecoration: 'none',
//               border: `1px solid ${C.border}`,
//               transition: 'border-color 0.15s, color 0.15s',
//             }}
//               onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = C.text; }}
//               onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.subtle; }}
//             >
//               Sign in
//             </Link>
//           </motion.div>

//           {/* Stats row */}
//           <motion.div variants={fadeUp} style={{
//             display: 'flex', gap: 40, justifyContent: 'center',
//             marginTop: 60, paddingTop: 40,
//             borderTop: `5px solid ${C.border}`,
//             flexWrap: 'wrap',
//           }}>
//             {[
//             { num: 'AI-Powered', label: 'Resume scoring & rewriting' },
//             { num: '5 Stages', label: 'Track every application step' },
//             { num: '< 30s', label: 'Generate tailored cover letters' },
//             ].map((s, i) => (
//               <div key={i} style={{ textAlign: 'center' }}>
//                 <p style={{
//                   fontFamily: 'DM Mono, monospace',
//                   fontSize: 26, fontWeight: 700, color: C.text, lineHeight: 1,
//                 }}>{s.num}</p>
//                 <p style={{ fontSize: 13, color: C.muted, marginTop: 5 }}>{s.label}</p>
//               </div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* ── FEATURES ── */}
//       <Section id="features" style={{ background: C.bg,   backgroundImage: `
//       linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
//       linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
//     `,
//     backgroundSize: '40px 40px', }}>
//         <SectionHead
//           label="Everything you need"
//           heading="Built for serious job seekers"
//           sub="Every feature is designed to reduce time spent applying and increase your interview rate."
//         />
//         <motion.div
//           variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//           style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}
//         >
//           {features.map((f, i) => (
//             <motion.div key={i} variants={fadeUp} style={{
//               background: C.surface, border: `1px solid ${C.border}`,
//               borderRadius: 14, padding: '26px 24px',
//               transition: 'border-color 0.2s, background 0.2s',
//               cursor: 'default',
//             }}
//               onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.background = C.card; }}
//               onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}
//             >
//               <div style={{
//                 width: 44, height: 44, borderRadius: 10,
//                 background: f.bg, color: f.color,
//                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 marginBottom: 16,
//               }}>{f.icon}</div>
//               <h3 style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 8, letterSpacing: '-0.01em' }}>{f.title}</h3>
//               <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.8 }}>{f.desc}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </Section>

//       {/* ── HOW IT WORKS ── */}
//       <Section id="how-it-works" style={{ background: C.surface }}>
//         <SectionHead
//           label="Simple process"
//           heading="From job found to offer received"
//         />
//         <motion.div
//           variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//           style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}
//         >
//           {steps.map((s, i) => (
//             <motion.div key={i} variants={fadeUp} style={{
//               background: C.card, border: `1px solid ${C.border}`,
//               borderRadius: 14, padding: '30px 26px',
//             }}>
//               <span style={{
//                 fontFamily: 'DM Mono, monospace',
//                 fontSize: 12, fontWeight: 700, color: C.purple,
//                 background: C.purpleLight, padding: '4px 10px',
//                 borderRadius: 6, display: 'inline-block', marginBottom: 18,
//               }}>{s.num}</span>
//               <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 10, letterSpacing: '-0.01em' }}>{s.title}</h3>
//               <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.8 }}>{s.desc}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </Section>

//       {/* ── TESTIMONIALS ── */}
//       {/* <Section id="testimonials" style={{ background: C.bg }}>
//         <SectionHead
//           label="Real results"
//           heading="Developers who got hired"
//         />
//         <motion.div
//           variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//           style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}
//         >
//           {testimonials.map((t, i) => (
//             <motion.div key={i} variants={fadeUp} style={{
//               background: C.surface, border: `1px solid ${C.border}`,
//               borderRadius: 14, padding: '26px',
//             }}>
//               <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
//                 {[...Array(5)].map((_, j) => <Star key={j} size={13} fill="#f59e0b" color="#f59e0b" />)}
//               </div>
//               <p style={{ fontSize: 14, color: C.subtle, lineHeight: 1.8, marginBottom: 22, fontStyle: 'italic' }}>
//                 "{t.text}"
//               </p>
//               <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
//                 <div style={{
//                   width: 36, height: 36, borderRadius: '50%',
//                   background: t.color, color: '#fff',
//                   display: 'flex', alignItems: 'center', justifyContent: 'center',
//                   fontWeight: 700, fontSize: 14,
//                 }}>{t.avatar}</div>
//                 <div>
//                   <p style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{t.name}</p>
//                   <p style={{ fontSize: 12, color: C.muted }}>{t.role}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </Section> */}

//       {/* ── CTA BANNER ── */}
//       <section style={{
//         padding: '96px 28px',
//         background: `radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.1) 0%, transparent 65%)`,
//         borderTop: `1px solid ${C.border}`,
//         textAlign: 'center',
//       }}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }} transition={{ duration: 0.5 }}
//           style={{ maxWidth: 560, margin: '0 auto' }}
//         >
//           <img src={logo} alt="logo" style={{ width: 52, height: 52, borderRadius: 14, display: 'block', margin: '0 auto 24px'}} />
//           <h2 style={{
//             fontFamily: 'DM Serif Display, serif',
//             fontSize: 'clamp(28px, 4vw, 42px)',
//             color: C.text, lineHeight: 1.15,
//             letterSpacing: '-0.03em', marginBottom: 18,
//           }}>
//             Ready to land your<br />
//             <span style={{ color: C.purple, fontStyle: 'italic' }}>dream job?</span>
//           </h2>
//           <p style={{ fontSize: 16, color: C.muted, marginBottom: 36, lineHeight: 1.75 }}>
//             Free forever. No credit card required. Start in 30 seconds.
//           </p>
//           <Link to="/register" style={{
//             display: 'inline-flex', alignItems: 'center', gap: 8,
//             background: C.purple, color: '#fff',
//             fontSize: 15, fontWeight: 600,
//             padding: '14px 32px', borderRadius: 10,
//             textDecoration: 'none',
//             // boxShadow: '0 4px 20px rgba(124,58,237,0.3)',
//             transition: 'background 0.15s, transform 0.15s',
//           }}
//             onMouseEnter={e => { e.currentTarget.style.background = C.purpleHover; e.currentTarget.style.transform = 'translateY(-2px)'; }}
//             onMouseLeave={e => { e.currentTarget.style.background = C.purple; e.currentTarget.style.transform = 'translateY(0)'; }}
//           >
//             Get started for free <ArrowRight size={16} />
//           </Link>
//         </motion.div>
//       </section>

//       {/* ── FOOTER ── */}
//       <footer style={{
//         borderTop: `1px solid ${C.border}`,
//         padding: '28px',
//         textAlign: 'center',
//         background: C.bg,
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 10 }}>
//           <img src={logo} alt="logo" style={{ width: 22, height: 22, borderRadius: 5 }} />
//           <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 15, color: C.text }}>
//             JobTrack <span style={{ color: C.purple, fontStyle: 'italic' }}>AI</span>
//           </span>
//         </div>
//         {/* <p style={{ fontSize: 13, color: C.muted }}>
//           © 2025 JobTrack AI · Built with MERN + Gemini AI · Free forever
//         </p> */}
//       </footer>

//     </div>
//   );
// }

























import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Zap, Target, BarChart2, FileText,
  CheckCircle, TrendingUp, Star, Search, Users, Award
} from 'lucide-react';
import logo from '../assets/logo.png';

// ── Colors — matched exactly from your screenshot ──────────────────────────
const C = {
  bg:          '#0f1021',
  surface:     '#161929',
  card:        '#1e2235',
  border:      'rgba(255,255,255,0.07)',
  borderHover: 'rgba(255,255,255,0.14)',
  text:        '#ffffff',
  muted:       '#8892a4',
  subtle:      '#5a6478',
  purple:      '#7c3aed',
  purpleSoft:  '#9461fb',
  purpleLight: 'rgba(124,58,237,0.14)',
  purpleBorder:'rgba(124,58,237,0.3)',
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.52, ease: [0.25, 0.1, 0.25, 1] } }
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// ── Hero feature pills (right column) ─────────────────────────────────────
const heroPills = [
  { icon: <Target size={17}/>,   title: 'AI Resume Score',        desc: 'See how well your resume matches any job description.' },
  { icon: <BarChart2 size={17}/>, title: 'Smart Track Board',     desc: 'Visualize your applications and never lose track.' },
  { icon: <FileText size={17}/>, title: 'Cover Letter Generator', desc: 'Create personalized cover letters in seconds.' },
];

// ── Features grid ──────────────────────────────────────────────────────────
const features = [
  { icon: <Target size={19}/>,    title: 'AI Resume Scoring',      desc: 'Paste any JD and instantly see how well your resume matches. Get a score, matched skills, and exact gaps to fix.',     color: '#9461fb', bg: 'rgba(124,58,237,0.12)' },
  { icon: <BarChart2 size={19}/>, title: 'Kanban Pipeline',        desc: 'Drag and drop applications across Wishlist, Applied, Interview, Offer and Rejected. Your full search at a glance.',      color: '#3b82f6', bg: 'rgba(59,130,246,0.12)'  },
  { icon: <FileText size={19}/>,  title: 'Cover Letter Generator', desc: 'Generate a tailored cover letter for every role in seconds. Personalized to the company and the exact job description.', color: '#10b981', bg: 'rgba(16,185,129,0.12)'  },
  { icon: <Zap size={19}/>,       title: 'Resume Rewriter',        desc: 'Paste your bullets and AI rewrites them using the exact ATS keywords for that specific role.',                           color: '#f59e0b', bg: 'rgba(245,158,11,0.12)'  },
  { icon: <TrendingUp size={19}/>,title: 'Application Analytics',  desc: 'Track response rate, average AI score, and interview conversion across all your applications.',                           color: '#ef4444', bg: 'rgba(239,68,68,0.12)'   },
  { icon: <CheckCircle size={19}/>,title:'PDF Resume Parsing',     desc: 'Upload your resume as a PDF. We extract and analyse everything automatically — no copy-pasting required.',               color: '#06b6d4', bg: 'rgba(6,182,212,0.12)'   },
];

// const steps = [
//   { num: '01', title: 'Add a job',       desc: 'Paste the company, role & full job description into your tracker in under a minute.' },
//   { num: '02', title: 'Analyze with AI', desc: 'Upload your resume. Get an ATS score, skill gaps and AI rewritten bullets targeting that exact role.' },
//   { num: '03', title: 'Track & apply',   desc: 'Drag cards across your pipeline as you progress. Every application, every stage, in one view.' },
// ];



const steps = [
  {
    num: '01',
    title: 'Add a job',
    desc: 'Paste the company, role and complete job description into your tracker in under a minute.',
  },
  {
    num: '02',
    title: 'Analyze with AI',
    desc: 'Upload your resume to receive an ATS score, identify skill gaps and get AI-enhanced resume bullet points tailored to the role.',
  },
  {
    num: '03',
    title: 'Generate cover letter',
    desc: 'Generate a personalized, job-specific cover letter in one click using the job description and your resume.',
  },
  {
    num: '04',
    title: 'Track & apply',
    desc: 'Manage every application with a visual pipeline. Move jobs across stages and keep your entire job search organized in one place.',
  },
];



const testimonials = [
  { text: "Got 3 interviews in 2 weeks after using the AI scorer. It showed me exactly which keywords I was missing.", name: "Rahul M.",  role: "SWE @ Razorpay",  avatar: "R", color: "#7c3aed" },
  { text: "The cover letter generator is insane. What used to take an hour now takes 30 seconds — and it's genuinely good.", name: "Priya S.", role: "Frontend @ Swiggy", avatar: "P", color: "#3b82f6" },
  { text: "Finally a tracker that doesn't look like a 2015 spreadsheet. The Kanban board alone is worth it.", name: "Arjun K.", role: "Full Stack @ Zepto",  avatar: "A", color: "#10b981" },
];

// ── 3D Illustration — SVG built to match the folder+document visual ────────
function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
      style={{ position: 'relative', width: '100%', maxWidth: 340, margin: '0 auto' }}
    >
      {/* Glow behind illustration */}
      <div style={{
        position: 'absolute', inset: '-20%',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 68%)',
        pointerEvents: 'none',
      }}/>

      <svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.5))' }}>
        {/* Folder body */}
        <rect x="30" y="90" width="260" height="170" rx="14" fill="#1e2235" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <rect x="30" y="72" width="110" height="30" rx="8" fill="#252a40"/>
        <rect x="30" y="86" width="260" height="16" rx="4" fill="#1a1f33"/>

        {/* Document 1 — back */}
        <rect x="80" y="55" width="150" height="190" rx="10" fill="#2a2f47" stroke="rgba(255,255,255,0.06)" strokeWidth="1" transform="rotate(-6 155 150)"/>
        {/* Document 2 — front */}
        <rect x="90" y="48" width="150" height="190" rx="10" fill="#f0f2ff" transform="rotate(3 165 143)"/>
        {/* Document lines */}
        <rect x="108" y="80"  width="90" height="7" rx="3" fill="#c4c9e8" transform="rotate(3 165 143)"/>
        <rect x="108" y="96"  width="110" height="5" rx="2.5" fill="#dde0f0" transform="rotate(3 165 143)"/>
        <rect x="108" y="108" width="100" height="5" rx="2.5" fill="#dde0f0" transform="rotate(3 165 143)"/>
        <rect x="108" y="120" width="85"  height="5" rx="2.5" fill="#dde0f0" transform="rotate(3 165 143)"/>
        {/* Avatar circle on doc */}
        <circle cx="132" cy="65" r="14" fill="#7c3aed" transform="rotate(3 165 143)"/>
        <circle cx="132" cy="62" r="6"  fill="rgba(255,255,255,0.9)" transform="rotate(3 165 143)"/>
        <ellipse cx="132" cy="74" rx="9" ry="5" fill="rgba(255,255,255,0.9)" transform="rotate(3 165 143)"/>

        {/* Magnifier */}
        <circle cx="210" cy="195" r="36" fill="#7c3aed" opacity="0.9"/>
        <circle cx="208" cy="193" r="20" fill="none" stroke="white" strokeWidth="5"/>
        <line x1="222" y1="207" x2="238" y2="222" stroke="white" strokeWidth="5" strokeLinecap="round"/>
      </svg>

      {/* Floating badge — ATS Score */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '8%', right: '-8%',
          background: C.card, border: `1px solid ${C.border}`,
          borderRadius: 10, padding: '10px 14px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', gap: 10,
          minWidth: 140,
        }}
      >
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'rgba(16,185,129,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <TrendingUp size={16} color="#10b981"/>
        </div>
        <div>
          <p style={{ fontSize: 10, color: C.muted, marginBottom: 1 }}>ATS Match</p>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#10b981', fontFamily: 'DM Mono, monospace' }}>87%</p>
        </div>
      </motion.div>

      {/* Floating badge — Applications */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{
          position: 'absolute', bottom: '10%', left: '-6%',
          background: C.card, border: `1px solid ${C.border}`,
          borderRadius: 10, padding: '10px 14px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', gap: 10,
        }}
      >
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: C.purpleLight,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Users size={16} color={C.purpleSoft}/>
        </div>
        <div>
          <p style={{ fontSize: 10, color: C.muted, marginBottom: 1 }}>Applications</p>
          <p style={{ fontSize: 15, fontWeight: 700, color: C.text, fontFamily: 'DM Mono, monospace' }}>24</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Navbar ─────────────────────────────────────────────────────────────────
function LandingNav() {
  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(15,16,33,0.88)', backdropFilter: 'blur(18px)',
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 32px',
        height: 62, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={logo} alt="logo" style={{ width: 28, height: 28, borderRadius: 7 }}/>
          <span style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 18, color: C.text, letterSpacing: '-0.01em',
          }}>
            JobTrack <span style={{ color: '#8B7AA8', fontStyle: 'italic' }}>AI</span>
          </span>
        </Link>

        {/* Nav links */}
        <div style={{ display : 'flex', alignItems: 'center', gap: 36 }}>
          {[['#features','Features'],['#how-it-works','How it works'],['#testimonials','Testimonials']].map(([href, label]) => (
            <a key={href} href={href} style={{
              fontSize: 14, color: C.muted, textDecoration: 'none', fontWeight: 500,
              transition: 'color 0.15s',
            }}
              onMouseEnter={e => e.target.style.color = C.text}
              onMouseLeave={e => e.target.style.color = C.muted}
            >{label}</a>
          ))}
        </div>

        {/* Auth */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link to="/login" style={{
            fontSize: 14, color: '#CBD5E1', textDecoration: 'none',
            fontWeight: 500, padding: '8px 18px', borderRadius: 8,
            border: `1px solid ${C.border}`, transition: 'color 0.15s, border-color 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderColor = C.borderHover; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#CBD5E1'; e.currentTarget.style.borderColor = C.border; }}
          >Sign in</Link>
          <Link to="/register" style={{
            fontSize: 14, fontWeight: 600, color: '#fff',
            //background: C.purple, 

            background: '#355C5A',
            border: '1px solid rgba(255,255,255,0.08)',


            padding: '9px 20px', borderRadius: 6,
            textDecoration: 'none',
            //boxShadow: '0 2px 16px rgba(124,58,237,0.35)',
            //transition: 'background 0.15s, box-shadow 0.15s, transform 0.12s',

            transition: 'background 0.15s, border-color 0.15s, transform 0.12s',

            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}
            //onMouseEnter={e => { e.currentTarget.style.background = '#6d28d9'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(124,58,237,0.45)'; }}
            //onMouseLeave={e => { e.currentTarget.style.background = C.purple; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(124,58,237,0.35)'; }}

            onMouseEnter={e => {
  e.currentTarget.style.background = '#334155';
  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
  e.currentTarget.style.transform = 'translateY(-1px)';
}}

onMouseLeave={e => {
  e.currentTarget.style.background = '#355C5A';
  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
  e.currentTarget.style.transform = 'translateY(0)';
}}



          >
            Get started free
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────
export default function Landing() {
  return (
    <div style={{ background: C.bg, fontFamily: 'Plus Jakarta Sans, sans-serif', color: C.text }}>
      <LandingNav />

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', paddingTop: 62,
        display: 'flex', alignItems: 'center',
        borderBottom: `1px solid ${C.border}`,
        background: `radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.07) 0%, transparent 55%),
                     radial-gradient(ellipse at 80% 20%, rgba(59,130,246,0.05) 0%, transparent 50%)`,
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 32px', width: '100%' }}>
          <div style={{
            display: 'grid',
            // gridTemplateColumns: '1fr 1fr 320px',
            // gap: 40, alignItems: 'center',





            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 40, alignItems: 'center',
            flexWrap: 'wrap',



          }}>

            {/* LEFT — headline */}
            <motion.div variants={stagger} initial="hidden" animate="show">
              {/* Badge */}
              <motion.div variants={fadeUp} style={{ marginBottom: 22 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  // background: C.purpleLight,
                  // border: `1px solid ${C.purpleBorder}`,
                  // color: '#a78bfa',
                  
                  background: '#161B22',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.28)',
                  color: '#D1D5DB',


                  fontSize: 12, fontWeight: 600,
                  padding: '5px 13px', borderRadius: 99,
                  letterSpacing: '0.02em',
                }}>
                  <Zap size={11} fill="#93C5FD"/> AI Resume Insights
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={fadeUp} style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(36px, 4.5vw, 56px)',
                color: C.text, lineHeight: 1.1,
                letterSpacing: '-0.03em', marginBottom: 18,
              }}>
                Track smarter.<br />
                Get hired <span style={{color: '#B09A6A', fontStyle: 'italic' }}>faster.</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p variants={fadeUp} style={{
                fontSize: 16, color: C.muted, lineHeight: 1.8,
                marginBottom: 36, maxWidth: 400,
              }}>
                Score your resume, tailor your applications, generate cover letters and track every step of your journey.
              </motion.p>

              {/* CTA row */}
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 36 }}>
                <Link to="/register" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#355C5A', color: '#fff',
                  fontSize: 15, fontWeight: 600,
                  padding: '12px 26px', borderRadius: 9,
                  textDecoration: 'none',
                  //boxShadow: '0 4px 20px rgba(124,58,237,0.4)',
                  transition: 'background 0.15s, transform 0.12s, box-shadow 0.15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#43706E'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#355C5A'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Start for free <ArrowRight size={16}/>
                </Link>
                <Link to="/login" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  fontSize: 15, fontWeight: 500, color: C.muted,
                  textDecoration: 'none',
                  padding: '12px 22px', borderRadius: 9,
                  border: `1px solid ${C.border}`,
                  transition: 'color 0.15s, border-color 0.15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = C.borderHover; }}
                  onMouseLeave={e => { e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = C.border; }}
                >
                  Sign in
                </Link>
              </motion.div>

              {/* Social proof row */}
              <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                {/* Avatars */}
                <div style={{ display: 'flex' }}>
                  {['#7c3aed','#3b82f6','#10b981'].map((color, i) => (
                    <div key={i} style={{
                      width: 30, height: 30, borderRadius: '50%',
                      background: color, border: `2px solid ${C.bg}`,
                      marginLeft: i === 0 ? 0 : -8,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12, fontWeight: 700, color: '#fff',
                    }}>
                      {['R','P','A'][i]}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 3 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#f59e0b" color="#f59e0b"/>)}
                </div>
                {/* <span style={{ fontSize: 13, color: C.muted }}>
                  4.9/5 from <span style={{ color: C.text, fontWeight: 600 }}>2,000+</span> users
                </span> */}
              </motion.div>
            </motion.div>

            {/* CENTER — illustration */}
            <HeroIllustration />

            {/* RIGHT — feature pills */}
            <motion.div
              variants={stagger} initial="hidden" animate="show"
              style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
            >
              {heroPills.map((p, i) => (
                <motion.div key={i} variants={fadeUp} style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12, padding: '16px 18px',
                  display: 'flex', alignItems: 'flex-start', gap: 13,
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.borderHover; e.currentTarget.style.background = C.card; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}
                >
                  <div style={{
                    width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                    background: C.purpleLight, color: C.purpleSoft,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{p.icon}</div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 4 }}>{p.title}</p>
                    <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: '96px 32px', background: C.bg, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: 56 }}
          >
            <span style={{
              fontSize: 11, fontWeight: 700, 
              // color: C.purpleSoft,
              // background: C.purpleLight,

            color: '#D8C49A',
background: 'rgba(139, 111, 71, 0.18)',
border: '1px solid rgba(216,196,154,0.18)',

              letterSpacing: '0.1em', textTransform: 'uppercase',
               padding: '5px 13px',
              borderRadius: 99, display: 'inline-block', marginBottom: 16,
            }}>Everything in ONE Place</span>
            <h2 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(26px, 4vw, 38px)',
              color: C.text, letterSpacing: '-0.02em', lineHeight: 1.2,
            }}>Built for serious job seekers</h2>
            <p style={{ fontSize: 15, color: C.muted, marginTop: 14, maxWidth: 460, margin: '14px auto 0', lineHeight: 1.8 }}>
              Every feature is designed to reduce time spent applying and increase your interview rate.
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 14 }}
          >
            {features.map((f, i) => (
              <motion.div key={i} variants={fadeUp} style={{
                background: C.surface, border: `1px solid ${C.border}`,
                borderRadius: 14, padding: '26px 24px',
                transition: 'border-color 0.2s, background 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.borderHover; e.currentTarget.style.background = C.card; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: f.bg, color: f.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
                }}>{f.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 8, letterSpacing: '-0.01em' }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.8 }}>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" style={{ padding: '96px 32px', background: C.surface, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: 56 }}
          >
            <span style={{
              fontSize: 11, fontWeight: 700, 
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#D8C49A',
background: 'rgba(139, 111, 71, 0.18)',
border: '1px solid rgba(216,196,154,0.18)',
              padding: '5px 13px',
              borderRadius: 99, display: 'inline-block', marginBottom: 16,
            }}>Simple process</span>
            <h2 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(26px, 4vw, 38px)',
              color: C.text, letterSpacing: '-0.02em',
            }}>From job found to offer received</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}
          >
            {steps.map((s, i) => (
              <motion.div key={i} variants={fadeUp} style={{
                background: C.card, border: `1px solid ${C.border}`,
                borderRadius: 14, padding: '30px 26px',
              }}>
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 12, fontWeight: 700, color: '#C5C09A',
                  background: C.purpleLight, padding: '4px 10px',
                  borderRadius: 6, display: 'inline-block', marginBottom: 18,
                }}>{s.num}</span>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 10, letterSpacing: '-0.01em' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.8 }}>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      {/* <section id="testimonials" style={{ padding: '96px 32px', background: C.bg, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: 56 }}
          >
            <span style={{
              fontSize: 11, fontWeight: 700, color: C.purpleSoft,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              background: C.purpleLight, padding: '5px 13px',
              borderRadius: 99, display: 'inline-block', marginBottom: 16,
            }}>Real results</span>
            <h2 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(26px, 4vw, 38px)',
              color: C.text, letterSpacing: '-0.02em',
            }}>Developers who got hired</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}
          >
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} style={{
                background: C.surface, border: `1px solid ${C.border}`,
                borderRadius: 14, padding: '26px',
              }}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={13} fill="#f59e0b" color="#f59e0b"/>)}
                </div>
                <p style={{ fontSize: 14, color: C.subtle, lineHeight: 1.85, marginBottom: 24, fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: '50%',
                    background: t.color, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: 15,
                  }}>{t.avatar}</div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{t.name}</p>
                    <p style={{ fontSize: 12, color: C.muted }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* ── CTA ── */}
      <section style={{
        padding: '96px 32px', textAlign: 'center',
        background: `radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.12) 0%, transparent 60%)`,
        borderTop: `1px solid ${C.border}`,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ maxWidth: 540, margin: '0 auto' }}
        >
          <img src={logo} alt="logo" style={{ width: 54, height: 54, borderRadius: 14, marginBottom: 24,display: 'block', margin: '0 auto 24px' }}/>
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            color: C.text, lineHeight: 1.15,
            letterSpacing: '-0.03em', marginBottom: 18,
          }}>
            Ready to land your<br/>
            <span style={{ color: '#B09A6A', fontStyle: 'italic' }}>dream job?</span>
          </h2>
          <p style={{ fontSize: 16, color: C.muted, marginBottom: 36, lineHeight: 1.75 }}>
            Free forever. No credit card required. Start in 30 seconds.
          </p>
          <Link to="/register" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#355C5A', color: '#fff',
            fontSize: 15, fontWeight: 600,
            padding: '14px 32px', borderRadius: 10,
            textDecoration: 'none',
            //boxShadow: '0 4px 24px rgba(124,58,237,0.35)',
            transition: 'background 0.15s, transform 0.12s, box-shadow 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#43706E'; e.currentTarget.style.transform = 'translateY(-2px)';}}
            onMouseLeave={e => { e.currentTarget.style.background = '#355C5A'; e.currentTarget.style.transform = 'translateY(0)';}}
          >
            Get started for free <ArrowRight size={16}/>
          </Link>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: `1px solid ${C.border}`,
        padding: '28px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'relative',
        background: C.bg,
        flexWrap: 'wrap', gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={logo} alt="logo" style={{ width: 22, height: 22, borderRadius: 5 }}/>
          <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: 15, color: C.text }}>
            JobTrack <span style={{ color: C.purpleSoft, fontStyle: 'italic' }}>AI</span>
          </span>
        </div>
        {/* <p style={{ fontSize: 13, color: C.subtle }}>
          © 2025 JobTrack AI · Built with MERN + Gemini AI · Free forever
        </p> */}
        <div style={{ display: 'flex', gap: 24, position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)' }}>
          {['Features','How it works','Testimonials'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`}
              style={{ fontSize: 13, color: C.muted, textDecoration: 'none' }}
              onMouseEnter={e => e.target.style.color = C.text}
              onMouseLeave={e => e.target.style.color = C.muted}
            >{l}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}