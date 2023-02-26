function calc(state){
    function calcCount(sizeSelector,materialSelector,optionSelector,promocodeSelector,totalSelector){
        const   size = document.querySelector(sizeSelector),
                material = document.querySelector(materialSelector),
                option = document.querySelector(optionSelector),
                promocode = document.querySelector(promocodeSelector),
                total = document.querySelector(totalSelector);
        let sum = 0;

        function calcTotal(){  
            sum = Math.round((+size.value) * (+material.value) + (+option.value));

            if(size.value == "" || material.value == ""){
                total.textContent = 'Выбирите размер и материал картины';
            }else if(promocode.value === 'IWANTPOPART'){
                total.textContent = Math.round(sum * 0.7);
                state.prise = Math.round(sum * 0.7); 
            }else{
                total.textContent = sum;
                state.prise = sum; 
            }
        }
        size.addEventListener('change', calcTotal);
        material.addEventListener('change', calcTotal);
        option.addEventListener('change', calcTotal);
        promocode.addEventListener('input', calcTotal);


        function windowListener(selector,action,name){
            selector.addEventListener(action, () => {
                    switch(selector.nodeName){
                        case 'INPUT' :
                            state[name] = selector.value;  
                            break;
    
                        case 'SELECT' :
                            state[name] = selector.value;
                            break;
                    }
                    console.log(state);
                   
            });
        }
        windowListener(size,'change','size');
        windowListener(material,'change','material');
        windowListener(option,'change','option');
        windowListener(promocode,'input','promocode');
    };

    calcCount('#size', '#material', '#options', '.promocode', '.calc-price');



}
export default calc;