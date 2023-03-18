function slideshowOffer() {

    let slide_text = document.getElementById('slide-text');
    let p = document.createElement('p');

    let announcement_msg = [
        'Free shipping for bluerewards members', 
        'Free samples with all orders', 
        'Free gifts with purchase. Browse now'
    ]; 

    p.innerHTML = announcement_msg[0];
    p.style.textAlign = 'center';
    p.style.marginTop = "5px"
    p.style.fontSize = "11px"
    p.style.letterSpacing= "1px"
    slide_text.append(p);
    let i = 1;
    setInterval(function () {
        p.innerHTML = announcement_msg[i % announcement_msg.length];
        p.style.textAlign = 'center';
        p.style.letterSpacing= "1px"
        i++;
        slide_text.append(p);
    }, 5000);
}

slideshowOffer();


function slideshowBestSellers() {
    let slide_img = document.getElementById('slide-img');
    let img = document.createElement('img');

    let best_sellers_arr = ['https://cdn.shopify.com/s/files/1/0283/0185/2747/files/vitablast-c-education-hero-des_2000x.jpg?v=1677862803',
        'https://cdn.shopify.com/s/files/1/0283/0185/2747/files/magnesium-candles-hp-hero-hero_2000x.jpg?v=1677862298', 
        'https://cdn.shopify.com/s/files/1/0283/0185/2747/files/eyes-routine-hero-des_2000x.jpg?v=1677796767', 
        'https://cdn.shopify.com/s/files/1/0283/0185/2747/files/spring-makeup-edit-hero-des_2000x.jpg?v=1677796413'
    ];

    img.src = best_sellers_arr[0];
    img.style.width = '100%';
    slide_img.append(img);
    let i = 1;
    setInterval(function () {
        img.src = best_sellers_arr[i % best_sellers_arr.length];
        img.style.width = '100%';
        i++;
        slide_img.append(img);
    }, 3000);


    let dots = document.getElementById('dots-slide');
    let dot_div = document.createElement('div');
    dot_div.style.display = 'inline-block';
}

slideshowBestSellers();

var username = localStorage.getItem("username");

document.getElementById("user").textContent = username;