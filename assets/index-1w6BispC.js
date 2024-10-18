(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const l=document.querySelector("#app");l.innerHTML=`
<div id="inicio" style="height:100%; width:100%; opacity:0; position:absolute; z-index:10;">
  <button id="servicios" type="button" style="z-index:40; cursor:pointer; font-size:30px; border-radius:15px; position:absolute; left:25px; top:25px; height:75px; padding:0 15px; background-color:hsl(35,90%,50%);">
    Servicios
  </button>
  <button id="contacto" type="button" style="z-index:40; cursor:pointer; font-size:30px; border-radius:15px; position:absolute; right:25px; top:25px; height:75px; padding:0 15px; background-color:hsl(150,65%,50%);">
    Contáctenos
  </button>
  <button id="inicio-btn" type="button" style="z-index:40; cursor:pointer; border:hsl(210,75%,30%) solid 5px; background-color:hsl(210,90%,50%); padding:7px; position:absolute; left:0; right:0; margin:auto; bottom:25px; border-radius:50%; height:75px; width:75px;">
    <img src="./assets/icons/home_24dp_FFFFFF_FILL1_wght500_GRAD-25_opsz24.svg" alt="home"></img>
  </button>
  <div id="carrucel" class="carrucel--1" style="transition:.5s; position:absolute; height:100%; width:300%; display:flex;">
    <div style="height:100%; width:100%; display:grid; place-content:center;">
      <div style="display:flex;">
        <div id="intro" style="margin:0 20px 0 0; width:500px; padding:30px; border-radius:30px; background-color:hsl(0,0%,95%);">
          <h1 style="margin:20px 0 30px; font-size:40px;">¡Arreglos a domicilio por toda España!</h1>
          <p style="font-size: 25px;">Nuestros trabajadores de NetCo arreglarán todo lo que pida, desde ventanas rotas y fugas de agua, hasta cortos circuitos y daños en paredes, de forma <span style="color:hsl(0,90%,45%);">eficaz</span>, <span style="color:hsl(45,90%,45%);">económica</span>, <span style="color:hsl(190,90%,45%);">rápida</span> y <span style="color:hsl(160,90%,45%);">segura</span>.</p>
        </div>

        <div style="margin:0 0 0 20px; height:350px; width:500px; display:grid; place-content:center;">
          <h2>NetCo Logo</h2>
        </div>
      </div>
    </div>

    <div style="height:100%; width:100%; display:flex; justify-content:space-around;">
      <div class="tarjeta--1" style=" padding:20px; width:300px; height:300px; border-radius:20px; background-color:hsl(0,0%,95%);">
        <p>Texto de ejemplo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dolorum saepe totam exercitationem ipsum obcaecati, iusto magni accusamus eligendi error cupiditate quod tempore possimus est labore doloribus deserunt ipsam! Fugiat!</p>
      </div>

      <div class="tarjeta--2" style=" padding:20px; width:300px; height:300px; border-radius:20px; background-color:hsl(0,0%,95%);">
        <p>Texto de ejemplo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dolorum saepe totam exercitationem ipsum obcaecati, iusto magni accusamus eligendi error cupiditate quod tempore possimus est labore doloribus deserunt ipsam! Fugiat!</p>
      </div>

      <div class="tarjeta--1" style=" padding:20px; width:300px; height:300px; border-radius:20px; background-color:hsl(0,0%,95%);">
        <p>Texto de ejemplo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dolorum saepe totam exercitationem ipsum obcaecati, iusto magni accusamus eligendi error cupiditate quod tempore possimus est labore doloribus deserunt ipsam! Fugiat!</p>
      </div>
    </div>
    
    <div style="height:100%; width:100%; display:grid; place-content:center;">
      <div style="background-color:hsl(0,0%,95%); border-radius:35px; width:700px; height:350px; padding:20px">
        <h2 style="font-size:35px;">Datos de contacto:</h2>
        <p style="font-size:25px">Número telefónico: +1 123 456 7890</p>
        <p style="font-size:25px">Correo electrónico: example@example.com</p>
        <p style="font-size:25px">WhatsApp: +1 098 765 4321</p>
      </div>
    </div>
  </div>
</div>

<div id="bienvenida" style="background-color:hsl(200,100%,80%); opacity:0; transition:1s; position:absolute; z-index:20; height:100%; width:100%; display:grid; place-content:center;">
  <h2 style="font-size:100px;">(NetCo Logo)</h2>
</div>

<div id="advertencia" style="position:absolute; z-index:30; transition:.5s; background-color:hsla(0,0%,29%,.5); height:100%; width:100%; display:grid; place-content:center;">
  <div style="height:450px; width:250px; background-color:hsl(0,0%,90%); border-radius:25px; padding: 20px;">
    <h2 style="width:100%; color:hsl(0,100%,35%); font-size:35px; text-align:center;">Advertencia</h2>
    <p style="margin:20px 0; font-size:20px;">El siguiente proyecto es una demostración poco detallada del proyecto final, esto debido a la falta de presupuesto. Los logos, íconos y textos no se han implementado todavía.</p>
    <p style="margin:20px 0; font-size:20px;">Muchas gracias por su comprensión.</p>
    <div style="width:100%; height:60px; display:grid; place-content:center;">
      <button type="button" id="close-btn" style="cursor:pointer; background-color:hsla(0,0%,0%,0); height:40px; width:40px;">
        <img src="./assets/icons/close_24dp_CC0000_FILL0_wght700_GRAD200_opsz24.svg" alt="Close"></img>
      </button>
    </div>
  </div>
</div>
`;const p=document.getElementById("close-btn");let a=!1;const r=document.getElementById("bienvenida"),d=document.getElementById("carrucel");p.onclick=()=>{if(!a){a=!0;const o=document.getElementById("advertencia");o.style.opacity=0,setTimeout(()=>{o.remove(),r.style.opacity=1,setTimeout(()=>{r.style.opacity=0,document.getElementById("inicio").style.opacity=1,setTimeout(()=>{r.remove()},1e3)},2e3)},500)}};const u=document.getElementById("servicios");u.onclick=()=>{d.className="carrucel--2"};const g=document.getElementById("inicio-btn");g.onclick=()=>{d.className="carrucel--1"};const m=document.getElementById("contacto");m.onclick=()=>{d.className="carrucel--3"};
