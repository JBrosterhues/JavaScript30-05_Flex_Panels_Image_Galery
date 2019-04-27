const imageBlocks = Array.from(document.getElementsByClassName('image-block'));

function toggleTransform() {
    this.classList.toggle('transform-block');
}

imageBlocks.forEach(element => {
    element.addEventListener('click', toggleTransform);
});
