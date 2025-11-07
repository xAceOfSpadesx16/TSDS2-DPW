const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const formObject = {};

    for (const key of formData.keys()) {
        const values = formData.getAll(key);
        formObject[key] = values.length > 1 ? values : values[0];
    }

    alert('Datos del formulario:\n' + JSON.stringify(formObject, null, 2));
});