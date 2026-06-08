// // import { useState } from 'react';
// // import {
// //   DndContext, DragOverlay, closestCorners,
// //   PointerSensor, useSensor, useSensors
// // } from '@dnd-kit/core';
// // import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
// // import { useSortable } from '@dnd-kit/sortable';
// // import { CSS } from '@dnd-kit/utilities';
// // import { useUpdateJob } from '../hooks/useJobs';
// // import { useNavigate } from 'react-router-dom';

// // const COLUMNS = [
// //   { id: 'wishlist',  label: '⭐ Wishlist',   color: 'border-gray-600' },
// //   { id: 'applied',   label: '📤 Applied',     color: 'border-blue-600' },
// //   { id: 'interview', label: '🎯 Interview',    color: 'border-yellow-500' },
// //   { id: 'offer',     label: '🎉 Offer',        color: 'border-green-500' },
// //   { id: 'rejected',  label: '❌ Rejected',     color: 'border-red-700' },
// // ];

// // const ScoreBadge = ({ score }) => {
// //   if (score === null || score === undefined) return null;
// //   const color = score >= 70 ? 'text-green-400' : score >= 40 ? 'text-yellow-400' : 'text-red-400';
// //   return <span className={`text-xs font-bold ${color}`}>{score}%</span>;
// // };

// // function SortableJobCard({ job }) {
// //   const navigate = useNavigate();
// //   const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: job._id });
// //   const style = {
// //     transform: CSS.Transform.toString(transform),
// //     transition,
// //     opacity: isDragging ? 0.4 : 1,
// //   };

// //   return (
// //     <div
// //       ref={setNodeRef}
// //       style={style}
// //       {...attributes}
// //       {...listeners}
// //       onClick={() => navigate(`/jobs/${job._id}`)}
// //       className="bg-gray-800 border border-gray-700 rounded-lg p-3 cursor-pointer hover:border-indigo-500 transition-colors group select-none"
// //     >
// //       <div className="flex items-start justify-between gap-2">
// //         <div>
// //           <p className="font-medium text-sm text-gray-100 leading-tight">{job.company}</p>
// //           <p className="text-xs text-gray-400 mt-0.5">{job.role}</p>
// //         </div>
// //         <ScoreBadge score={job.aiScore} />
// //       </div>
// //       {job.location && (
// //         <p className="text-xs text-gray-500 mt-2">📍 {job.location}</p>
// //       )}
// //       <p className="text-xs text-gray-600 mt-1.5">
// //         {new Date(job.createdAt).toLocaleDateString()}
// //       </p>
// //     </div>
// //   );
// // }

// // export default function KanbanBoard({ jobs }) {
// //   const [activeJob, setActiveJob] = useState(null);
// //   const updateJob = useUpdateJob();

// //   const sensors = useSensors(
// //     useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
// //   );

// //   const getJobsByStatus = (status) => jobs.filter(j => j.status === status);

// //   const handleDragStart = ({ active }) => {
// //     setActiveJob(jobs.find(j => j._id === active.id));
// //   };

// //   const handleDragEnd = ({ active, over }) => {
// //     setActiveJob(null);
// //     if (!over) return;

// //     const targetColumn = COLUMNS.find(col => col.id === over.id);
// //     if (!targetColumn) return;

// //     const job = jobs.find(j => j._id === active.id);
// //     if (!job || job.status === targetColumn.id) return;

// //     updateJob.mutate({ id: active.id, updates: { status: targetColumn.id } });
// //   };

// //   return (
// //     <DndContext
// //       sensors={sensors}
// //       collisionDetection={closestCorners}
// //       onDragStart={handleDragStart}
// //       onDragEnd={handleDragEnd}
// //     >
// //       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
// //         {COLUMNS.map(col => {
// //           const colJobs = getJobsByStatus(col.id);
// //           return (
// //             <SortableContext
// //               key={col.id}
// //               id={col.id}
// //               items={colJobs.map(j => j._id)}
// //               strategy={verticalListSortingStrategy}
// //             >
// //               <div
// //                 className={`bg-gray-900 border-t-2 ${col.color} rounded-xl p-3 min-h-[300px]`}
// //               >
// //                 <div className="flex items-center justify-between mb-3">
// //                   <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
// //                     {col.label}
// //                   </h3>
// //                   <span className="text-xs text-gray-600 bg-gray-800 rounded-full px-2 py-0.5">
// //                     {colJobs.length}
// //                   </span>
// //                 </div>
// //                 <div className="space-y-2">
// //                   {colJobs.map(job => (
// //                     <SortableJobCard key={job._id} job={job} />
// //                   ))}
// //                 </div>
// //               </div>
// //             </SortableContext>
// //           );
// //         })}
// //       </div>

