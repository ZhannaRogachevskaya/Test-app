window.addEventListener('DOMContentLoaded', () => {
    const buttonOpenModal = document.querySelector('#main__content-btn'),
         wrapperWindow = document.querySelector('.wrapper')

    buttonOpenModal.addEventListener('click', () => {

        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper__modal__window');
        wrapper.innerHTML = `
                <div class="modal__window" id="window__enter">
                    <h3>Войти в систему</h3>
                    <input type="tel" placeholder="Email/Телефон" class="modal__input" id="login">
                    <input type="password" placeholder="Пароль" class="modal__input" id="password">
                    <label>
                        <input type="checkbox" name="save_name">
                        Запомнить пароль
                    </label>
                    <button type="button" class="recover">Восстановить</button>
                    <div class="modal__window-btns">
                        <button class="enter" id="btn-enter">Войти</button>
                        <button class="registr">Зарегистрироваться</button>
                    </div>
                    <button class="close" id="btn-close"><img src="/img/x.svg"></button>
                </div>
            `;
        wrapperWindow.append(wrapper);

        const modalWindow = document.querySelector('.wrapper__modal__window'),
              btnClose = modalWindow.querySelector('#btn-close'),
              login = modalWindow.querySelector('#login'),
              password = modalWindow.querySelector('#password'),
              btnEnter = modalWindow.querySelector('#btn-enter');

        btnClose.addEventListener('click', () => {
            modalWindow.remove();
        });

        modalWindow.addEventListener('click', (event) => {
            if (event.target.classList.contains('wrapper__modal__window')) {
                modalWindow.remove();
            }
        });

        btnEnter.addEventListener('click', function() {
            alert(`Проверьте данные: логин - ${login.value}, пароль - ${password.value}`);
        });
    });
});