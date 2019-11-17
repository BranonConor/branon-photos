
// Data - AOS animations initiation
AOS.init();

// Animate the navbar menu so users can see which menu was last clicked
// const menuLink = document.querySelectorAll('.menuLink');

// for (let i = 0; i < menuLink.length; i++) {
//     menuLink[i].addEventListener('click', function() {
//         this.classList.toggle('clicked');
//         console.log(this.classList);
//     });
// }

let imageList = [
    'https://scontent-lax3-1.cdninstagram.com/vp/1ff45d8a6c06e38393751bcbe7e093fa/5E69F851/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/70701035_555630798576699_6385255122130191345_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=103',
    'https://scontent-lax3-1.cdninstagram.com/vp/264010d3b5d77b23ca6455c3bcc4f27d/5E67671E/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/66656619_326578588219647_4639579424586739259_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=103',
    'https://scontent-lax3-1.cdninstagram.com/vp/298894dbd38363051df53f4c149d8e0d/5E88D82A/t51.2885-15/e35/c0.180.1440.1440a/s320x320/66041689_599713150436609_8365130232934839635_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=105',
    'https://scontent-lax3-1.cdninstagram.com/vp/2fc9542ac8e27484591f39ec5c082404/5E4B7E32/t51.2885-15/sh0.08/e35/c0.159.1366.1366a/s640x640/65300441_2497533140327229_6295130964606239314_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=109',
    'https://scontent-lax3-1.cdninstagram.com/vp/349e79ec771990abb033643c14be05b4/5E583549/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/66403125_624191224745390_2040112852467416197_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=102',
    'https://scontent-lax3-1.cdninstagram.com/vp/34c8cd51c32d8f03523a1a4dbfa665ac/5E8940C3/t51.2885-15/sh0.08/e35/c0.144.1440.1440a/s640x640/70843665_2525241704208804_5727340351201375439_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=100',
    'https://scontent-lax3-1.cdninstagram.com/vp/37911bfb67029ec50f6f57ec514923cc/5E6E63FB/t51.2885-15/e35/c0.135.1080.1080a/s320x320/51679583_548103839016999_1096550540787744078_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=103',
    'https://scontent-lax3-1.cdninstagram.com/vp/43025328298c6bc1b0c248dafdcd1e66/5E85FEFE/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/64493603_444815699411456_2935883039763988127_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=108',
    'https://scontent-lax3-1.cdninstagram.com/vp/4b0e0c4df0cf040b4181644adc377ed3/5E69B57C/t51.2885-15/e35/c0.179.1440.1440a/s320x320/58411086_2292557834334444_2056950577487655475_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=100'
]
// Select the images, store them in a nodelist
const images = document.querySelectorAll('img');
// Add 
for(let i = 0; i < images.length; i++) {
    let source = imageList[i].toString();
    images[i].setAttribute('src', source);
}
