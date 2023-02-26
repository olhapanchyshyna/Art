function slider(){
    function showSlider(sliderSelector,dir,prevSelector,nextSelector){
        const   slider = document.querySelectorAll(sliderSelector);
        let paused = false;

        let slideIndex = 1;

        function showItemSlider(n){
            if(n > slider.length){
                slideIndex = 1;
            }

            if(n < 1){
                slideIndex = slider.length;
            }

            slider.forEach(item => {
                item.classList.add('animated');
                item.style.display = 'none';
            });
            slider[slideIndex - 1].style.display = 'block';
        }
        showItemSlider(slideIndex);

        function plusSlide(n){
            showItemSlider(slideIndex = slideIndex + n);
        }

        try{
            const   prev = document.querySelector(prevSelector),
                    next = document.querySelector(nextSelector);

            prev.addEventListener('click', () => {
                plusSlide(-1);
                slider[slideIndex - 1].classList.remove('slideInLeft');
                slider[slideIndex - 1].classList.add('slideInRight');
            });

            next.addEventListener('click', () => {
                plusSlide(1);
                slider[slideIndex - 1].classList.remove('slideInRight');
                slider[slideIndex - 1].classList.add('slideInLeft');
            });

        }catch(e){}

        function activateAnimation(){
            if(dir === 'vertical'){
                paused =  setInterval(function(){
                     plusSlide(1);
                     slider[slideIndex - 1].classList.add('slideInDown');
                 }, 3000);
                 
             }else{
                paused = setInterval(function(){
                     plusSlide(1);
                     slider[slideIndex - 1].classList.remove('slideInRight');
                     slider[slideIndex - 1].classList.add('slideInLeft');
                 }, 3000);
                 
             }
        }
        activateAnimation();

        slider[0].parentNode.addEventListener('mouseenter', () => {
            clearInterval(paused);
        });
        slider[0].parentNode.addEventListener('mouseleave', () => {
            activateAnimation();
        });
        


    }
    showSlider('.main-slider-item', 'vertical');
    showSlider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
}

export default slider;