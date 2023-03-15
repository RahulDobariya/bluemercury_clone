function slideshowOffer() {

    let slide_text = document.getElementById('slide-text');
    let p = document.createElement('p');

    let announcement_msg = ['Earn up to $100! Receive $20 for every $100 you spend.', 
        'Free shipping for bluerewards members', 
        'Free samples with all orders', 
        'Free gifts with purchase. Browse now'
    ]; 

    p.innerHTML = announcement_msg[0];
    p.style.textAlign = 'center';
    p.style.textTransform = 'uppercase'
    p.style.marginTop = "7px"
    slide_text.append(p);
    let i = 1;
    setInterval(function () {
        p.innerHTML = announcement_msg[i % announcement_msg.length];
        p.style.textAlign = 'center';
        p.style.textTransform = 'uppercase';
        i++;
        slide_text.append(p);
    }, 5000);
}

slideshowOffer();