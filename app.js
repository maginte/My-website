const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const cursor=document.querySelector('.cursor');
if(cursor&&!reduced){window.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});document.querySelectorAll('a,.btn,.magnetic').forEach(el=>{el.addEventListener('mouseenter',()=>{cursor.style.width='34px';cursor.style.height='34px'});el.addEventListener('mouseleave',()=>{cursor.style.width='18px';cursor.style.height='18px'})})}
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const menu=document.querySelector('.menuBtn'),links=document.querySelector('.links');if(menu&&links){menu.addEventListener('click',()=>{links.classList.toggle('open')})}
const magnetic=document.querySelectorAll('.magnetic');if(!reduced) magnetic.forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;el.style.transform=`translate(${x*.12}px,${y*.12}px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
const current=document.body.dataset.page;document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav===current));
