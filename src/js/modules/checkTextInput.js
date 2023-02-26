function checkTextInput(selector){
    const inputs = document.querySelectorAll(selector);
       
       
        inputs.forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key.match(/[^а-яёА-Яё 0-9]/ig)) {
                    e.preventDefault();
                }
            });
            input.addEventListener('input',(e) => {
                // Получаем введенный текст
                const inputText = e.target.value;
                // Удаляем все символы, кроме латинских букв
                const filteredText = inputText.replace(/[^а-яёА-Яё]/ig, '');
                // Обновляем значение поля ввода
                e.target.value = filteredText;
            });
        });

}

export default checkTextInput;