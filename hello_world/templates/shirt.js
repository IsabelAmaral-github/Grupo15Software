document.getElementById('color-picker').addEventListener('input', function(event) {
    const selectedColor = event.target.value;

    const shirts = document.querySelectorAll('.shirt-preview');
    shirts.forEach(shirt => {
        shirt.style.backgroundColor = selectedColor;
    });
});

document.getElementById('shirt-text').addEventListener('input', function() {
    // Obtém o valor do texto
    const text = this.value;
  
    // Altera o conteúdo da camisa
    const shirtTextElement = document.createElement('div');
    shirtTextElement.classList.add('shirt-text');
    shirtTextElement.innerText = text;
  
    // Seleciona as camisas e adiciona o texto
    const shirts = document.querySelectorAll('.shirt-preview');
    shirts.forEach(shirt => {
      // Remove qualquer texto anterior
      const existingText = shirt.querySelector('.shirt-text');
      if (existingText) {
        existingText.remove();
      }
  
      // Adiciona o novo texto
      shirt.appendChild(shirtTextElement);
    });
  });



