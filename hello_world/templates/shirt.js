document.getElementById('color-picker').addEventListener('input', function(event) {
    const selectedColor = event.target.value;

    const shirts = document.querySelectorAll('.shirt-preview');
    shirts.forEach(shirt => {
        shirt.style.backgroundColor = selectedColor;
    });
});

document.getElementById('shirt-text').addEventListener('input', function() {
    const text = this.value;

    const shirtTextElement = document.createElement('div');
    shirtTextElement.classList.add('shirt-text');
    shirtTextElement.innerText = text;
  

    const shirts = document.querySelectorAll('.shirt-preview');
    shirts.forEach(shirt => {
      const existingText = shirt.querySelector('.shirt-text');
      if (existingText) {
        existingText.remove();
      }
      shirt.appendChild(shirtTextElement);
    });
  });