// //       <DragOverlay>
// //         {activeJob && (
// //           <div className="bg-gray-800 border border-indigo-500 rounded-lg p-3 shadow-2xl rotate-1">
// //             <p className="font-medium text-sm">{activeJob.company}</p>
// //             <p className="text-xs text-gray-400">{activeJob.role}</p>
// //           </div>
// //         )}
// //       </DragOverlay>
// //     </DndContext>
// //   );
// // }



































// // src/components/KanbanBoard.jsx
// import { useState } from 'react';
// import {
//   DndContext, DragOverlay, closestCorners,
//   PointerSensor, useSensor, useSensors
// } from '@dnd-kit/core';
// import { useDroppable } from '@dnd-kit/core';
// import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';
// import { useUpdateJob } from '../hooks/useJobs';
// import { useNavigate } from 'react-router-dom';

// const COLUMNS = [
//   { id: 'wishlist',  label: '⭐ Wishlist',   color: 'border-gray-600' },
//   { id: 'applied',   label: '📤 Applied',     color: 'border-blue-600' },
//   { id: 'interview', label: '🎯 Interview',    color: 'border-yellow-500' },
//   { id: 'offer',     label: '🎉 Offer',        color: 'border-green-500' },
//   { id: 'rejected',  label: '❌ Rejected',     color: 'border-red-700' },
// ];

// // ✅ Each column is now a proper drop target
// function DroppableColumn({ column, children, count }) {
//   const { setNodeRef, isOver } = useDroppable({ id: column.id });

//   return (
//     <div
//       ref={setNodeRef}
//       className={`border-t-2 ${column.color} rounded-xl p-3 min-h-[300px] transition-colors duration-150 ${
//         isOver ? 'bg-gray-800' : 'bg-gray-900'
//       }`}
//     >
//       <div className="flex items-center justify-between mb-3">
//         <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
//           {column.label}
//         </h3>
//         <span className="text-xs text-gray-600 bg-gray-800 rounded-full px-2 py-0.5">
//           {count}
//         </span>
//       </div>
//       <div className="space-y-2">
//         {children}
//       </div>
//     </div>
//   );
// }

// function SortableJobCard({ job }) {
//   const navigate = useNavigate();
//   const {
//     attributes, listeners, setNodeRef,
//     transform, transition, isDragging
//   } = useSortable({ id: job._id });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     opacity: isDragging ? 0.4 : 1,
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       {...listeners}
//       className="bg-gray-800 border border-gray-700 rounded-lg p-3 cursor-grab active:cursor-grabbing hover:border-indigo-500 transition-colors select-none"
//     >
//       {/* Separate click handler from drag — click only fires if not dragging */}
//       <div onClick={() => navigate(`/jobs/${job._id}`)}>
//         <div className="flex items-start justify-between gap-2">
//           <div>
//             <p className="font-medium text-sm text-gray-100 leading-tight">{job.company}</p>
//             <p className="text-xs text-gray-400 mt-0.5">{job.role}</p>
//           </div>
//           {job.aiScore !== null && job.aiScore !== undefined && (
//             <span className={`text-xs font-bold flex-shrink-0 ${
//               job.aiScore >= 70 ? 'text-green-400' :
//               job.aiScore >= 40 ? 'text-yellow-400' : 'text-red-400'
//             }`}>
//               {job.aiScore}%
//             </span>
//           )}
//         </div>
//         {job.location && (
//           <p className="text-xs text-gray-500 mt-2">📍 {job.location}</p>
//         )}
//         <p className="text-xs text-gray-600 mt-1.5">
//           {new Date(job.createdAt).toLocaleDateString()}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function KanbanBoard({ jobs }) {
//   const [activeJob, setActiveJob] = useState(null);
//   const updateJob = useUpdateJob();

