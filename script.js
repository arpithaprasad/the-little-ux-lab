document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});


function changeColor() {
  const colors = ["#7AE8FF", "#C7CEFF", "#FF6EC7", "#9D7BFF", "#FFD76E", "#FF8FA3", "#70FFA0", "#3EC5FF", "#D16BA5", "#845EC2" ];
  document.body.style.background = `linear-gradient(180deg, ${colors[Math.floor(Math.random()*colors.length)]} 0%, #ffffff 100%)`;
}

function changeText(button) {
  if (button.dataset.clicked === "true") {
    button.textContent = "Try me";
    button.dataset.clicked = "false";
  } else {
    button.textContent = "Clicked!";
    button.dataset.clicked = "true";
  }
}

function toggleReveal() {
  const hidden = document.getElementById("hidden-reveal");
  hidden.classList.toggle("show");
  hidden.classList.toggle("hidden");
}

function validateInput(event) {
  event.preventDefault();
  const input = document.getElementById('nameInput');
  const errorMsg = document.querySelector('.error-msg');

  if (input.value.trim() === '') {
    input.style.borderColor = '#ff4b4b';
    input.style.boxShadow = '0 0 8px rgba(255,75,75,0.5)';
    errorMsg.classList.remove('hidden');
    setTimeout(() => {
      input.style.borderColor = '#C7CEFF';
      input.style.boxShadow = 'none';
      errorMsg.classList.add('hidden');
    }, 2000);
  } else {
    input.style.borderColor = '#7AE8FF';
    input.style.boxShadow = '0 0 8px rgba(122,232,255,0.6)';
    errorMsg.classList.add('hidden');
    setTimeout(() => {
      input.style.borderColor = '#C7CEFF';
      input.style.boxShadow = 'none';
      input.value = '';
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", function(){
  const last = document.getElementById("last-updated");
  if (last) {
    const d = new Date();
    last.textContent = "Last updated on " + d.toDateString();
  }
});

(function(){
  let enabled = localStorage.getItem('cursorGlowEnabled') !== 'false';
  const glow = document.createElement('div');
  glow.id = 'cursor-glow';
  document.body.appendChild(glow);
  Object.assign(glow.style, {
    position: 'fixed',
    left: '0px',
    top: '0px',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.12s ease, height 0.12s ease, background 0.12s ease, opacity 0.12s',
    zIndex: 9999,
    boxShadow: '0 0 24px 8px rgba(122,232,255,0.18)',
    background: 'radial-gradient(circle at center, rgba(122,232,255,0.95), rgba(122,232,255,0.35) 40%, rgba(122,232,255,0.08) 70%)',
    opacity: 0.95,
    display: enabled ? 'block' : 'none'
  });

  document.addEventListener('mousemove', function(e){
    if (!enabled) return;
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });

  document.addEventListener('mousedown', function(){
    if (!enabled) return;
    glow.style.width = '34px';
    glow.style.height = '34px';
    glow.style.opacity = 1;
  });

  document.addEventListener('mouseup', function(){
    if (!enabled) return;
    glow.style.width = '18px';
    glow.style.height = '18px';
    glow.style.opacity = 0.95;
  });

  const toggles = [document.getElementById('toggle-cursor'), document.getElementById('toggle-cursor-2')];
  toggles.forEach(btn => {
    if (!btn) return;

    btn.textContent = enabled ? 'Cursor Glow: On' : 'Cursor Glow: Off';

    btn.addEventListener('click', function(){
      enabled = !enabled;
      glow.style.display = enabled ? 'block' : 'none';
      btn.textContent = enabled ? 'Cursor Glow: On' : 'Cursor Glow: Off';
      
      localStorage.setItem('cursorGlowEnabled', enabled);
    });
  });
})();

