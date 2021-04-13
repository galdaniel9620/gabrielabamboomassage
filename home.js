AOS.init();


const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.navLinks')
    const navLinks = document.querySelectorAll('.navLinks li a')

    burger.addEventListener('click' , () => {
        nav.classList.toggle('nav-active')

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        })

        burger.classList.toggle('toggle')
    })


}

navSlide()


const coll = document.getElementsByClassName("collapsible")
const line = document.querySelector("#line2")

let i

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active")
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none"
    } else {
      content.style.display = "block"
    }
  })
}

