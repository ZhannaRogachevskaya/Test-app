window.addEventListener('DOMContentLoaded', () => {
    const buttonOpenModal = document.querySelector('#main__content-btn'),
         modalWindow = document.querySelector('.wrapper__modal__window'),
         btnClose = document.querySelector('#btn-close'),
         login = document.querySelector('#login'),
         password = document.querySelector('#password'),
         btnEnter = document.querySelector('#btn-enter');

    buttonOpenModal.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
    });
    btnClose.addEventListener('click', () => {
        modalWindow.style.display = 'none';
    });
    modalWindow.addEventListener('click', (event) => {
        event.target.classList.contains('wrapper__modal__window') ? modalWindow.style.display = 'none' : false
    })
    btnEnter.addEventListener('click', function(){
        alert(`Проверьте данные: логин - ${login.value}, пароль - ${password.value}`)
    })
})