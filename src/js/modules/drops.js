
function drops(){
    const elements = document.querySelectorAll('[name="upload"]');

    ['dragenter','drop', 'dragleave', 'dragover'].forEach(eventName =>{
        elements.forEach(item => {
            item.addEventListener(eventName,preventFun);
        });
    });

    function preventFun(e){
        e.preventDefault();
        e.stopPropagation();
    }

    function addStyle(){
        ['dragenter','dragover'].forEach(eventName =>{
            elements.forEach(item => {
                item.addEventListener(eventName,() =>{
                    item.closest('.file_upload').style.border = '5px solid #FBC02D';
                });
            });
        });
    }
    addStyle();

    function hideStyle(){
        ['drop','dragleave'].forEach(eventName =>{
            elements.forEach(item => {
                item.addEventListener(eventName,() =>{
                    item.closest('.file_upload').style.border = 'none'; 
                });
            });
        });
    }
    hideStyle();

    elements.forEach(item => {
        item.addEventListener('drop', (e) => {
            item.files = e.dataTransfer.files;
            let dots;
            const arr = item.files[0].name.split('.');

            arr[0].length > 9 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0,9) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

}
export default drops;