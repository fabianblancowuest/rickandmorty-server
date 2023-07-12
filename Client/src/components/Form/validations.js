const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

const validate = (obj) => {

    const errors = {
    }
    if (!regexEmail.test(obj.email)) {
        errors.email = "Ingresa un email válido";
    }

    else if (obj.email.length > 35) {
        errors.email = "El email debe tener menos de 35 caracteres";
    }

    else if (!regexPassword.test(obj.password)) {
        errors.password = "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula"
    }

    return errors;

}

export default validate;