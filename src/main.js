// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay')
const mobileMenuClose = document.getElementById('mobile-menu-close')

function openMobileMenu() {
  mobileMenu.classList.remove('translate-x-full')
  mobileMenuOverlay.classList.remove('hidden')
  document.body.classList.add('overflow-hidden')
}

function closeMobileMenu() {
  mobileMenu.classList.add('translate-x-full')
  mobileMenuOverlay.classList.add('hidden')
  document.body.classList.remove('overflow-hidden')
}

if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu)
if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu)
if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobileMenu)

document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', closeMobileMenu)
})

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'))
    this.classList.add('active')

    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'))
    document.getElementById('tab-' + this.dataset.tab).classList.add('active')
  })
})

// Demo form
const demoForm = document.getElementById('demo-form')
const formContainer = document.getElementById('demo-form-container')
const formSuccess = document.getElementById('demo-form-success')

if (demoForm) {
  demoForm.addEventListener('submit', function (e) {
    e.preventDefault()
    formContainer.classList.add('hidden')
    formSuccess.classList.remove('hidden')
    formSuccess.classList.add('flex')

    setTimeout(() => {
      formContainer.classList.remove('hidden')
      formSuccess.classList.add('hidden')
      formSuccess.classList.remove('flex')
      demoForm.reset()
    }, 4000)
  })
}

// Navbar scroll shadow
const nav = document.querySelector('nav')
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    nav.classList.add('shadow-md')
  } else {
    nav.classList.remove('shadow-md')
  }
})
