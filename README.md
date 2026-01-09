<h1 align="center">MY WEB PORTFOLIO</h1>
<p>Welcome to my web portfolio. Here you'll find my projects, skills, and ways to contact me.
This repository contains the source code for my personal website.</p>

<h2 align="left">🛠️ Technologies used</h2>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=git,md,webstorm,codepen,githubactions,npmvite,svelte,html,css,typescript,threejs&theme=dark&perline=6" />
  </a>
</p>
<!-- FEATURES -->
<h2 id="features">🚀 Features</h2>
<h3>Objectives:</h3>
<ul>
    <li>Adaptative design</li>
    <li>GSAP, Lenis and CSS animations</li>
    <li>Horizontal Scroll Section</li>
</ul>
<!-- ARCHITECTURE -->
<h2 id="architecture">🚧 Architecture</h2>

```bash
src/
 ├─ components/
 │  ├─ layout/ 
 │  │   ├─ Background.svelte
 │  │   ├─ Footer.svelte
 │  │   ├─ MenuBar.svelte 
 │  │   └─ MenuOverlay.svelte 
 │  │
 │  ├─ sections/  
 │  │   ├─ Core.svelte
 │  │   ├─ Index.svelte
 │  │   ├─ Insights.svelte
 │  │   ├─ Stack.svelte
 │  │   └─ Work.svelte
 │  │
 │  ├─ shared/
 │  │   ├─ ProjectCard.svelte
 │  │   ├─ ProjectModal.svelte
 │  │   └─ BlogCard.svelte
 │  ├─ system/
 │  │   ├─ AudioPlayer.svelte
 │  │   ├─ LangSwitcher.svelte
 │  │   └─ Loader.svelte
 │  │
 │  └─ ui/ 
 │      ├─ MenuToggle.svelte
 │      ├─ SmartButton.svelte
 │      └─ SmartLink.svelte
 │
 ├─ lib/
 │  ├─ assets/
 │  │   ├─ audio/
 │  │   ├─ icon/
 │  │   ├─ img/
 │  │   └─ models/
 │  │
 │  ├─ data/
 │  │   ├─ posts.json
 │  │   └─ projects.json
 │  │
 │  ├─ locales/
 │  │   ├─ en.json
 │  │   └─ es.json
 │  │
 │  ├─ stores/
 │  │   ├─ bg-config.ts
 │  │   ├─ i18n.ts
 │  │   ├─ menu.ts
 │  │   ├─ scroll.ts
 │  │   └─ time.ts
 │  │
 │  ├─ three/
 │  │   ├─ shaders/
 │  │   └─ background.ts         
 │  │ 
 │  ├─ utils/
 │  │   ├─ i18n-helpers.ts
 │  │   └─ lenis-wrapper.ts
 │  │
 │  └─ index.ts
 │
 ├─ routes/
 │  ├─ +error.svelte
 │  ├─ +layout.svelte
 │  ├─ +layout.ts
 │  └─ +page.svelte
 │
 ├─ styles/ 
 │  ├─ animations.css
 │  ├─ global.css
 │  └─ variables.css
 │
 ├─ app.d.ts
 └─ app.html

```