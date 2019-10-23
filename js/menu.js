const navSlide = () => {
    const burguer = document.querySelector('.burguer');

    //Event click burguer
    burguer.addEventListener('click', () => {

        //Burguer animation
        burguer.classList.toggle('toggle');
    });

}

navSlide();