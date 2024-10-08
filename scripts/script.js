let activeSection = null;

function showSection(sectionId) {
  const section = document.getElementById(sectionId);
  
  if (section === activeSection) {
    section.style.display = (section.style.display === 'none') ? 'block' : 'none';
    activeSection = (section.style.display === 'none') ? null : section;
  } else {
    if (activeSection) {
      activeSection.style.display = 'none';
    }
    section.style.display = 'block';
    activeSection = section;
  }
}