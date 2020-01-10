
// Data - AOS animations initiation
AOS.init();

// --- GLOBAL VARIABLES & DOM SELECTION --- //
const enterButton = document.querySelector('.enterButton');
const images = document.querySelectorAll('img');
const heroPage = document.querySelector('.hero');
const aboutPage = document.querySelector('.about');
const seeMoreButton = document.querySelector('.see-more');
const pageTwo = document.querySelectorAll('.pageTwo');
const pageThree = document.querySelectorAll('.pageThree');
const links = document.querySelectorAll('.lightbox');
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.navMobile');
const mobileLinks = document.querySelectorAll('.mobileLink');

// --- HELPER FUNCTIONS --- //
const revealPics  = () => {
    if(pageTwo[0].classList.contains('hide') === false) {
        for(let i = 0; i < pageThree.length; i++) {
            pageThree[i].classList.remove('hide');
        }
    } else  {
        for(let i = 0; i < pageTwo.length; i++) {
            pageTwo[i].classList.remove('hide');
        }
    }
}
const expandMenu = () => {
    // take the mobile nav menu and reveal it on a hamburger click
    navMobile.classList.toggle('revealNavMobile');
}
const showMobileMenu = () => {
    // loop through each mobile menu link, remove the "display none" and 
    for (let i = 0; i< mobileLinks.length; i++) {
        mobileLinks[i].classList.toggle('display-none');
    }
}

// --- IMAGE GALLERY --- //
//create an array of image sources hosted from Google Photos
let imageList = [
    //first default page of images
    'photos/branon-photos-half-dome.jpg',
    'photos/branon-photos-milky-way.jpg',
    'photos/branon-photos-palms.jpg',
    'photos/branon-photos-hawaii.jpg',
    'photos/branon-photos-dunes.jpg',
    'photos/branon-photos-pismo.jpg',
    'photos/branon-photos-bird.jpg',
    'photos/branon-photos-yacht-club.jpg',
    'photos/branon-photos-hendrys.jpg',
    //second page of images
    'photos/branon-photos-rainbow-falls.jpg',
    'photos/branon-photos-courthouse.jpg',
    'photos/branon-photos-adventure.jpg',
    'photos/branon-photos-birds-flying.jpg',
    'photos/branon-photos-shoreline.jpg',
    'photos/branon-photos-plane.jpg',
    'photos/branon-photos-koolina.jpg',
    'photos/branon-photos-portrait.jpg',
    'photos/branon-photos-knapps.jpg',
    //third page of images
    'photos/branon-photos-cover.jpg',
    'photos/branon-photos-carpinteria.jpg',
    'photos/branon-photos-nojoqui.jpg',
    'photos/branon-photos-volcano.jpg',
    'photos/branon-photos-jellybowl.jpg',
    'photos/branon-photos-dunes2.jpg',
    'photos/branon-photos-surfer.jpg',
    'photos/branon-photos-carp2.jpg',
    'photos/branon-photos-pier.jpg'
]
//select the images from index.html, store them in a nodelist (see GlOBAL VARIABLES)
//loop through the images and assign an item from the array as the 'src' attribute for each one
for(let i = 0; i < images.length; i++) {
    let source = imageList[i].toString();
    images[i].setAttribute('src', source);
    links[i].setAttribute('href', source);
}

// Hamburger Menu Click
const hamburgerClick = (x) => {
    x.classList.toggle('change');
}

// See More Functionality
seeMoreButton.addEventListener('click', function() {
    revealPics();
});

// Expand Mobile Menu
hamburger.addEventListener('click', function() {
    expandMenu();
    setTimeout(showMobileMenu, 250);
});
