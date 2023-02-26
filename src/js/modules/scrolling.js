function scrolling(){
    function traseScroll(upSelector){
        const up = document.querySelector(upSelector);

        window.addEventListener('scroll', () =>{
            if(document.documentElement.scrollTop > 1650){
                up.classList.add('animated', 'fadeIn');
                up.classList.remove('fadeOut');
            }else{
                up.classList.add('fadeOut');
                up.classList.remove('fadeIn');
            }
        });
 

        // Scrolling with raf
       
        let links = document.querySelectorAll('[href^="#"]'), //  берем все ссылкы которые начинаются с href пример: <a href="#up" class="pageup">
        speed = 0.3;  // скорость анимации
       
        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                let widthTop = document.documentElement.scrollTop, // устанавливает количество пикселей, 
                // на которое была прокручена страница в вертикальном направлении, 
                // от верхней границы окна браузера до верхней границы видимой области документа.
                    hash = this.hash, // ссылка на которой происходит действие
                    toBlock = document.querySelector(hash).getBoundingClientRect().top,// получаем верхние координаты нашего элемента
                    start = null; // стартовая позиция
                    

                requestAnimationFrame(step);
                // мы используем метод requestAnimationFrame() для плавного скроллинга 
                // страницы к целевому элементу. Мы определяем функцию step(), 
                // которая вызывается каждый раз, когда браузер готов отрисовать новый кадр.

                function step(time) {
                    if (start === null) {// первый ли раз запускается анимация
                        start = time;
                    }

                    let progress = time - start; // используется для вычисления времени, 
                    // прошедшего с момента установки переменной start.
                        // r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));
                    let r;
                    if (toBlock < 0) {
                        r = Math.max(widthTop - progress/speed, widthTop + toBlock);
                    } else {
                        r = Math.min(widthTop + progress/speed, widthTop + toBlock);
                    }
                     // количество px которые нужно пролистнуть в течении анимации

                       
                    document.documentElement.scrollTo(0, r);// координаты куда мы будем листать. 1-аргумент по x 2-аргумент по y

                    if (r != widthTop + toBlock) {
                        requestAnimationFrame(step);
                    } else {
                        location.hash = hash;
                    }
                    // останавливает анимацию
                }
            });
        });


        // Pure js scrolling

    //     const   element = document.documentElement,
    //             body = document.body;

    //     const calcScroll = () => {
    //         up.addEventListener('click', function(event) {
    //             let scrollTop = Math.round(body.scrollTop || element.scrollTop);

   
    //             if (this.hash !== '') {
    //                 event.preventDefault();

    //                 let hashElement = document.querySelector(this.hash),
    //                     hashElementTop = 0;
            
                     
    //                 while (hashElement.offsetParent){ // Когда offsetParent равен null, 
    //                     // это означает, что мы достигли корневого элемента страницы 
    //                     // (обычно это элемент html), и цикл завершается. 
    //                     // ближайшим (в иерархии) позиционированным элементом-предком.
    //                     hashElementTop += Math.round(hashElement.offsetTop);  
    //                     // используется для получения расстояния 
    //                     // от верхней границы элемента hashElement до верхней границы его родительского элемента. 
    //                     hashElement = hashElement.offsetParent; // используется для обновления 
    //                     // переменной hashElement на ссылку на родительский элемент текущего элемента.
    //                 }
    //                 smoothScroll(scrollTop, hashElementTop, this.hash);
    //             }
    //         });
    //     };

    //     const smoothScroll = (from, to, hash) => {
    //         let timeInterval = 1,
    //             prevScrollTop,
    //             speed;

    //         if (to > from) {
    //             speed = 30;
    //         } else {
    //             speed = -30;
    //         }
            
    //         let move = setInterval(function() {
    //             let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //             console.log(prevScrollTop);
    //             console.log(scrollTop);
    //             console.log(scrollTop >= to);
    //             console.log(scrollTop <= to);

    //             if (prevScrollTop === scrollTop || (to > from && scrollTop >= to) || (to < from && scrollTop <= to)){
    //                 clearInterval(move);
    //                 history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
    //             } else {
    //                 body.scrollTop += speed;
    //                 element.scrollTop += speed;
    //                 prevScrollTop = scrollTop;
    //             }
    //         }, timeInterval);
    //     };

    //     calcScroll();
    }
    traseScroll('.pageup');
}
export default scrolling;