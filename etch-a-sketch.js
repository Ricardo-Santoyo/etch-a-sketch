const container = document.querySelector('#container');

    for (i = 1; i <= 256; i++) {
    const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox')
        container.appendChild(gridBox);

        gridBox.addEventListener('mouseover', () => {
            gridBox.classList.add('hover');
        });
    };