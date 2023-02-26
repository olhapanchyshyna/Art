function filter(){
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnLovers = menu.querySelector('.lovers'),
          btnChef = menu.querySelector('.chef'),
          btnGirl = menu.querySelector('.girl'),
          btnGuy = menu.querySelector('.guy'),
          btnGrandmother = menu.querySelector('.grandmother'),
          btnGranddad = menu.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          imgAll = wrapper.querySelectorAll('.all'),
          imgGirl = wrapper.querySelectorAll('.girl'),
          imgLovers = wrapper.querySelectorAll('.lovers'),
          imgChef = wrapper.querySelectorAll('.chef'),
          imgGuy = wrapper.querySelectorAll('.guy'),
          no = document.querySelectorAll('.portfolio-no');
    

        function hideActiveClass(){
            items.forEach(item => {
                item.classList.remove('active');
            });
        }
        hideActiveClass();
        
        items[0].classList.add('active');


    function typeFilter(imgType){
        function removeStyle(selector){
            selector.forEach(item => {
                item.style.display = 'none';
                item.classList.remove('animated', 'fadeIn');
            });
        }
        removeStyle(imgAll);
        removeStyle(no);

        if(imgType){
            function addStyle(selector){
                selector.forEach(item => {
                    item.style.display = 'block';
                    item.classList.add('animated', 'fadeIn');
                });
            }
            addStyle(imgType);
        }else{
            addStyle(no);
        }
    }
    
    btnAll.addEventListener('click', () => {
        typeFilter(imgAll);
    });

    function showImg(btnSelector,imgSelector){
        btnSelector.addEventListener('click', () =>{
            hideActiveClass();
            btnSelector.classList.add('active');
            typeFilter(imgSelector);
        });
        wrapper.style.cssText = `justify-content: center;`;
    }
    showImg(btnAll,imgAll);
    showImg(btnLovers,imgLovers);
    showImg(btnChef,imgChef);
    showImg(btnGirl,imgGirl);
    showImg(btnGuy,imgGuy);
    showImg(btnGrandmother,no);
    showImg(btnGranddad,no);


    
}
export default filter;