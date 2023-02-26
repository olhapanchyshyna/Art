function accordion(){
    function showAccordion(headerSelector,itemSelector){
        const headers = document.querySelectorAll(headerSelector);
        const items = document.querySelectorAll(itemSelector);


        function hideText(){
            items.forEach(item => {
                item.style.display = 'none';
                item.classList.remove('animated', 'fadeInDown');
            });
        }
        hideText();


        function showText(i){
            items[i].style.display = 'block';
            items[i].classList.add('animated', 'fadeInDown', 'active-style');
        }

        headers.forEach((header, i) => {
            header.addEventListener('click', () => {
                headers.forEach(header=>{
                    header.classList.remove('active-style');
                });
                header.classList.add('active-style');
                hideText();
                showText(i);
            });
        });   
    }
    showAccordion('.accordion-heading', '.accordion-block');
   
}
export default accordion;