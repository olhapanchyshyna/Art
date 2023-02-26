import { serverPostData } from "../services/requests";

function forms(state){
    function postData(){
        const   form = document.querySelectorAll('form'),
                inputs = document.querySelectorAll('input'),
                upload = document.querySelectorAll('[name="upload"]'),
                window = document.querySelectorAll('[data-modal]');

        const message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так...',
            spiner: 'assets/img/spinner.gif',
            ok: 'assets/img/ok.png',
            fail: 'assets/img/ok.png',
        };

        let path = {
            design: '/assets/design.php',
            quation: '/assets/server.php'
        };

        
        upload.forEach(item => {
            item.addEventListener('input', (e) => {
                let dots;
                const arr = item.files[0].name.split('.');

                arr[0].length > 9 ? dots = "..." : dots = '.';
                const name = arr[0].substring(0,9) + dots + arr[1];
                item.previousElementSibling.textContent = name;
            });
        });

        function inputReset(){
            inputs.forEach(input => {
                input.value = '';
            });
            upload.forEach(item => {
                item.previousElementSibling.textContent = 'Файл не выбран';
            });
            document.querySelector('textarea').value = '';
            document.querySelector('#size').value = '';
            document.querySelector('#material').value = '';
            document.querySelector('#options').value = '0';
            document.querySelector('.promocode').textContent = 'Введите ваш промокод';
            document.querySelector('.calc-price').textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        };


        form.forEach(item => {
            item.addEventListener('submit', (e)=> {
                e.preventDefault();

                const statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                item.parentNode.appendChild(statusMessage);
                item.classList.add('animated','fadeOutUp');

                setTimeout(() =>{
                    item.style.display = 'none';
                },400);

                const statusImg = document.createElement('img');
                statusImg.setAttribute('src', message.spiner);
                statusImg.classList.add('animated','fadeInUp');
                statusImg.style.display = 'flex';
                statusImg.style.margin = 'auto';
                statusMessage.appendChild(statusImg);

    
                const statusText = document.createElement('div');
                statusText.textContent = message.loading;
                statusText.style.textAlign = 'center';
                statusMessage.appendChild(statusText);


                const formData = new FormData(item);

                if(item.getAttribute('data-calc') === "end") {
                    for (let key in state) {
                        formData.append(key, state[key]);
                    }
                }

                let api;

                if(item.closest('.popup-design') || item.classList.contains('calc-form')){
                    api = path.design;
                    console.log('design');
                }else{
                    api = path.quation;
                    console.log('quation');

                }
               

                serverPostData(api,formData)
                    .then((data) => {
                        console.log(data);
                        statusText.textContent = message.success;
                        statusImg.setAttribute('src', message.ok);
                        Object.keys(state).forEach(key => delete state[key]);
                    })
                    .catch(() => {
                        statusText.textContent = message.failure;
                        statusImg.setAttribute('src', message.fail);
                    })
                    .finally(() => {
                        setTimeout(() => {
                            inputReset();
                            statusMessage.remove();
                            item.style.display = 'block';
                            item.classList.remove('fadeOutUp');
                            item.classList.add('fadeInUp');
                            window.forEach(item => {
                                item.style.display = 'none';
                            });
                            document.body.style.overflow = '';
                        }, 3000);
                    });
            });
        });
    }
    postData();
}

export default forms;