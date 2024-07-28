const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page5Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");

  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });

  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

function menuAnimation() {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var navImg = document.querySelector("nav img");
  var flag = 0;

  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navImg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      navImg.style.opacity = 1;
      flag = 0;
    }
  });
}

function loaderAnimation() {
  var loader = document.querySelector("#loader");

  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}

swiperAnimation();
page5Animation();
menuAnimation();
loaderAnimation();
document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('#heading-page4 h1');
    const paragraph = document.getElementById('paragraph-page4');
    const rightImage = document.getElementById('right-image-page4');

    const content = {
        'Design': {
            text: 'Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings',
            img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        'Project': {
            text: 'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.',
            img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        'Execution': {
            text: 'We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.',
            img: 'https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    };

    headings.forEach(heading => {
        heading.addEventListener('click', function() {
            // Remove active class from all headings
            headings.forEach(h => h.classList.remove('active'));

            // Add active class to the clicked heading
            heading.classList.add('active');

            // Update paragraph and right image
            const key = heading.getAttribute('data-heading');
            paragraph.textContent = content[key].text;
            rightImage.src = content[key].img;
        });
    });

    // Set default active heading
    const defaultHeading = document.querySelector('#heading-page4 h1[data-heading="Design"]');
    defaultHeading.classList.add('active');
    paragraph.textContent = content['Design'].text;
    rightImage.src = content['Design'].img;
    rightImage.style.display = 'block';
}); 