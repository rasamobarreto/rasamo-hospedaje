document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// FAQ accordion
document.querySelectorAll('.faq .q').forEach(q=>{
  q.addEventListener('click',()=>{
    const a=q.nextElementSibling;
    const open=a.style.display==='block';
    document.querySelectorAll('.faq .a').forEach(x=>x.style.display='none');
    a.style.display=open?'none':'block';
  });
});

// Contact form -> email
const form=document.getElementById('contact-form');
if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(form).entries());
    const body=encodeURIComponent(`Hola RASAMO,%0D%0A`+
      `Nombre: ${data.nombre}%0D%0A`+
      `Correo: ${data.email}%0D%0A`+
      `Servicio: ${data.servicio}%0D%0A`+
      `Mensaje:%0D%0A${data.mensaje}`);
    window.location.href=`mailto:contacto@rasamo.com?subject=Consulta%20web%20RASAMO&body=${body}`;
  });
}