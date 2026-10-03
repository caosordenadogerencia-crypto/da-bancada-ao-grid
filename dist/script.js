'use strict';
const progress = document.querySelector('.reading-progress span');
let pending = false;
function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%';pending=false;}
addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(updateProgress);}},{passive:true});
addEventListener('resize',updateProgress);updateProgress();
const pageDialog=document.getElementById('page-dialog');
const videoDialog=document.getElementById('video-dialog');
const video=document.getElementById('cipro-video');
document.querySelectorAll('.page-preview').forEach(button=>button.addEventListener('click',()=>{document.getElementById('page-image').src=button.dataset.page;document.getElementById('page-image').alt=button.dataset.title;document.getElementById('page-title').textContent=button.dataset.title;pageDialog.showModal();}));
document.getElementById('open-video').addEventListener('click',()=>{videoDialog.showModal();video.play().catch(()=>{});});
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});dialog.addEventListener('close',()=>{if(dialog===videoDialog)video.pause();});});
const motionButton=document.querySelector('.motion-toggle');
motionButton.addEventListener('click',()=>{const paused=document.documentElement.classList.toggle('paused');motionButton.setAttribute('aria-pressed',String(paused));motionButton.textContent=paused?'Retomar animações':'Pausar animações';});
// Configure the approved checkout URL when the sale opens.
const CHECKOUT_URL='';
if(CHECKOUT_URL){const button=document.querySelector('.checkout');button.disabled=false;button.textContent='Quero meu ebook e os bônus';document.querySelector('.checkout-note').textContent='Consulte pagamento e acesso no checkout.';button.addEventListener('click',()=>location.assign(CHECKOUT_URL));}
const motionCards=document.querySelectorAll('.pain-cards article,.audience-grid article,.curriculum details,.chapter-card,.offer-card,.page-preview,.bonus-card');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
motionCards.forEach(card=>{
  card.classList.add('motion-card');
  card.addEventListener('pointermove',event=>{
    if(event.pointerType!=='mouse'||reducedMotion.matches||document.documentElement.classList.contains('paused'))return;
    const rect=card.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width;const y=(event.clientY-rect.top)/rect.height;
    card.style.setProperty('--pointer-x',x*100+'%');card.style.setProperty('--pointer-y',y*100+'%');
    card.style.setProperty('--tilt-x',(0.5-y)*3+'deg');card.style.setProperty('--tilt-y',(x-0.5)*3+'deg');
  });
  card.addEventListener('pointerleave',()=>{card.style.setProperty('--tilt-x','0deg');card.style.setProperty('--tilt-y','0deg');});
});
if('IntersectionObserver' in window&&!reducedMotion.matches){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('card-enter');observer.unobserve(entry.target);}}),{threshold:0.15});
  motionCards.forEach(card=>observer.observe(card));
}
