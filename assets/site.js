// missing image/video → show dashed placeholder
document.querySelectorAll('.slot').forEach(s=>{
  const m=s.querySelector('img,video'); if(!m) return;
  const miss=()=>s.classList.add('missing');
  m.addEventListener('error',miss,true);
  if(m.tagName==='IMG' && m.complete && !m.naturalWidth) miss();
  if(m.tagName==='VIDEO' && m.error) miss();
});

// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
