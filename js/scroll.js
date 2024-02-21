function scrollToElements(id) {
    const element = document.getElementById(id);
    const offsetTop = element.offsetTop;
    const offsetHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = offsetTop - ((windowHeight - offsetHeight) / 2);
    
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
}
