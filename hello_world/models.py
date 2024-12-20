from django.db import models

class CartItem(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='cart_images/')
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
