
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


document.querySelectorAll("#contact a").forEach(link => {
  link.addEventListener("click", () => {
    console.log("Opening link: " + link.href);
  });
});

// Typing effect in header (Optional)
const text = "MCA Student | Aspiring Software Developer";
let i = 0;
function typingEffect() {
  if (i < text.length) {
    document.querySelector("header p").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 100);
  }
}
document.querySelector("header p").innerHTML = "";
typingEffect();
