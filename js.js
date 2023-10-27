const scrollButton = document.getElementsByClassName('btn-about')[0]

scrollButton.addEventListener('click', () => {
    let innerh = Number(window.innerHeight / 5);
    window.scroll({top: window.innerHeight + innerh, behavior: "smooth"});
})