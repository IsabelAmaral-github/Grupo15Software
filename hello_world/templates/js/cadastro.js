document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obter valores dos campos
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Validações básicas
    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    if (!username || !email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Obter dados existentes no Local Storage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar se o email já está cadastrado
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        alert('E-mail já cadastrado. Por favor, use outro ou faça login.');
        return;
    }

    // Salvar os novos dados no Local Storage
    users.push({
        username: username,
        email: email,
        password: password
    });
    localStorage.setItem('users', JSON.stringify(users));

    // Registrar o estado de login
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('currentUser', JSON.stringify({ username, email })); // Opcional: salvar usuário atual

    alert('Cadastro realizado com sucesso! Você está logado.');
    window.location.href = '../html/index.html'; // Redirecionar para a página inicial
});
