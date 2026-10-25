// NOTE: update WHATSAPP with your number in international format (no +), e.g. 255700000000
const WHATSAPP = "255769456792";

const products = [
  {id:1,name:"Modern L-Shape Sofa",cat:"living",price:1800000,img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=70"},
  {id:2,name:"Cozy Armchair",cat:"living",price:450000,img:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=70"},
  {id:3,name:"Wooden Coffee Table",cat:"living",price:320000,img:"https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&q=70"},
  {id:4,name:"King Size Bed",cat:"bedroom",price:1500000,img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=70"},
  {id:5,name:"Sliding Wardrobe",cat:"bedroom",price:1200000,img:"https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=70"},
  {id:6,name:"6-Seater Dining Set",cat:"dining",price:1400000,img:"https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=70"},
  {id:7,name:"Executive Office Desk",cat:"office",price:900000,img:"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=70"},
  {id:8,name:"Ergonomic Office Chair",cat:"office",price:380000,img:"https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=70"},
  {id:9,name:"Contemporary Living Room Set",cat:"living",price:2200000,img:"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=70"},
  {id:10,name:"Luxury Lounge Sofa Set",cat:"living",price:2600000,img:"https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=70"},
  {id:11,name:"Classic Living Room Suite",cat:"living",price:2100000,img:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=70"},
  {id:12,name:"Designer Sofa Collection",cat:"living",price:1950000,img:"https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=70"},
  {id:13,name:"Luxury Bed Set",cat:"bedroom",price:1700000,img:"https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=70"},
  {id:14,name:"Modern Bedroom Suite",cat:"bedroom",price:2300000,img:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=70"},
  {id:15,name:"Bed with Side Tables",cat:"bedroom",price:1600000,img:"https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=70"},
  {id:16,name:"Premium Master Bedroom",cat:"bedroom",price:2800000,img:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=70"},
  {id:17,name:"Elegant Bedroom Design",cat:"bedroom",price:1900000,img:"https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=70"},
  {id:18,name:"Elegant Dining Table",cat:"dining",price:1100000,img:"https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&q=70"},
  {id:19,name:"Kitchen & Dining Set",cat:"dining",price:1350000,img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=70"},
  {id:20,name:"Designer Dining Chair",cat:"dining",price:180000,img:"https://images.unsplash.com/photo-1503602642458-232111445657?w=600&q=70"},
  {id:21,name:"Stylish Chair",cat:"dining",price:200000,img:"https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=600&q=70"},
  {id:22,name:"Modern Office Workspace",cat:"office",price:1300000,img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=70"},
  {id:23,name:"Executive Chair",cat:"office",price:420000,img:"https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=70"},
  {id:24,name:"Modern Living Room Set",cat:"living",price:2400000,img:"https://i.postimg.cc/d1cw2DfN/1020135753115781980.jpg"},
  {id:25,name:"Luxury Living Room Suite",cat:"living",price:2700000,img:"https://i.postimg.cc/25ZCLn0K/1072560467523540074.jpg"},
  {id:26,name:"Classic Living Room Design",cat:"living",price:2300000,img:"https://i.postimg.cc/wBm9RDwb/1091630397201000584.jpg"},
  {id:27,name:"Stylish Living Room Set",cat:"living",price:2500000,img:"https://i.postimg.cc/mrHT17mJ/908249449865699016.jpg"},
  {id:28,name:"Elegant Blue & White Living Room",cat:"living",price:3000000,img:"https://i.postimg.cc/XvCnB9sP/Elegant-Blue-White-Luxury-Living-Room-Design-Inspiration.jpg"},
  {id:29,name:"Compact Stylish Living Room",cat:"living",price:1800000,img:"https://i.postimg.cc/N0HQ2RdD/Inside-75-Living-Rooms-That-Are-Super-Tiny-%28Yet-Totally-Stylish-%29.jpg"},
  {id:30,name:"Simple & Gorgeous Living Room",cat:"living",price:2000000,img:"https://i.postimg.cc/XJ64fXPH/Simple-but-Gorgeous-Style.jpg"}
];
const fmt = n => "TSh " + n.toLocaleString("en-US");
let cart = JSON.parse(localStorage.getItem("dofuCart") || "{}");
const $ = id => document.getElementById(id);

function renderProducts(f="all"){
  $("products").innerHTML = products.filter(p=>f==="all"||p.cat===f).map(p=>`
    <div class="product"><img src="${p.img}" alt="${p.name}" loading="lazy">
    <div><h3>${p.name}</h3>
    <button class="btn" onclick="openProduct(${p.id})">View Details</button></div></div>`).join("");
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

/* ===== 3D tilt, reveal, order animations ===== */
const tiltSel = ".product,.card,.features div";
document.addEventListener("pointermove", e => {
  const el = e.target.closest && e.target.closest(tiltSel);
  document.querySelectorAll(tiltSel).forEach(x => { if (x !== el) x.style.transform = ""; });
  if (!el) return;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
  el.style.transform = `rotateY(${px * 14}deg) rotateX(${-py * 14}deg) translateZ(10px)`;
});
document.addEventListener("pointerleave", () => document.querySelectorAll(tiltSel).forEach(x => x.style.transform = ""));

const io = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
}), { threshold: .12 });
function watchReveals() {
  document.querySelectorAll(".features div,.product,.card,.about>*,.contact>*,h2,.sub").forEach((el, i) => {
    if (el.classList.contains("reveal")) return;
    el.classList.add("reveal"); el.style.transitionDelay = (i % 4) * 90 + "ms"; io.observe(el);
  });
}
watchReveals();
const _rp = renderProducts;
renderProducts = function (f) { _rp(f); watchReveals(); };

// Fly-to-cart
const _add = add;
add = function (id) {
  const btn = event && event.target, card = btn && btn.closest(".product");
  if (card) {
    const img = card.querySelector("img"), a = img.getBoundingClientRect(), b = $("cartBtn").getBoundingClientRect();
    const f = document.createElement("img"); f.src = img.src; f.className = "fly";
    f.style.left = a.left + a.width / 2 - 35 + "px"; f.style.top = a.top + a.height / 2 - 35 + "px";
    document.body.appendChild(f);
    requestAnimationFrame(() => {
      f.style.transform = `translate(${b.left - a.left - a.width / 2 + 20}px,${b.top - a.top - a.height / 2 + 10}px) scale(.2) rotate(540deg)`;
      f.style.opacity = ".4";
    });
    setTimeout(() => { f.remove(); $("cartBtn").classList.add("bump"); setTimeout(() => $("cartBtn").classList.remove("bump"), 500); }, 800);
  }
  cart[id] = (cart[id] || 0) + 1; save(); setTimeout(openCart, 700);
};

// Confetti
function confetti() {
  const c = $("confetti"), x = c.getContext("2d");
  c.width = innerWidth; c.height = innerHeight;
  const cols = ["#c8913b", "#6b4423", "#25d366", "#e1306c", "#1877f2", "#fff"];
  const ps = Array.from({ length: 160 }, () => ({
    x: innerWidth / 2, y: innerHeight / 2, vx: (Math.random() - .5) * 18, vy: Math.random() * -16 - 4,
    s: Math.random() * 8 + 4, r: Math.random() * 6, vr: Math.random() * .3, c: cols[Math.random() * cols.length | 0]
  }));
  let n = 0;
  (function tick() {
    x.clearRect(0, 0, c.width, c.height);
    ps.forEach(p => {
      p.vy += .35; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.fillStyle = p.c; x.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); x.restore();
    });
    if (++n < 160) requestAnimationFrame(tick); else x.clearRect(0, 0, c.width, c.height);
  })();
}
function orderSuccess(url) {
  closeCart(); $("orderModal").classList.add("show"); confetti();
  setTimeout(() => window.open(url, "_blank"), 2200);
}
$("closeModal").onclick = () => $("orderModal").classList.remove("show");
$("orderModal").onclick = e => { if (e.target.id === "orderModal") $("orderModal").classList.remove("show"); };

$("checkout").onclick = () => {
  const items = Object.keys(cart); if (!items.length) return alert("Your cart is empty.");
  let total = 0;
  const lines = items.map(id => { const p = products.find(x => x.id == id); total += p.price * cart[id]; return `- ${p.name} x${cart[id]} (${fmt(p.price * cart[id])})`; });
  const msg = `Hello DOFU Furniture, I would like to order:\n${lines.join("\n")}\nTotal: ${fmt(total)}`;
  cart = {}; save();
  orderSuccess(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`);
};

/* ===== Product details ===== */
const details = {
  1:{design:"Modern L-shape corner sofa with deep seats, high padded backrest and slim tapered legs. Seats 5-6 people.",material:"Solid hardwood frame, high-density foam cushions, premium upholstery fabric.",quality:"Stain-resistant, sag-free seating, reinforced joints. 2-year frame guarantee.",size:"280 x 180 x 85 cm"},
  2:{design:"Compact accent armchair with curved wrap-around back and soft rounded arms.",material:"Hardwood frame, soft foam padding, velvet-touch fabric, solid wood legs.",quality:"Comfortable for long sitting, easy-clean fabric, firmly built.",size:"75 x 80 x 85 cm"},
  3:{design:"Low rectangular coffee table with clean lines and a smooth natural finish.",material:"Solid hardwood top and legs finished with polish/varnish.",quality:"Scratch and water-resistant finish, sturdy and stable.",size:"110 x 60 x 45 cm"},
  4:{design:"Elegant king size bed with a tall padded headboard and sturdy slatted base.",material:"Seasoned hardwood frame, cushioned leather/fabric headboard, strong support slats.",quality:"Silent, strong joints; supports heavy weight; long-lasting finish.",size:"180 x 200 cm (king)"},
  5:{design:"Spacious sliding-door wardrobe with hanging rail, shelves and drawers.",material:"Hardwood/MDF carcass, laminated finish, smooth-glide sliding track, metal handles.",quality:"Moisture-resistant, smooth sliding, durable hinges and rails.",size:"200 x 60 x 220 cm"},
  6:{design:"Contemporary 6-seater dining set: rectangular table with six cushioned chairs.",material:"Solid wood table, tempered glass or wood top, padded chair seats.",quality:"Heat and stain resistant, strong chair joints, easy to wipe clean.",size:"Table 160 x 90 x 75 cm"},
  7:{design:"Executive desk with wide work surface, side drawers and cable management.",material:"Hardwood and laminated board, lockable metal drawer slides.",quality:"Professional finish, very sturdy, scratch-resistant top.",size:"160 x 80 x 75 cm"},
  8:{design:"Ergonomic high-back office chair with lumbar support and adjustable height.",material:"Breathable mesh/leather, steel base with smooth castors, foam seat.",quality:"Supports all-day sitting, adjustable and durable mechanisms.",size:"65 x 65 x 110-120 cm"}
};
const catDetails = {
  living:{design:"Modern, comfortable design finished to match your living space.",material:"Hardwood frame, high-density foam and premium upholstery.",quality:"Durable, sag-resistant and easy to clean. Frame guarantee included.",size:"Custom sizes available"},
  bedroom:{design:"Elegant, restful design with a refined finish.",material:"Seasoned hardwood, quality padding and strong support.",quality:"Strong silent joints and a long-lasting finish.",size:"Custom sizes available"},
  dining:{design:"Stylish design for family meals and entertaining.",material:"Solid wood with durable, wipe-clean finish.",quality:"Sturdy, heat and stain resistant.",size:"Custom sizes available"},
  office:{design:"Professional design for productive workspaces.",material:"Hardwood, laminated board and quality fittings.",quality:"Sturdy, scratch-resistant and built for daily use.",size:"Custom sizes available"}
};
let currentProduct = null;
function openProduct(id) {
  const p = products.find(x => x.id == id), d = details[id] || catDetails[p.cat];
  currentProduct = id;
  $("pmImg").src = p.img; $("pmImg").alt = p.name;
  $("pmName").textContent = p.name; 
  $("pmDesign").textContent = d.design || ""; $("pmMaterial").textContent = d.material || "";
  $("pmQuality").textContent = d.quality || ""; $("pmSize").textContent = d.size || "";
  $("productModal").classList.add("show");
}
function closeProduct() { $("productModal").classList.remove("show"); }
$("closeProduct").onclick = closeProduct;
$("productModal").onclick = e => { if (e.target.id === "productModal") closeProduct(); };
$("pmAdd").onclick = e => {
  const id = currentProduct;
  const a = $("pmImg").getBoundingClientRect(), b = $("cartBtn").getBoundingClientRect();
  const f = document.createElement("img"); f.src = $("pmImg").src; f.className = "fly";
  f.style.left = a.left + a.width / 2 - 35 + "px"; f.style.top = a.top + a.height / 2 - 35 + "px";
  document.body.appendChild(f);
  closeProduct();
  requestAnimationFrame(() => {
    f.style.transform = `translate(${b.left - a.left - a.width / 2 + 20}px,${b.top - a.top - a.height / 2 + 10}px) scale(.2) rotate(540deg)`;
    f.style.opacity = ".4";
  });
  setTimeout(() => { f.remove(); $("cartBtn").classList.add("bump"); setTimeout(() => $("cartBtn").classList.remove("bump"), 500); }, 800);
  cart[id] = (cart[id] || 0) + 1; save(); setTimeout(openCart, 800);
};
document.addEventListener("click", e => {
  const card = e.target.closest(".product");
  if (card && !e.target.closest("button")) { const m = card.querySelector("button").getAttribute("onclick").match(/\d+/); openProduct(m[0]); }
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeProduct(); });

/* ===== Gallery lightbox ===== */
document.querySelectorAll(".gallery img").forEach(im => im.addEventListener("click", () => {
  $("lbImg").src = im.src; $("lightbox").classList.add("show");
}));
$("lightbox").onclick = () => $("lightbox").classList.remove("show");
document.addEventListener("keydown", e => { if (e.key === "Escape") $("lightbox").classList.remove("show"); });

/* ===== Prices removed: orders go straight to WhatsApp ===== */
$("pmAdd").onclick = () => {
  const p = products.find(x => x.id == currentProduct);
  const msg = `Hello DOFU Furniture, I am interested in this product: ${p.name}.\nPlease send me the price and more details.\nImage: ${p.img}`;
  closeProduct();
  orderSuccess(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`);
};
