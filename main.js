const toggleBtn = document.getElementsByClassName('toggle-button1')[0]
const navbarLinks = document.getElementsByClassName('navbar-link1')[0]
const body = document.getElementsByClassName('home')[0]
const main = document.getElementsByClassName('container')[0]

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    toggleBtn.classList.toggle('active')
    body.classList.toggle('active')
    main.classList.toggle('active')
})

//feature toggle btn
const featureBtn = document.getElementsByClassName('dropdown1')[0]
const featureContent = document.getElementsByClassName('dropdown-content1')[0]

featureBtn.addEventListener('click', () => {
    featureContent.classList.toggle('active')
})

//company toggle btn
const companyBtn = document.getElementsByClassName('dropdown1')[1]
const companyContent = document.getElementsByClassName('dropdown-content1')[1]

companyBtn.addEventListener('click', () => {
    companyContent.classList.toggle('active')
})