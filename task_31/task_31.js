window.onload = function () {
    // task 1
    const addButton = document.getElementById('displayImg');
    const removeButton = document.getElementById('removeImg');
    const imageElement = document.getElementById('pageImage');

    addButton.addEventListener('click', () => {
        const pageImage = document.getElementById('pageImage');
        if (pageImage) {
            pageImage.classList.remove("hideImage");
        }
    })
    imageElement.addEventListener('click', () => {
        const pageImage = document.getElementById('pageImage');
        pageImage.classList.add("hideImage");
    })
    removeButton.addEventListener("click", () => {
        imageElement.removeEventListener("click", () => {
        })
        document.getElementById('imageBlock').innerHTML = '';
    })

    // task 2A
    document.getElementById('keyboard').addEventListener('keypress', (code) => {
        console.log('A fost facut click pe butonul ' + code.key)
    });

    const submitButton = document.getElementById('submitValidator');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault()
        if (document.getElementById('input1').value.length > 0) {
            document.getElementById('input1').classList.remove('require')
        } else {
            document.getElementById('input1').classList.add('require')
        }
        if (document.getElementById('input2').value.length > 0) {
            document.getElementById('input2').classList.remove('require')
        } else {
            document.getElementById('input2').classList.add('require')
        }
        if (document.getElementById('input3').value.length > 0) {
            document.getElementById('input3').classList.remove('require')
        } else {
            document.getElementById('input3').classList.add('require')
        }
        if (document.getElementById('input4').value.length > 0) {
            document.getElementById('input4').classList.remove('require')
        } else {
            document.getElementById('input4').classList.add('require')
        }
        if (document.getElementById('input5').value.length > 0) {
            document.getElementById('input5').classList.remove('require')
        } else {
            document.getElementById('input5').classList.add('require')
        }
    })
}

// task 2
let clickCount = 0;

function countClick() {
    clickCount++;
    console.log(clickCount);
}
