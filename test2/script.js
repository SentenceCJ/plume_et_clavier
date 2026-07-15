
const header=document.querySelector('[data-header]');
const toggle=document.querySelector('#menu-toggle');
window.addEventListener('scroll',()=>{header?.classList.toggle('scrolled',window.scrollY>20)});
document.querySelectorAll('.nav a').forEach(link=>{link.addEventListener('click',()=>{if(toggle)toggle.checked=false;});});
const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
