document.querySelectorAll('main a').forEach(el => {
    const icon = document.createElement('i');
    icon.classList.add('fa', 'fa-solid', 'fa-arrow-up-right-from-square');
    el.appendChild(icon);
});

document.querySelector('#print').addEventListener('click', () => window.print());