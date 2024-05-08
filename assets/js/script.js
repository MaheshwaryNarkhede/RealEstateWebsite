function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

/* Swiper popular */
var swiperPopular = new Swiper(".popular__container", {
	spaceBetween: 32,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Value accordion */
const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((item) => {
	const accordionHeader = item.querySelector('.value__accordion-header')

	accordionHeader.addEventListener('click', () => {
		const openItem = document.querySelector('.accordion-open')

		toggleItem(item)

		if(openItem && openItem !== item) {
			toggleItem(openItem)
		}
	})
})
const toggleItem = (item) => {
	const accordionContent = item.querySelector('.value__accordion-content')

	if(item.classList.contains('accordion-open')){
		accordionContent.removeAttribute('style')
		item.classList.remove('accordion-open')
	}else{
		accordionContent.style.height = accordionContent.scrollHeight + 'px'
		item.classList.add('accordion-open')
	}
}

/* scroll sections active link */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* Scroll Up */

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Dark Theme */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* Scroll reveal animation */
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: '2500',
	delay: '400',
	// reset: 'true'
})

sr.reveal(`.home__title, .popular__container, .subscribe__container, .footer__container`)
sr.reveal(`.home__description, .footer__info`, {delay: 500})
sr.reveal(`.home__search`, {delay: 600})
sr.reveal(`.home__value`, {delay: 700})
sr.reveal(`.home__images`, {delay: 800, origin: 'bottom'})
sr.reveal(`.logos__img`, {interval: 300})
sr.reveal(`.value__images, .contact__content`, {origin: 'left'})
sr.reveal(`.value__content, .contact__images`, {origin: 'right'})
function searchProperties() {
    // Get the location input value
    var location = document.getElementById('locationInput').value;

    // Simulate fetching nearby properties based on location
    var nearbyProperties = fetchNearbyProperties(location);

    // Clear previous search results
    document.getElementById('buyContainer').innerHTML = '<h2>Buy Properties</h2>';
    document.getElementById('rentContainer').innerHTML = '<h2>Rent Properties</h2>';

    // Display nearby properties in their respective containers
    nearbyProperties.forEach(property => {
        var propertyElement = document.createElement('div');
        propertyElement.textContent = property.name + ' - ' + property.type;

        if (property.type === 'buy') {
            document.getElementById('buyContainer').appendChild(propertyElement);
        } else if (property.type === 'rent') {
            document.getElementById('rentContainer').appendChild(propertyElement);
        }
    });
}

function fetchNearbyProperties(location) {
    // This function would typically make an API call to fetch nearby properties based on location
    // For demonstration, returning hardcoded data
    return [
        { name: 'Property A', type: 'buy' },
        { name: 'Property B', type: 'rent' },
        { name: 'Property C', type: 'buy' },
        { name: 'Property D', type: 'rent' }
        // Add more properties as needed
    ];
}
