function picture(blocksSelector){
    const blocks = document.querySelectorAll(blocksSelector);


    function showPicture(blockItem){
        const img = blockItem.querySelector('img');
        let srcItem = img.src.slice(0,-4) + '-1.png';
        img.setAttribute('src', srcItem);
        blockItem.classList.add('animated','fadeIn');
    }

    function hidePicture(blockItem){
        const img = blockItem.querySelector('img');
        let srcItem = img.src.slice(0,-6) + '.png';
        img.setAttribute('src', srcItem);
        blockItem.classList.remove('animated','fadeIn');
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            block.classList.add('animated','fadeIn');
            showPicture(block);
            block.querySelectorAll('p:not(.sizes-hit)').forEach(item => {
                item.style.display = 'none';
            });
        });
        block.addEventListener('mouseout', () => {
            block.classList.remove('animated','fadeIn');
            hidePicture(block);
            block.querySelectorAll('p').forEach(item => {
                item.style.display = 'block';
            });
        });
    });

}
export default picture;