var offcanvasElement = document.getElementById('nav-mainNavbar')
offcanvasElement.addEventListener('show.bs.offcanvas', (event) => {
  document.getElementById('menuIcon').style.display = 'none'
  document.getElementById('closeIcon').style.display = 'block'
})
offcanvasElement.addEventListener('hide.bs.offcanvas', (event) => {
  document.getElementById('menuIcon').style.display = 'block'
  document.getElementById('closeIcon').style.display = 'none'
})
var dropdownElement = document.getElementById('link-dropdown')
dropdownElement.addEventListener('show.bs.dropdown', (event) => {
  document.getElementById('d-menuIcon').style.display = 'none'
  document.getElementById('d-closeIcon').style.display = 'block'
})
dropdownElement.addEventListener('hide.bs.dropdown', (event) => {
  document.getElementById('d-menuIcon').style.display = 'block'
  document.getElementById('d-closeIcon').style.display = 'none'
})