/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navCLose = document.getElementById('nav-close')

// Menu show 
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

// Menu hidden/
if(navCLose){
    navCLose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
    const navMenu= document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader=()=>{
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById('contact-form'),
      contactMessage=document.getElementById('contact-message')

const sendEmail =(e)=>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_op2of6p','template_dzdwlsm','#contact-form','LGet-cnG9d8l2be2w')
    .then(()=>{
        // Show sent message
        contactMessage.textContent='Message sent successfully ✅'
        // Remove message after five seconds
        setTimeout(()=>{
            contactMessage.textContent=''
        },5000)
        //clear input fielda
        contactForm.reset()
    },()=>{
        // Show error message
        contactMessage.textContent='Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit',sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUpElement = document.getElementById('scroll-up');
    if (window.scrollY >= 350) {
        scrollUpElement.classList.add('show-scroll');
    } else {
        scrollUpElement.classList.remove('show-scroll');
    }
};

// Add the scroll event listener to the window object
window.addEventListener('scroll', scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay: 400,
})
sr.reveal('.home__data, .experience, .skills, .contact__container')
sr.reveal('.home__img',{delay:600})
sr.reveal('.home__scroll',{delay:600})
sr.reveal('.work__card, .services__card',{interval:100})
sr.reveal('.about__content',{origin:'right'})
sr.reveal('.about__img',{origin:'left'})
/*=============== SCROLL REVEAL ANIMATION ===============*/
