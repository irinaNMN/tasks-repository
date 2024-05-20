function typeOfAngle() {
    let angle = document.getElementById('insertNrOfDegrees').value;
    let message;
    if ((0 <= angle) && (angle < 90)) {
        message = "acute angle of " + angle + " degrees";
    } else if (angle == 90) {
        message = "right angle " + angle + " degrees";
    } else if ((angle > 90) && (angle < 180)) {
        message = "obtuse angle of " + angle + " degrees";
    } else if (angle == 180) {
        message = "straight angle of " + angle + " degrees";
    }
    document.getElementById("angleValue").innerHTML = message;
}

////////////////////////////////////////////////


function getTypeOfVar(inputValue) {
    let getType = function (inputValue) {
        return (typeof (inputValue))
    }
    document.getElementById("giveVar").innerHTML = getType(inputValue);
}

/////////////////////////////////////

function phonePrefix(countryCode) {
    let phonePrefix;
    switch (countryCode) {
        case 'MD' :
            phonePrefix = '+373';
            break;
        case 'RO' :
            phonePrefix = '+40';
            break;
        case 'UA' :
            phonePrefix = '+380';
            break;
        case 'USA' :
            phonePrefix = '+1';
            break;
        case 'GB' :
            phonePrefix = '+44';
            break;
        case 'CA' :
            phonePrefix = '+1';
            break;
        case 'BR' :
            phonePrefix = '+55';
            break;
        case 'PL' :
            phonePrefix = '+48';
            break;
        case 'NO' :
            phonePrefix = '+47';
            break;
        case 'IT' :
            phonePrefix = '+39';
            break;
        case 'CN' :
            phonePrefix = '+86';
            break;
        default:
            phonePrefix = 'unknown country';
    }
    document.getElementById('phonePrefixValue').innerHTML = phonePrefix;
}
