gridNum = prompt('Choose a Grid Size between 0 and 101')

const container = document.querySelector('#container');
    container.style.backgroundColor = 'silver';
    container.style.width = "640px";
    container.style.height = "640px";
    container.style.display = "grid";
    container.style.margin = "auto";
    container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;

    gridArea = gridNum ** 2;

    for (i = 1; i <= gridArea; i++) {
    const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        container.appendChild(gridBox);

        gridBox.addEventListener('mouseover', () => {
            gridBox.classList.add('hover');
        });
    };

    const clearGrid = document.querySelector('#clearGrid');
    clearGrid.addEventListener('click', () => {
        window.location.reload();
    });