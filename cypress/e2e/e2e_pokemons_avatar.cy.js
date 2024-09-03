describe('Покупка аватара', function () {                                
    it('e2e тест на покупку нового аватара для тренера', function () {  
      
       cy.visit('https://pokemonbattle.ru/login'); // Посетил сайт
       cy.get(':nth-child(1) > .auth__input').type('LOGIN') // Ввел логин
       cy.get('#password').type('PASSWORD') // Ввел пароль 
       cy.get('button[type="submit"]').click(); // Нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
         cy.get('[href="/shop"]').click(); // Нажимаем кнопку Аватар
         cy.get('.available > button').first().click({ force: true }); // Кликаем Купить у первого доступного аватара
         cy.get('.credit').type('4620869113632996'); // Вводим номер карты
         cy.get('.k_input_ccv').type('125'); // Вводим CVV карты
         cy.get('.k_input_date').type('1225'); // Вводим срок действия 
         cy.get('.k_input_name').type('NAME'); // Вводим имя 
         cy.get('.pay-btn').click(); // Нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456'); // Вводим код подтверждения смс
         cy.get('.payment__submit-button').click(); // Нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible'); // Сообщения о успешной покупке
        })
})