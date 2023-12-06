import*as o from"https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";import{GLTFLoader as S}from"https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";import{OrbitControls as z}from"https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";const C=[{title:"<h2 class='xDeux'>Vanille X Noix de Macadamia & baies sauvage</h2>",text:' <p>Plongez dans un <span class="red">univers de douceur </span> et de <span class="red">croquant</span> avec notre <span class="red">irrésistible</span> glace saveur vanille aux noix de macadamia.</p> <p>Chaque cuillère est une <span class="red">symphonie de saveurs</span>, une danse délicate entre la vanille <span class="red">veloutée</span> et le <span class="red">croquant</span> des noix de macadamia.</p>'},{title:"<h2 class='xDeux'>Chocolat X Oréo</h2>",text:"<p>La douceur de l'oréo mélanger à la puissance du chocolat, <span class='red'> un caractère</span> intense et fondant en bouche.</p>"},{title:"<h2 class='xDeux'>Café X Spéculoss et vanille</h2>",text:"<p>Une bonne glace au <span class='red'>spéculoss<span> sur un nid de vanille acompagné de café.</p>"}];document.querySelector(".items");const a=document.querySelectorAll(".item"),E=document.querySelectorAll(".button");let N=document.querySelector(".xDeux"),R=document.querySelector(".margin>.description"),n=0,g=4,x=1;for(let e=0;e<E.length;e++)E[e].addEventListener("click",()=>e==0?B():H());const B=()=>n>0?v(n-1):v(a.length-1),H=()=>n<4?v(n+1):v(0),v=e=>{n=e,g=n-1,x=n+1;for(let t=0;t<a.length;t++)a[t].classList.remove("active"),a[t].classList.remove("prev"),a[t].classList.remove("next");x==5&&(x=0),g==-1&&(g=4),a[n].classList.add("active"),a[g].classList.add("prev"),a[x].classList.add("next"),N.innerHTML=C[n].title,R.innerHTML=C[n].text},L=new o.Scene;let b=document.getElementById("scene-container-deux");const w=new o.WebGLRenderer({alpha:!0});w.setSize(700,400);b?b.appendChild(w.domElement):console.error("Le conteneur de scène n'a pas été trouvé.");const m=new o.PerspectiveCamera(100,4/3,.1,1e3);m.position.z=450;m.position.y=200;const q=new o.PointLight(16777215,5);q.position.set(-1200,1700,100);L.add(q);const T=new o.PointLight(16777215,4);T.position.set(1e3,-1500,-100);L.add(T);const X=new S;let c;X.load("3D/Lime/scene.gltf",e=>{c=e.scene,c.position.set(-100,0,0),c.scale.set(1e3,1e3,1e3),L.add(c)},void 0,e=>{console.error("Erreur de chargement du modèle 3D",e)});const P=new z(m,w.domElement);P.enableDamping=!0;P.dampingFactor=.05;function M(){requestAnimationFrame(M),c&&(c.rotation.y+=.005),w.render(L,m)}let k=.1,i=80;window.addEventListener("wheel",e=>{i+=e.deltaY*k,i<.1&&(i=.1),i>3&&(i=200),m.position.z=5*i});M();const l=new o.Scene;let y=document.getElementById("scene-container");const D=new o.WebGLRenderer({alpha:!0});D.setSize(700,400);y?y.appendChild(D.domElement):console.error("Le conteneur de scène n'a pas été trouvé.");const p=new o.PerspectiveCamera(100,4/3,.1,1e3);p.position.z=450;p.position.y=200;const j=new o.PointLight(16777215,2);j.position.set(-1200,1700,100);l.add(j);const F=new o.PointLight(16777215,2);F.position.set(1e3,-1500,-100);l.add(F);const f=new S;let r,h,u,s,G;f.load("3D/CoupeGlace/GlasseTest3.gltf",e=>{r=e.scene,r.position.set(-100,0,0),r.scale.set(100,100,100),r.traverse(t=>{t instanceof o.Mesh&&(console.log("Nom de l'objet:",t.name),console.log("Position de l'objet:",t.position),console.log("Rotation de l'objet:",t.rotation),console.log("Mise à l'échelle de l'objet:",t.scale),t.material instanceof o.MeshStandardMaterial&&(t.material.vertexColors=!1,t.material.transparent=!0,t.material.opacity=.8))}),l.add(r)},void 0,e=>{console.error("Erreur de chargement du modèle 3D",e)});new o.TextureLoader().load("3D/CoupeGlace/test.avif");f.load("3D/strawberry/scene.gltf",e=>{h=e.scene,h.position.set(300,0,0),h.scale.set(100,100,100),l.add(h)},void 0,e=>{console.error("Erreur de chargement du modèle 3D",e)});f.load("3D/CoupeGlace/GlasseTest4.gltf",e=>{u=e.scene,u.position.set(-100,0,0),u.scale.set(100,100,100),console.log(u),l.add(u)},void 0,e=>{console.error("Erreur de chargement du modèle 3D",e)});f.load("3D/CoupeGlace/GlasseTest5.gltf",e=>{s=e.scene,s.position.set(-100,0,0),s.scale.set(100,100,100),console.log(s),l.add(s)},void 0,e=>{console.error("Erreur de chargement du modèle 3D",e)});const I=new o.TextureLoader().load("3D/CoupeGlace/textures/food_0010_color_1k.jpg");f.load("3D/CoupeGlace/Boulle_de_glace/Glasse.gltf",e=>{s=e.scene,s.position.set(-150,0,0),s.scale.set(100,100,100),s.material.map=I,console.log(G),l.add(G)},void 0,e=>{console.error("Erreur de chargement du modèle 3D",e)});const _=new z(p,D.domElement);_.enableDamping=!0;_.dampingFactor=.05;function A(){requestAnimationFrame(A),r&&(r.rotation.y+=.005),D.render(l,p)}let O=.1,d=80;window.addEventListener("wheel",e=>{d+=e.deltaY*O,d<.1&&(d=.1),d>3&&(d=200),p.position.z=5*d});A();
