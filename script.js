document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',(e)=>{
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    el && el.scrollIntoView({behavior:'smooth', block:'start'});
  })
});

const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const body = encodeURIComponent(
      `Hola RASAMO,%0D%0A` +
      `Nombre: ${data.nombre}%0D%0A` +
      `Correo: ${data.email}%0D%0A` +
      `Servicio: ${data.servicio}%0D%0A` +
      `Mensaje:%0D%0A${data.mensaje}`
    );
    window.location.href = `mailto:contacto@rasamo.com?subject=Consulta%20web%20RASAMO&body=${body}`;
  });
}