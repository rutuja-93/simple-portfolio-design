
function toggleTheme() {
    const htmlEl = document.documentElement;
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    htmlEl.classList.toggle("dark");
    sun.classList.toggle("hide");
    moon.classList.toggle("hide");
}


  const tabs = document.querySelectorAll('.skill-Info a');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });



