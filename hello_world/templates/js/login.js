document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obter valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Obter dados de usuários armazenados no Local Storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar se o usuário e a senha coincidem
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Armazenar estado de login no LocalStorage
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('currentUser', JSON.stringify(user)); // Salva informações do usuário logado

        alert(`Bem-vindo, ${user.username}!`);
        
        // Redirecionar para a página inicial ou outra página após login bem-sucedido
        window.location.href = '../html/index.html';
    } else {
        alert('Usuário ou senha incorretos. Por favor, tente novamente.');
    }
});
