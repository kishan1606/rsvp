document.addEventListener('DOMContentLoaded', () => {
  const lamps   = document.querySelectorAll('.anim-lamp');
  const flowers2 = document.querySelectorAll('.anim-f2');
  const bottomFlowers = document.querySelectorAll('.anim-fb');

  // Lamps + top flowers fire together on load
  setTimeout(() => {
    lamps.forEach(el => el.classList.add('go'));
    flowers2.forEach(el => el.classList.add('go'));
  }, 250);

  // Bottom flowers stagger after lamps
  setTimeout(() => {
    bottomFlowers.forEach(el => el.classList.add('go'));
  }, 500);
});
