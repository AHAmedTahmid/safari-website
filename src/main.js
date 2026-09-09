import { createIcons, Menu, X } from 'lucide'

// Initialize Lucide icons
createIcons({
  attrs: {
    class: ['w-5', 'h-5'],
  },
  nameAttr: 'data-lucide',
})

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

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', openMobileMenu)
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', closeMobileMenu)
}

if (mobileMenuOverlay) {
  mobileMenuOverlay.addEventListener('click', closeMobileMenu)
}

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', closeMobileMenu)
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

// Form handling
const demoForm = document.getElementById('demo-form')
const formMsg = document.getElementById('form-msg')
const submitBtn = document.getElementById('submit-btn')

if (demoForm) {
  demoForm.addEventListener('submit', function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(demoForm)
    const data = Object.fromEntries(formData.entries())

    // Show loading state
    submitBtn.disabled = true
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending...
    `

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', data)

      // Show success message
      formMsg.classList.remove('hidden')
      submitBtn.disabled = false
      submitBtn.innerHTML = 'Schedule My Consultation'
      demoForm.reset()

      // Hide success message after 5 seconds
      setTimeout(() => {
        formMsg.classList.add('hidden')
      }, 5000)
    }, 1500)
  })
}

// Navbar scroll effect
const header = document.querySelector('header')
let lastScroll = 0

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 50) {
    header.classList.add('shadow-md')
  } else {
    header.classList.remove('shadow-md')
  }

  lastScroll = currentScroll
})
