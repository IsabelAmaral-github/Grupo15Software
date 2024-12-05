from django.shortcuts import render, redirect, get_object_or_404
from django import forms
from .models import CartItem

def cart_view(request):
    items = CartItem.objects.all()  # Obter todos os itens do carrinho
    total_price = sum(item.price for item in items)  # Soma o preço dos itens
    freight = 30  # Define o valor fixo do frete
    total_with_freight = total_price + freight  # Soma o frete ao total

    # Renderiza o template com os valores corretos
    return render(request, 'cart.html', {
        'items': items,
        'total_price': total_price,
        'freight': freight,
        'total_with_freight': total_with_freight,
    })

# Visualização para adicionar ou editar itens no carrinho

def cart_item_form_view(request):
    if request.method == "POST":
        name = request.POST.get("name")
        image = request.FILES.get("image")
        description = request.POST.get("description")
        price = request.POST.get("price")

        # Criar o item no banco de dados
        CartItem.objects.create(
            name=name,
            image=image,
            description=description,
            price=price
        )
        return redirect('cart')  # Redireciona para o carrinho

    return render(request, 'cart_item_form.html')


def cart_item_delete(request, item_id):
    if request.method == "POST":
        item = get_object_or_404(CartItem, id=item_id)
        item.delete()  # Remove o item do banco de dados
    return redirect('cart')  # Redireciona de volta para a página do carrinho
    
def checkout_view(request):
    items = CartItem.objects.all()  # Assumindo que você já tem os itens no banco
    total_price = sum(item.price for item in items)
    return render(request, 'checkout.html', {'items': items, 'total_price': total_price})
