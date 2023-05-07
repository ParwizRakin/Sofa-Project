// navbar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 190){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg');
    }
});

// image collage

const collageImage = [...document.querySelectorAll('.collage-img')]

collageImage.map((item, i) => {
    item.addEventListener('mouseover', () => {
        collageImage.map((image, index) => {
            if(index != i){
                image.style.filter = `blur(10px)`;
                item.style = null;
            }
        })
    })

    item.addEventListener('mouseleave', () => {
        collageImage.map((image, index) => {
            image.style = null;
        })
    })
})

