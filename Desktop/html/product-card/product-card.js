let products=[{badge:"فروش ویژه",costum:"سفارشی",image:"./Screenshot 2026-10-16 215941.png",text:"لوستر بافتنی مدل لوستراستوانه 22*30",rating:5,price:"1,045,000 تومان",discount:"46%",totalPrice:"12,800,000",inventory:"تنها 1 عدد در انبار باقی مانده"},
    {badge:"فروش ویژه",costum:"سفارشی",image:"./Screenshot 2026-10-16 215941.png",text:"لوستر بافتنی مدل لوستراستوانه 22*30",rating:5,price:"1,045,000 تومان",discount:"46%",totalPrice:"12,800,000",inventory:"تنها 1 عدد در انبار باقی مانده"},
    {badge:"فروش ویژه",costum:"سفارشی",image:"./Screenshot 2026-10-16 215941.png",text:"لوستر بافتنی مدل لوستراستوانه 22*30",rating:5,price:"1,045,000 تومان",discount:"46%",totalPrice:"12,800,000",inventory:"تنها 1 عدد در انبار باقی مانده"},
    {badge:"فروش ویژه",costum:"سفارشی",image:"./Screenshot 2026-10-16 215941.png",text:"لوستر بافتنی مدل لوستراستوانه 22*30",rating:5,price:"1,045,000 تومان",discount:"46%",totalPrice:"12,800,000",inventory:"تنها 1 عدد در انبار باقی مانده"}
];

let card = document.querySelector(".products");

card.innerHTML = products.map(p => `
  <div class="card">
    <div class="top">
      <span class="badge">${p.badge}</span>
      <span class="costum">${p.costum}</span>
    </div>
    <img src="${p.image}" alt="${p.text}">
    <p class="text">${p.text}</p>
    <div class="rat-inv">
      <div class="rating">${p.rating}</div>
      <div class="inventory">${p.inventory}</div>
    </div>
    <div class="container-prices">
      <div class="prices">
        <div class="bottum">
          <span class="price">${p.price}</span>
          <span class="discount">${p.discount}</span>
        </div>
        <p class="totalPrice">${p.totalPrice}</p>
      </div>
    </div>
  </div>
`).join("");