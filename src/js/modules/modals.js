
const modal = () =>{

    let btnPressed = false;

    function bindModal(modalSelector,btnSelector,closeSelector, destroy = false){
        const   modal = document.querySelector(modalSelector),
                btns = document.querySelectorAll(btnSelector),
                close = document.querySelector(closeSelector),
                windows = document.querySelectorAll('[data-modal]'),
                scroll = scrollCalc(),
                gift = document.querySelector('.fixed-gift');
    

        function openModal(modalItem){
            modalItem.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            hideGift(gift);
            btnPressed = true;
        }

        function closeModal(modalItem){
            windows.forEach(item => {
                item.style.display = 'none';
            });
            modalItem.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        }

        btns.forEach(btn  =>{
            btn.addEventListener('click', () => {
                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                });
                openModal(modal);
                
            });   
              
        });
        

        close.addEventListener('click', () =>{
            closeModal(modal);
        });
      
       
        modal.addEventListener('click',(e) => {
            if(modal === e.target){
                closeModal(modal);
            }
        });

        function scrollCalc(){
            const div = document.createElement('div');

            div.style.cssText = 
            `   width: 50px;
                height: 50px;
                overflow-y: scroll;
                visibility: hidden;
            `;

            document.body.appendChild(div);

            const scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();

            return scrollWidth;
        }


        function hideGift(item){
            if(destroy){
                item.remove();
            }
        } 
        
        function showModalByScroll(selector,btnRemove){
            window.addEventListener('scroll', () => {
                if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1 && !btnPressed){
                    openModal(document.querySelector(selector));
                    btnRemove.remove();
                    window.removeEventListener('scroll', showModalByScroll);
                }
            });
            
        }

        function showModalByTime(modal,time){
            setTimeout(function(){
                let display,
                scroll = scrollCalc();
    
                document.querySelectorAll('[data-modal]').forEach(item =>{
                    if(getComputedStyle(item).display !== 'none'){
                        display = 'block';
                    }
                });
                
                if(!display){
                    document.querySelector(modal).style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scroll}px`;
                }
            },time) ;
        }
        

    
        showModalByTime('.popup-consultation', 60000);
        showModalByScroll('.popup-gift', gift);
    }
    bindModal('.popup-design','.button-design', '.popup-design .popup-close');
    bindModal('.popup-consultation','.button-consultation','.popup-consultation .popup-close');
    bindModal('.popup-gift', '.fixed-gift','.popup-gift .popup-close', true );

};

export default modal;