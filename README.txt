Welkom op mijn portfolio website! Hier vindt u mijn recente werk op het gebied van web development en branding.
Als developer ben ik gespecialiseerd in het bouwen van responsieve en gebruiksvriendelijke websites die er geweldig uitzien op alle apparaten.

Mijn branding werk omvat logo-ontwerp, visuele identiteit en merkstrategie.
Ik ben gepassioneerd over het creëren van merken die authentiek, onderscheidend en effectief zijn.

Bekijk mijn portfolio om mijn werk te bekijken en meer over mij te weten te komen.
Als u geïnteresseerd bent in samenwerking, neem dan gerust contact met mij op. Ik kijk er naar uit om van u te horen!

// navigation animation
const navigationSlide = () => {
const burger = document.querySelector(".Burger-menu");
const nav = document.querySelector(".Nav-links");
const navLinks = document.querySelectorAll(".Nav-links li");

    //toggle nav
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      //links animation
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `Nav-links-fade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });
    });

};

navigationSlide();