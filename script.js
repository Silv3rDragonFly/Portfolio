/*----------------------------------------------------- Fond de Bulle ---------------------------------------------------------------------*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let canvasrect = canvas.getBoundingClientRect();

const ParticleList = [];
let nbParticle = Math.random() * 5+2;

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

window.addEventListener('resize',()=>{
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    window.canvasrect = canvas.getBoundingClientRect();
})

const mouse = {
    x: undefined,
    y: undefined
}

canvas.addEventListener('click', (e)=>{
    mouse.x = e.x;
    mouse.y = e.y;

    window.canvasrect = canvas.getBoundingClientRect();

    for (let i=0 ; i<nbParticle; i++){
        ParticleList.push(new Particles())
        nbParticle = Math.random() * 5+2;
    }
})

class Particles{
    constructor(){
            this.x = mouse.x - window.canvasrect.left;
            this.y = mouse.y - window.canvasrect.top;
            this.size = Math.random()*20 + 10;
            this.speedX = Math.random()*4 - 1.5;
            this.speedY = Math.random()*4 - 1.5;
    }
    update(){
        this.x +=this.speedX;
        this.y +=this.speedY;

        if(this.x + this.speedX > canvas.width - this.size || this.x + this.speedX < this.size){
            this.speedX = -this.speedX;
        }
        if(this.y + this.speedY > canvas.height - this.size || this.y + this.speedY < this.size){
            this.speedY = -this.speedY;
        }
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = "#45A29E";
        ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}

function handle(){
    for (let i=0; i < ParticleList.length; i++){
        ParticleList[i].draw();
        ParticleList[i].update();
    }
}

function animation(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    handle();
    requestAnimationFrame(animation);
}
animation();

/*----------------------------------------------------- Loader ---------------------------------------------------------------------*/

const loader = document.querySelector('.loader');

window.addEventListener('load', ()=>{
    loader.classList.add('fondu-out');
})

/*----------------------------------------------------- Cursor ---------------------------------------------------------------------*/

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) =>{
    cursor.setAttribute('style','top:'+(e.pageY-20)+'px;left:'+(e.pageX-20)+'px')
})

document.addEventListener('click', ()=>{
    cursor.classList.add('expand');
    setTimeout(()=>{
        cursor.classList.remove("expand");
    },500);
})

/*----------------------------------------------------- Smooth Scroll ---------------------------------------------------------------------*/

const navList = [...document.querySelectorAll("nav a")]
const section = [...document.querySelectorAll("section")]

const navbar = document.getElementById('nav');

let sectionpos;

sectionpos = section.map(section => (section.offsetTop - navbar.offsetHeight))

window.addEventListener("resize", ()=>{
    sectionpos = section.map(section => (section.offsetTop))
})

navList.forEach(link => link.addEventListener("click", addScrollSmooth))

function addScrollSmooth(e){
    const linkIndex = navList.indexOf(e.target);
    window.scrollTo({
        top: sectionpos[linkIndex],
        behavior: "smooth"
    })
}

/*----------------------------------------------------- NavBar ---------------------------------------------------------------------*/

const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.navContainer');
const nav = document.getElementById('nav');
const ToggleNav = () => {
    hamburger.classList.toggle('open')
    const ariaToggle = hamburger.getAttribute
    ("aria-expanded") === "true" ? "false" : "true";
    hamburger.setAttribute("aria-expanded",ariaToggle)
    navLinksContainer.classList.toggle('open')
    nav.classList.toggle('open_nav')
}

hamburger.addEventListener('click',ToggleNav)

new ResizeObserver(entries =>{
    if(entries[0].contentRect.width <= 900){
        navLinksContainer.style.transition = "transform 0.3s ease-out";
    } else {
        navLinksContainer.style.transition = "none";
    }
}).observe(document.body)

// function nav_change(id)
// {
//     if (navLinksContainer.classList.toggle('open') === true)
//     {
//         document.getElementById(id).style.borderRadius = '0 12.5% 0 0';
//     }
//     else
//     {
//         document.getElementById(id).style.borderRadius = '0 12.5% 12.5% 0';
//     }
// }

// function nav_change(id)
// {
//     if (document.getElementById(id).style.borderRadius = '0 12.5% 12.5% 0')
//     {
//         document.getElementById(id).style.borderRadius = '0 12.5% 0 0';
//     }
// }

// function nav_reset(id)
// {
//     if (document.getElementById(id).style.borderRadius = '0 12.5% 0 0')
//     {
//         document.getElementById(id).style.borderRadius = '0 12.5% 12.5% 0';
//     }
// }

/*----------------------------------------------------- Affichage/Masquage des divs informations ---------------------------------------------------------------------*/

function masquer_div(id)
{
  document.getElementById(id).style.display = 'none';
}

function afficher_div(id)
{
    document.getElementById(id).style.display = 'block';
}

function color_change(id)
{
    if (document.getElementById(id).style.background = '#45A29E')
    {
        document.getElementById(id).style.background = '#C5C6C7';
    }
}

function color_reset(id)
{
    if (document.getElementById(id).style.background = '#C5C6C7')
    {
        document.getElementById(id).style.background = '#45A29E';
    }
}

        // ParticleList.forEach(Particles => {
        //     var circle1 = {x: this.x , y:this.y,radius:this.size}
        //     var circle2 = {x: this.x , y:this.y,radius:this.size}
        //     let dx = circle2.x - circle1.x;
        //     let dy = circle2.y - circle1.y;
        //     let distance = Math.sqrt(dx*dx + dy*dy);
        //     let sommeRadius = circle1.radius + circle2.radius;
        //     if (distance <= sommeRadius){
        //         this.speedX = -this.speedX;
        //         this.speedY = -this.speedY;
        //     }
        // })


        // canvas.addEventListener('load', (e)=>{
//     depard.x = e.x;
//     depard.y = e.y;

//     for (let i=0 ; i<nbParticle; i++){
//         ParticleList.push(new Particles())
//         nbParticle = Math.random()*5+2;
//     }
// })


// const depard = {
//     x : undefined,
//     y : undefined
// }

// canvas.addEventListener('load', ()=>{
//     depard.x = Math.random()*(250-160)+160;
//     depard.y = Math.random()*(250-120)+120;

//     for (let i=0 ; i<nbParticle; i++){
//         ParticleList.push(new Particles())
//         nbParticle = Math.random() * 5+2;
//     }
// })