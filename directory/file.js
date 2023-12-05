document.addEventListener("DOMContentLoaded", function () {

    // Footer
    const footerYear = new Date().getFullYear();
    document.getElementById('footerYear').textContent = footerYear;

    // Alert Button
    const alertButton = document.getElementById('btn-alert');
    alertButton.addEventListener('click', function () {
        alert("Why did you click!!!");
    });

    // Hover Button
    const hoverButton = document.getElementById('btn-hover');
    hoverButton.addEventListener('mouseover', function () {
    hoverButton.innerText = 'Why!!!';
    });

    hoverButton.addEventListener('mouseleave', function () {
    hoverButton.innerText = 'Bye bye!';
    });

    // Incrementing Button
    let count = 1;
    const incrementButton = document.getElementById('btn-counter');
    const counterText = document.getElementById('txt-counter');
    incrementButton.addEventListener('click', function () {
        count++;
        counterText.innerHTML = 'Betrayal counter: ' + count;
        
        // if-else
        if (count % 2 === 0) {
            counterText.classList.remove('odd');
            counterText.classList.add('even');
        } else {
            counterText.classList.remove('even');
            counterText.classList.add('odd');
        }
    });

    // for Loops
    const numbersList = document.getElementById('numbers');
    const initialValue = 1;
    const stopValue = 100;

    for (let i = initialValue; i <= stopValue; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
        numbersList.appendChild(listItem);
    }

});