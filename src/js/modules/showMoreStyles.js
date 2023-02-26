import {serverGetData} from "../services/requests";

function showMoreStyles(){

    function showMoreStyleServer(btnSelector,wrapperSelector){

        const   btn = document.querySelector(btnSelector),
                wrapper = document.querySelector(wrapperSelector);
        

        btn.addEventListener('click', function(){
            serverGetData('http://localhost:3000/styles')
                .then(res => createCard(res))
                .catch(function(res){
                    let mistake = document.createElement('div');
                    mistake.textContent = 'Что-то пошло не так...';
                    mistake.style.cssText = `
                        display: block;
                        color: red;
                        text-align: center;
                        font-size: 30px;
                        margin: 30px 0;
                    `;
                    wrapper.appendChild(mistake);
                });
             this.remove();   
        });

        
        function createCard(response){
            response.forEach(({src,title,link}) =>{

                let card = document.createElement('div');
                card.classList.add('animated', 'fadeInUp','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

                card.innerHTML = `
                    <div class=styles-block>
                        <img src=${src} alt>
                        <h4>${title}</h4>
                        <a href="${link}">Подробнее</a>
                    </div>
                `;
                wrapper.appendChild(card);
            });
            
            
        }
    }
    showMoreStyleServer('.button-styles','#styles .row');
}

export default showMoreStyles;