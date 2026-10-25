// NOTE: update WHATSAPP with your number in international format (no +), e.g. 255700000000
const WHATSAPP = "255000000000";

const products = [
  {id:1,name:"Modern L-Shape Sofa",cat:"living",price:1800000,img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=70"},
  {id:2,name:"Cozy Armchair",cat:"living",price:450000,img:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=70"},
  {id:3,name:"Wooden Coffee Table",cat:"living",price:320000,img:"https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&q=70"},
  {id:4,name:"King Size Bed",cat:"bedroom",price:1500000,img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=70"},
  {id:5,name:"Sliding Wardrobe",cat:"bedroom",price:1200000,img:"https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=70"},
  {id:6,name:"6-Seater Dining Set",cat:"dining",price:1400000,img:"https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=70"},
  {id:7,name:"Executive Office Desk",cat:"office",price:900000,img:"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=70"},
  {id:8,name:"Ergonomic Office Chair",cat:"office",price:380000,img:"https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=70"}
];
const fmt = n => "TSh " + n.toLocaleString("en-US");
let cart = JSON.parse(localStorage.getItem("dofuCart") || "{}");
const $ = id => document.getElementById(id);

function renderProducts(f="all"){
  $("products").innerHTML = products.filter(p=>f==="all"||p.cat===f).map(p=>`
    <div class="product"><img src="${p.img}" alt="${p.name}" loading="lazy">
    <div><h3>${p.name}</h3><p class="price">${fmt(p.price)}</p>
    <button class="btn" onclick="add(${p.id})">Add to Cart</button></div></div>`).join("");
}
function save(){localStorage.setItem("dofuCart",JSON.stringify(cart));renderCart()}
function add(id){cart[id]=(cart[id]||0)+1;save();openCart()}
function change(id,d){cart[id]+=d;if(cart[id]<=0)delete cart[id];save()}
function renderCart(){
  let total=0,count=0;
  $("cartItems").innerHTML = Object.keys(cart).map(id=>{
    const p=products.find(x=>x.id==id),q=cart[id];total+=p.price*q;count+=q;
    return `<div class="ci"><img src="${p.img}" alt=""><div><strong>${p.name}</strong><br>${fmt(p.price)}</div>
      <button onclick="change(${id},-1)">−</button>${q}<button onclick="change(${id},1)">+</button></div>`;
  }).join("") || "<p style='padding:20px 0'>Your cart is empty.</p>";
  $("cartTotal").textContent=fmt(total);$("cartCount").textContent=count;
}
function openCart(){$("cart").classList.add("open");$("overlay").classList.add("show")}
function closeCart(){$("cart").classList.remove("open");$("overlay").classList.remove("show")}

$("cartBtn").onclick=openCart;$("closeCart").onclick=closeCart;$("overlay").onclick=closeCart;
$("burger").onclick=()=>$("menu").classList.toggle("show");
$("menu").onclick=()=>$("menu").classList.remove("show");
$("filters").onclick=e=>{
  if(e.target.tagName!=="BUTTON")return;
  document.querySelectorAll("#filters button").forEach(b=>b.classList.remove("active"));
  e.target.classList.add("active");renderProducts(e.target.dataset.f);
};
$("checkout").onclick=()=>{
  const items=Object.keys(cart);if(!items.length)return alert("Your cart is empty.");
  let total=0;
  const lines=items.map(id=>{const p=products.find(x=>x.id==id);total+=p.price*cart[id];return `- ${p.name} x${cart[id]} (${fmt(p.price*cart[id])})`});
  const msg=`Hello DOFU Furniture, I would like to order:\n${lines.join("\n")}\nTotal: ${fmt(total)}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,"_blank");
};
$("contactForm").onsubmit=e=>{
  e.preventDefault();
  const msg=`Hello DOFU, I'm ${$("cName").value} (${$("cPhone").value}).\n${$("cMsg").value}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,"_blank");
};
$("footSocials").innerHTML=document.querySelector("#contact .socials").innerHTML;
$("yr").textContent=new Date().getFullYear();
renderProducts();renderCart();
