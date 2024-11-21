document.getElementById('color-picker').addEventListener('input', function(event) {
    const selectedColor = event.target.value;

    const shirts = document.querySelectorAll('.shirt-preview');
    shirts.forEach(shirt => {
        shirt.style.backgroundColor = selectedColor;
    });
});
