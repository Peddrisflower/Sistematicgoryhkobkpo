const universe = document.querySelector('.universe');

// Efeito ao passar o mouse sobre o planeta Terra
document.querySelector('.earth').addEventListener('mouseover', () => {
    alert('Você passou pelo Planeta Terra!');
});

// Alterar a cor do Saturno quando clicado
document.querySelector('.saturn').addEventListener('click', () => {
    const saturn = document.querySelector('.saturn');
    saturn.style.backgroundColor = saturn.style.backgroundColor === 'goldenrod' ? 'lightblue' : 'goldenrod';
});
