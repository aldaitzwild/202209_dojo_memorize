const cells = document.getElementsByTagName('td');
let counter = 1; 
let state = "preparation";

for (const cell of cells) {
    cell.addEventListener('click', function () {
        
        if(state == "preparation"){
            if(cell.children.length < 1) {
                cell.innerHTML = '<span class="value">' + counter + '</span>';
                counter++;
            }
        }

        if(state == "game") {
            if(cell.children.length == 1) {
                const childValue = cell.children[0].innerText;
                if(childValue == counter)
                {
                    cell.children[0].classList.remove('hidden');
                    cell.classList.add('success');
                    counter++;
                    return true;
                }
            }

            alert("C'est faux !");
        }
    });
}

const memoBtn = document.getElementById('memoBtn');
memoBtn.addEventListener('click', function () {
    const values = document.getElementsByClassName('value');
    for (const value of values) {
        value.classList.add('hidden');
        counter = 1;
        state = "game";
    }
});