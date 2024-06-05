window.onload = function () {
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault()
        const inputUserId = document.getElementById('userId');
        if (5 <= inputUserId.value.length && inputUserId.value.length <= 12) {
            document.getElementById('errorUserId').classList.add('hiddenClass');
        } else {
            document.getElementById('errorUserId').classList.remove('hiddenClass');
        }
        const inputPassword = document.getElementById('pwd');
        if (7 <= inputPassword.value.length && inputPassword.value.length <= 12) {
            document.getElementById('errorPwd').classList.add('hiddenClass');
        } else {
            document.getElementById('errorPwd').classList.remove('hiddenClass');
        }
        const inputName = document.getElementById('yourName');
        let regex = /^[A-Za-z]+$/;
        if (regex.test(inputName.value)) {
            document.getElementById('nameYour').classList.add('hiddenClass');
        } else {
            document.getElementById('nameYour').classList.remove('hiddenClass');
        }
        const inputCountry = document.getElementById('yourCountry');
        console.log(inputCountry.value)
        if (inputCountry.value.length !== 0) {
            document.getElementById('msgYourCountry').classList.add('hiddenClass');
        } else {
            document.getElementById('msgYourCountry').classList.remove('hiddenClass');
        }
        const inputZipCode = document.getElementById('zipCode');
        let regEx = /^\d*\.?\d*$/;
        if (regEx.test(inputZipCode.value)) {
            document.getElementById('msgZipCode').classList.add('hiddenClass');
        } else {
            document.getElementById('msgZipCode').classList.remove('hiddenClass');
        }
        const inputEmail = document.getElementById('yourEmail');
        const reGex = /\S+@\S+\.\S+/;
        if (reGex.test(inputEmail.value)) {
            document.getElementById('msgEmail').classList.add('hiddenClass');
        } else {
            document.getElementById('msgEmail').classList.remove('hiddenClass');
        }
        const inputSex = document.getElementsByName('gender');
        let isChecked = false;
        for (let i = 0; i < inputSex.length; i++) {
            if (inputSex[i].checked) {
                isChecked = true;
                break;
            }
        }
        if (!isChecked) {
            document.getElementById('msgSex').classList.remove('hiddenClass');
        } else {
            document.getElementById('msgSex').classList.add('hiddenClass');
        }
        const inputLanguage = document.getElementsByName('language');
        let isCheck = false;
        for (let i = 0; i < inputLanguage.length; i++) {
            if (inputLanguage[i].checked) {
                isCheck = true;
                break;
            }
        }
        if (!isCheck) {
            document.getElementById('msgLanguage').classList.remove('hiddenClass');
        } else {
            document.getElementById('msgLanguage').classList.add('hiddenClass');
        }
    })

}