//   const sensors = useSensors(
//     useSensor(PointerSensor, {
//       activationConstraint: { distance: 8 }, // drag starts after 8px movement
//     })
//   );

//   const getJobsByStatus = (status) => jobs.filter(j => j.status === status);

//   const handleDragStart = ({ active }) => {
//     setActiveJob(jobs.find(j => j._id === active.id));
//   };

//   const handleDragEnd = ({ active, over }) => {
//     setActiveJob(null);
//     if (!over) return;

//     // over.id can be a column id OR a job id (if dropped on another card)
//     // Check if it's a column first
//     const isColumn = COLUMNS.some(col => col.id === over.id);

//     let newStatus;
//     if (isColumn) {
//       newStatus = over.id;
//     } else {
//       // Dropped on a card — find which column that card belongs to
//       const overJob = jobs.find(j => j._id === over.id);
//       if (!overJob) return;
//       newStatus = overJob.status;
//     }

//     const draggedJob = jobs.find(j => j._id === active.id);
//     if (!draggedJob || draggedJob.status === newStatus) return;

//     updateJob.mutate({ id: active.id, updates: { status: newStatus } });
//   };

//   return (
//     <DndContext
//       sensors={sensors}
//       collisionDetection={closestCorners}
//       onDragStart={handleDragStart}
//       onDragEnd={handleDragEnd}
//     >
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
//         {COLUMNS.map(col => {
//           const colJobs = getJobsByStatus(col.id);
//           return (
//             <DroppableColumn key={col.id} column={col} count={colJobs.length}>
//               <SortableContext
//                 items={colJobs.map(j => j._id)}
//                 strategy={verticalListSortingStrategy}
//               >
//                 {colJobs.map(job => (
//                   <SortableJobCard key={job._id} job={job} />
//                 ))}
//               </SortableContext>
//             </DroppableColumn>
//           );
//         })}
//       </div>

//       {/* Ghost card shown while dragging */}
//       <DragOverlay>
//         {activeJob && (
//           <div className="bg-gray-800 border-2 border-indigo-500 rounded-lg p-3 shadow-2xl rotate-1 cursor-grabbing">
//             <p className="font-medium text-sm text-gray-100">{activeJob.company}</p>
//             <p className="text-xs text-gray-400">{activeJob.role}</p>
//           </div>
//         )}
//       </DragOverlay>
//     </DndContext>
//   );
// }

































































import { useState } from 'react';
import {
  DndContext, DragOverlay, closestCorners,
  PointerSensor, useSensor, useSensors,
} from '@dnd-kit/core';
import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext, verticalListSortingStrategy, useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useUpdateJob } from '../hooks/useJobs';
import { useNavigate } from 'react-router-dom';

const COLUMNS = [
  { id: 'wishlist',  label: 'Wishlist',   dot: '#8892a4' },
  { id: 'applied',   label: 'Applied',    dot: '#4f7cff' },
  { id: 'interview', label: 'Interview',  dot: '#f5a623' },
  { id: 'offer',     label: 'Offer',      dot: '#00d97e' },
  { id: 'rejected',  label: 'Rejected',   dot: '#ff4d6a' },
];

