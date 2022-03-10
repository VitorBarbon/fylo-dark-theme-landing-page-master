(function () {
  const form = document.querySelector('.form');
  const inputEmail = document.querySelector('.form__input');

  function handleForm() {
    form.addEventListener('submit', e => {
      e.preventDefault();
      console.log(isValid());
    })
  }
  handleForm()

  function isValid() {
    let valid = true;
    if (inputEmail.value.indexOf('@') < 0 && inputEmail.value.indexOf('.com') < 0) {
      valid = false;
      createError(inputEmail, 'Email must contain @ and .com');
    }
    return valid;
  }

  function createError(fild, msg) {
    const pError = document.createElement('p');
    pError.classList.add('error');
    pError.innerText = msg;
    fild.insertAdjacentElement('afterend', pError);
  }
})();