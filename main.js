function openPopup() {
  const popup = document.getElementById("popupForm");
  if (popup) {
    popup.style.display = "flex";
  }
}

function closePopup() {
  const popup = document.getElementById("popupForm");
  if (popup) {
    popup.style.display = "none";
  }
}

function openThankYouPopup() {
  const popup = document.getElementById("thankYouPopup");
  if (popup) {
    popup.style.display = "flex";
  }
}

function closeThankYouPopup() {
  const popup = document.getElementById("thankYouPopup");
  if (popup) {
    popup.style.display = "none";
  }
}

function initFaq() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".faq-icon");
    if (!question) return;

    const syncIcon = () => {
      if (!icon) return;
      const isActive = item.classList.contains("active");
      icon.textContent = isActive ? "-" : "+";
      question.setAttribute("aria-expanded", String(isActive));
    };

    syncIcon();

    question.addEventListener("click", () => {
      item.classList.toggle("active");
      syncIcon();
    });
  });
}

async function loadComponent(targetId, filePath) {
  const target = document.getElementById(targetId);
  if (!target) return false;

  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}: ${response.status}`);
    }

    target.innerHTML = await response.text();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function initMobileNav() {
  const nav = document.querySelector(".main-nav");
  if (!nav) return;

  const menuToggle = nav.querySelector(".menu-toggle");
  const navLinks = nav.querySelector(".nav-links");
  if (!menuToggle || !navLinks) return;

  const closeMenu = () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    nav.querySelectorAll(".dropdown").forEach((dropdown) => {
      dropdown.classList.remove("open");
    });
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll(".dropdown > a").forEach((dropdownTrigger) => {
    dropdownTrigger.addEventListener("click", (event) => {
      if (window.innerWidth > 800) return;
      event.preventDefault();

      const dropdown = dropdownTrigger.closest(".dropdown");
      if (!dropdown) return;

      const isOpen = dropdown.classList.toggle("open");
      nav.querySelectorAll(".dropdown").forEach((item) => {
        if (item !== dropdown) {
          item.classList.remove("open");
        }
      });

      if (!isOpen) {
        dropdown.classList.remove("open");
      }
    });
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      const isDropdownTrigger =
        link.parentElement &&
        link.parentElement.classList.contains("dropdown") &&
        link.nextElementSibling &&
        link.nextElementSibling.classList.contains("dropdown-content");

      if (window.innerWidth <= 800 && !isDropdownTrigger) {
        closeMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      closeMenu();
    }
  });
}

function initDemoForm() {
  const form = document.getElementById("demoSessionForm");
  if (!form) return;

  form.addEventListener("submit", function () {
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";
    }
  
  });
}
document.addEventListener("DOMContentLoaded", () => {
  initFaq();
  initDemoForm();
  loadComponent("header", "components/navbar.html").then((loaded) => {
    if (loaded) {
      initMobileNav();
    }
  });
  loadComponent("footer", "components/footer.html");
});


document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("demoSessionForm");
    const thankYouPopup = document.getElementById("thankYouPopup");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const submitBtn = form.querySelector("button[type='submit']");
        submitBtn.disabled = true;
        submitBtn.innerText = "Submitting...";

        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData
        })
        .then(() => {

            // Reset form
            form.reset();

            // Show Thank You popup
            if (thankYouPopup) {
                thankYouPopup.style.display = "flex";
            }

        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = "Submit";
        });

    });

});
