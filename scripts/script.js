let activeSection = null;
let secActiveSection = null;

const defaultBtn = () => {
  const buttonsCareer = document
    .getElementById("career_section")
    .getElementsByTagName("button");
  const buttonsMain = document
    .getElementById("button_section")
    .getElementsByTagName("button");
  const buttonsProject = document
    .getElementById("projects_section")
    .getElementsByTagName("button");

  const buttons = [...buttonsCareer, ...buttonsMain, ...buttonsProject];

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shadow_active");
  }
};

function showSection(sectionId, button) {
  const section = document.getElementById(sectionId);

  defaultBtn();
  if (secActiveSection) {
    secActiveSection.style.display = "none";
    secActiveSection = null;
  }
  if (section === activeSection) {
    section.style.display = section.style.display === "none" ? "" : "none";
    activeSection = section.style.display === "none" ? null : section;
    button.classList.remove("shadow_active");
  } else {
    if (activeSection) {
      activeSection.style.display = "none";
    }
    section.style.display = "";
    activeSection = section;
    button.classList.add("shadow_active");
  }
}

function showSecSection(sectionId, button) {
  const section = document.getElementById(sectionId);
  const careerSection = document.getElementById("career_section");
  const projectsSection = document.getElementById("projects_section");
  const buttonsCareer = careerSection.getElementsByTagName("button");
  const buttonsProject = projectsSection.getElementsByTagName("button");

  if (section === secActiveSection) {
    section.style.display = section.style.display === "none" ? "" : "none";
    secActiveSection = section.style.display === "none" ? null : section;
    button.classList.remove("shadow_active");
  } else {
    if (secActiveSection) {
      secActiveSection.style.display = "none";
    }
    section.style.display = "";
    secActiveSection = section;

    if (activeSection === projectsSection) {
      for (let i = 0; i < buttonsProject.length; i++) {
        buttonsProject[i].classList.remove("shadow_active");
      }
    }
    else if (activeSection === careerSection) {
      for (let i = 0; i < buttonsCareer.length; i++) {
        buttonsCareer[i].classList.remove("shadow_active");
      }
    }

    button.classList.add("shadow_active");
  }
}
