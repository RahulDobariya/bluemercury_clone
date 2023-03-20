

var cartArr= JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cart-count").textContent = cartArr.length ===0 ? "" :cartArr.length;

let x=localStorage.getItem("user");

if (x == null){
  document.getElementById("showEmailUser").textContent = "SIGN IN/UP";
} else {
  document.getElementById("showEmailUser").textContent = x;
}

function pimage(){
  window.location.href ='index.html';
}

var mensData = [
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060552905975-1_550x.jpg?v=1669131249",
    name: "AUGUSTINUS BADER",
    details:"The Hydration Heroes With The Rich Cream",
    price: 325,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-635494263008-1_550x.jpg?v=1667501812",
    name: "SKINCEUTICALS",
    details:"C E Ferulic",
    price: 699,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-60treatments-817237011842-1_550x.jpg?v=1668758244",
    name: "M-61",
    details:"PowerGlow Peel",
    price: 945,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-854161005097-1_550x.jpg?v=1666706270",
    name: "TATA HARPER",
    details:"Regenerating Cleanser",
    price: 88,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-747930142379-1_550x.jpg?v=1668756679",
    name: "LA MER",
    details:"The Glowing Hydration Duet",
    price: 490,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060534510043-1_550x.jpg?v=1668516809",
    name: "THE LIGHT SALON",
    details:"Boost LED Mask",
    price: 495,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060280378195-1_550x.jpg?v=1667031061",
    name: "111SKIN",
    details:"Celestial Black Diamond Brightening Essence",
    price: 115,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-633222109758-1_550x.jpg?v=1667991379",
    name: "RÉVIVE",
    details:"Masques Des Yeux Revitalizing Eye Mask",
    price: 769,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-015floz15ml-816218027063-1_288x288.jpg?v=1668438322",
    name: "SUPERGOOP!",
    details:"Unseen Sunscreen SPF 40",
    price: 38,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3473311510112-1_550x.jpg?v=1666705011",
    name: "SISLEY-PARIS",
    details:"Sisleÿa L'Integral Anti-Age Eye & Lip Contour Cream",
    price: 235,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-1oz-747930000020-1_550x.jpg?v=1668756582",
    name: "LA MER",
    details:"Crème De La Mer Face Cream",
    price: 570,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-4015165337645-1_550x.jpg?v=1666757861",
    name: "DR. BARBARA STURM",
    details:"Hyaluronic Serum",
    price: 320,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237012528-1_550x.jpg?v=1665518446",
    name: "M-61",
    details:"Hydraboost Eye Cream",
    price: 599,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817244010234-1_550x.jpg?v=1669025301",
    name: "IS CLINICAL",
    details:"Cleansing Complex",
    price: 1575,
  },
  {
    image_url:
  "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3606000434967-1_550x.jpg?v=1669180552",
    name: "SKINCEUTICALS",
    details:"Triple Lipid Restore 2:4:2",
    price: 9999,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-390205025008-1_550x.jpg?v=1668752714",
    name: "ELTAMD",
    details:" UV Clear Broad-Spectrum Facial Sunscreen SPF 46",
    price: 779,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-17oz50ml-860002327020-1_288x288.jpg?v=1669360354",
    name: "U BEAUTY",
    details:"Resurfacing Compound",
    price: 1019,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-17floz50ml-5060552901892-1_600x.jpg?v=1667772080",
    name: "AUGUSTINUS BADER",
    details:"The Rich Cream",
    price: 1019,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-675468102063-1_288x288.jpg?v=1669358982",
    name: "OSEA",
    details:"Bestseller Minis Collection",
    price: 72,
  },
  {
    image_url:
      " https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-9353371000003-1_288x288.jpg?v=1668764368",
    name: "ZITSTICKA",
    details:" Killa Kit Deep Zit Microdart Patch",
    price: 3499,
  },
  {
    image_url:
      " https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-850033397413-1_288x288.jpg?v=1668754318",
    name: "IRENE FORTE",
    details:"Hibiscus Night Cream With Myoxinol",
    price: 749,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-17oz-3605970360757-1_288x288.jpg?v=1667987599",
    name: "KIEHL'S SINCE 1851",
    details:"Ultra Facial Cream",
    price: 1149,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-850026597189-1_288x288.jpg?v=1666748452",
    name: "BLUEMERCURY",
    details:"The Mask Edit ",
    price: 1620,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025013008-1_288x288.jpg?v=1669055427",
    name: "PCA SKIN",
    details:"Intensive Brightening Treatment ",
    price: 779,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-860006793548-1_288x288.jpg?v=1669137865",
    name:  "HIGHERDOSE",
    details:"Red Light Face Mask",
    price: 3499,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011989-1_288x288.jpg?v=1667427499",
    name: "M-61 ",
    details:" PowerGlow Obsessed",
    price: 3499,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-883140024712-1_288x288.jpg?v=1668761208",
    name: " SKINCEUTICALS ",
    details:"Retinol 1.0",
    price: 1399,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-747930098850-1_288x288.jpg?v=1668756594",
    name: " LA MER",
    details:"Genaissance De La Mer The Concentrated Night Balm",
    price: 1575,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-191677344358-1_288x288.jpg?v=1669355664",
    name: "ALO",
    details:"Magic Balm",
    price: 3919,
  },
  {
    image_url:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-1230000065436-1_288x288.jpg?v=1668758942",
    name: "NOBLE PANACEA",
    details:"The Chronobiology Sleep Mask",
    price: 1620,
  },
];




displayProducts(mensData);

function displayProducts(mensData){
  mensData.map(function(elem){
    var div = document.createElement("div");
    div.setAttribute("class","card");
  
    var img = document.createElement("img");
    img.setAttribute("src",elem.image_url);
  
    var name = document.createElement("p");
    name.textContent=elem.name;
    name.setAttribute("class","name");
    
    var details=document.createElement("p");
    details.textContent=elem.details;
    details.setAttribute("class","details");
  
    var priceElement = document.createElement("p");
    priceElement.setAttribute("class","price");
    priceElement.textContent = "$"+" "+elem.price;
  
    var cartbtn = document.createElement("button");
    
    cartbtn.addEventListener("click",function (){
      addToCart(elem);
  
     });
  
  
    var wbtn=document.createElement("button");
    
  
   
  
    div.append(img,name,details,priceElement,cartbtn,wbtn);
    document.getElementById("parent").append(div); 
  });
   
}



  var images = document.getElementsByTagName("img");
  for(var i = 0; i < images.length; i++) {
      var image = images[0];
      image.onclick = function(event) {
           window.location.href = this.id + 'index.html';
      };
    }




      var images = document.getElementsByTagName("img");
      for(var i = 0; i < images.length; i++) {
      var image = images[1];
      image.onclick = function(event) {
           window.location.href = this.id + 'p1.html';
      };
    }



var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


function handlenamesort(){
  document.getElementById("parent").innerHTML="";
  let fill=document.getElementById("sortnames").value;
  console.log(fill);
  if(fill=="Plth"){
     var sortPlth = mensData.sort(function (a,b){
      return a.price-b.price;
     })
     displayProducts(sortPlth)
    }  else if (fill =="phtl"){
      var sortP = mensData.sort(function (a,b){
        return b.price - a.price;
    });
    displayProducts(sortP)
  } else if (fill == "NewArrivals"){
    console.log(fill);
    
     var x = mensData.sort(function (a,b){
      if (a.name>b.name){
        console.log("1");
        return 1;
    
      }
       if (a.name < b.name) {
        console.log("0");
        return -1;
       
      } 
      return 0;


     });
    displayProducts(x)
  } else {
    window.location.reload();
  }
  
  
}