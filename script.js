
document.getElementById('applyDiscount').addEventListener('click', function () {
    const code = document.getElementById('discountCode').value.trim();
    const originalPrice = 1000;
    const discountPercentage = 30;
    const validCode = "DISC";

    let finalPrice;

    if (code.toUpperCase() === validCode) {
        finalPrice = originalPrice - (originalPrice * (discountPercentage / 100));
        document.getElementById('errorMessage').classList.add('hidden');
    } else {
        finalPrice = originalPrice;
        document.getElementById('errorMessage').classList.remove('hidden');
    }

    document.getElementById('price').innerHTML = `${finalPrice} Tk`;
    document.getElementById('finalPrice').classList.remove('hidden');
});