function DroppableColumn({ column, children, count }) {
  const { setNodeRef, isOver } = useDroppable({ id: column.id });
  return (
    <div ref={setNodeRef} style={{
      background: isOver ? 'rgba(79,124,255,0.04)' : 'rgba(14,17,23,0.6)',
      border: `1px solid ${isOver ? 'rgba(79,124,255,0.2)' : 'rgba(255,255,255,0.06)'}`,
      borderRadius: 12,
      padding: 12,
      minHeight: 320,
      transition: 'background 0.15s, border-color 0.15s',
    }}>
      {/* Column header */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', marginBottom: 12, padding: '4px 4px 8px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div style={{
            width: 6, height: 6, borderRadius: '50%',
            background: column.dot,
            // boxShadow: `0 0 6px ${column.dot}`,
            boxShadow: 'none',
          }} />
          <span style={{
            fontSize: 11, fontFamily: 'Inter, sans-serif',fontWeight: 600, color: 'var(--subtle)',
            textTransform: 'uppercase', letterSpacing: '0.07em',
          }}>{column.label}</span>
        </div>
        <span style={{
          fontSize: 11, color: 'var(--muted)',
          fontFamily: 'Inter, sans-serif',
          background: 'rgba(255,255,255,0.04)',
          padding: '1px 7px', borderRadius: 99,
        }}>{count}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {children}
      </div>
    </div>
  );
}

function SortableJobCard({ job }) {
  const navigate = useNavigate();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: job._id });

  const scoreColor = job.aiScore >= 70 ? '#00d97e' : job.aiScore >= 40 ? '#f5a623' : '#ff4d6a';

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.3 : 1,
        background: 'var(--surface2)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 9,
        padding: '12px 13px',
        cursor: 'grab',
        userSelect: 'none',
      }}
      {...attributes}
      {...listeners}
      onClick={() => navigate(`/jobs/${job._id}`)}
      className="glass-hover"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
        <div style={{ minWidth: 0 }}>
          <p style={{
            fontWeight: 600, fontSize: 13, color: '#e8eaf0',
            marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>{job.company}</p>
          <p style={{
            fontSize: 12, color: 'var(--subtle)',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>{job.role}</p>
        </div>
        {job.aiScore != null && (
          <span style={{
            fontSize: 11, fontWeight: 700, color: scoreColor,
            fontFamily: 'DM Mono, monospace', flexShrink: 0,
          }}>{job.aiScore}%</span>
        )}
      </div>
      {job.location && (
        <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 8 }}>
          📍 {job.location}
        </p>
      )}
      <p style={{
        fontSize: 10, color: 'var(--muted)', marginTop: 6,
        fontFamily: 'DM Mono, monospace',
      }}>{new Date(job.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
    </div>
  );
}

export default function KanbanBoard({ jobs }) {
  const [activeJob, setActiveJob] = useState(null);
  const updateJob = useUpdateJob();

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));
  const getJobsByStatus = (status) => jobs.filter(j => j.status === status);

  const handleDragStart = ({ active }) => setActiveJob(jobs.find(j => j._id === active.id));

  const handleDragEnd = ({ active, over }) => {
    setActiveJob(null);
    if (!over) return;
    const isColumn = COLUMNS.some(c => c.id === over.id);
    const newStatus = isColumn ? over.id : jobs.find(j => j._id === over.id)?.status;
    if (!newStatus) return;
    const job = jobs.find(j => j._id === active.id);
    if (!job || job.status === newStatus) return;
    updateJob.mutate({ id: active.id, updates: { status: newStatus } });
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCorners}
      onDragStart={handleDragStart} onDragEnd={handleDragEnd}>


      {/* <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 12,
      }}>
        {COLUMNS.map(col => {
          const colJobs = getJobsByStatus(col.id);
          return (
            <DroppableColumn key={col.id} column={col} count={colJobs.length}>
              <SortableContext items={colJobs.map(j => j._id)} strategy={verticalListSortingStrategy}>
                {colJobs.map(job => <SortableJobCard key={job._id} job={job} />)}
              </SortableContext>
            </DroppableColumn>
          );
        })}
      </div>
       */}



      <div className="mobile-kanban">
         {COLUMNS.map(col => {
          const colJobs = getJobsByStatus(col.id);
          return (
            <DroppableColumn key={col.id} column={col} count={colJobs.length}>
              <SortableContext items={colJobs.map(j => j._id)} strategy={verticalListSortingStrategy}>
                {colJobs.map(job => <SortableJobCard key={job._id} job={job} />)}
              </SortableContext>
            </DroppableColumn>
          );
        })}

      </div>






      <DragOverlay>
        {activeJob && (
          <div style={{
            background: 'var(--surface2)',
            border: '1px solid var(--accent)',
            // boxShadow: '0 8px 32px rgba(79,124,255,0.2)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            borderRadius: 9, padding: '12px 13px',
            transform: 'rotate(2deg)', cursor: 'grabbing',
          }}>
            <p style={{ fontWeight: 600, fontSize: 13, color: '#e8eaf0' }}>{activeJob.company}</p>
            <p style={{ fontSize: 12, color: 'var(--subtle)' }}>{activeJob.role}</p>
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
}