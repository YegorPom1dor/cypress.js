describe('Проверка вторизации', function () {
    
    it('search something', function () {
       cy.visit('login.qa.studio'); // Посетил сайт
       cy.get('#mail').type('german@dolnikov.ru'); // ввел валидный логин
       cy.get('#pass').type('iLoveqastudio1'); // ввел валидный пароль 
       cy.get('#loginButton').click(); // нажал войти 
       cy.get('#messageHeader').contains('Авторизация прошла успешно'); // после авторизации вижу текст
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю

    }) 
       describe('Проверка НЕ правильный пароль', function () {
    
        it('search something', function () {
           cy.visit('login.qa.studio'); // Посетил сайт
           cy.get('#mail').type('german@dolnikov.ru'); // ввел валидный логин
           cy.get('#pass').type('iLoveqastudio7'); // ввел НЕ валидный пароль 
           cy.get('#loginButton').click(); // нажал войти 
           cy.get('#messageHeader').contains('Такого логина или пароля нет'); // после авторизации вижу текст
           cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
        
        }) 

    }) 
    describe('Проверка НЕ правильный логин', function () {
 
     it('search something', function () {
        cy.visit('login.qa.studio'); // Посетил сайт
        cy.get('#mail').type('grman@dolnikov.ru'); // ввел не валидный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввел валидный пароль 
        cy.get('#loginButton').click(); // нажал войти 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
     
     }) 

        describe('Проверка логин без @', function () {
    
        it('search something', function () {
           cy.visit('login.qa.studio'); // Посетил сайт
           cy.get('#mail').type('germandolnikov.ru'); // ввел логин без @
           cy.get('#pass').type('iLoveqastudio1'); // ввел валидный пароль 
           cy.get('#loginButton').click(); // нажал войти 
           cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // после авторизации вижу текст
           cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
        })

    }) 
    describe('Проверка к строчным буквам в логине', function () {
 
     it('search something', function () {
        cy.visit('login.qa.studio'); // Посетил сайт
        cy.get('#mail').type('Grman@Dolnikov.ru'); // ввел не валидный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввел валидный пароль 
        cy.get('#loginButton').click(); // нажал войти 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
     
     }) 


           describe('Проверка забыли пароль', function () {
    
            it('search something', function () {
               cy.visit('login.qa.studio'); // Посетил сайт
               cy.get('#forgotEmailButton').click(); // нажал забыли пароль
               cy.get('#mailForgot').type('german@dolnikov.ru') // ввел почту
               cy.get('#restoreEmailButton').click() // нажал отправить код
               cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // после отправки вижу текст
               cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
               
            }) 
        }) 
       })
    })
})    
