
buyBtn = document.getElementById('buy-now-button')
buyBtn.addEventListener('click', (e) => {
    if(confirm("Are you sure your want to purchase this product?"))
        buyBtn.submit()
    else
        // buyBtn.setAttribute('onclick', 'return false;')
        e.preventDefault()
});