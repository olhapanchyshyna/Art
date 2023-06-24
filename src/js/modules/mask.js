function mask(selector){

    let inputs = document.querySelectorAll(selector);

    function setCursorPosition(pos, elem){
        elem.focus();
        
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    function createMask(event) {
        // Чтобы с переду маски (кода страны) пользователь не смог вводить данные
        inputs.forEach(input => {
            input.addEventListener('keydown', (e) => {
                if (e.target.selectionStart < 2 && e.keyCode !== 8 && e.keyCode !== 46) {
                    e.preventDefault();
                }
            });
        });
        let matrix = '+38 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''), 
            val = this.value.replace(/\D/g, ''); 

        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function(a){
            // return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            if (/[_\d]/.test(a) && i < val.length) {
                return val.charAt(i++); 
            } else if (i >= val.length) {
                return '';
            } else {
                return a;
            } 
            
        });

        if (event.type === 'blur') {
            if (this.value.length == 3) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });


}
export default mask;