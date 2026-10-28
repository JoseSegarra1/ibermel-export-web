const products = [
  {id:"multifloral250", key:"multifloral", grams:"250 g", price:3.50, image:"assets/honey-multifloral.svg", tag:"popular"},
  {id:"multifloral500", key:"multifloral", grams:"500 g", price:6.50, image:"assets/honey-multifloral.svg", tag:""},
  {id:"multifloral1000", key:"multifloral", grams:"1 kg", price:11.00, image:"assets/honey-multifloral.svg", tag:""},
  {id:"rosemary250", key:"rosemary", grams:"250 g", price:4.50, image:"assets/honey-rosemary.svg", tag:"gourmet"},
  {id:"rosemary500", key:"rosemary", grams:"500 g", price:8.00, image:"assets/honey-rosemary.svg", tag:""},
  {id:"orange250", key:"orange", grams:"250 g", price:null, image:"assets/honey-orange.svg", tag:"new"},
  {id:"thyme250", key:"thyme", grams:"250 g", price:null, image:"assets/honey-thyme.svg", tag:""},
];
const translations = {
es:{
announcement:"Miel artesanal española · Tradición, calidad y naturaleza",brandTag:"MIEL ARTESANAL",navProducts:"Productos",navAbout:"Nosotros",navExport:"Exportación",navContact:"Contacto",language:"Idioma",cart:"Cesta",
heroEyebrow:"DEL CORAZÓN DE ESPAÑA",heroTitle:"La naturaleza,<br><em>en cada gota.</em>",heroLead:"Descubre mieles artesanales inspiradas en la riqueza floral de la península ibérica, elaboradas con respeto por la tradición apícola.",discover:"Descubrir las mieles",ourStory:"Nuestra historia",heroNote:"Tradición local. Visión internacional.",heroLabelTop:"MIEL DE ORIGEN",heroLabelBottom:"ESPAÑA · NATURALMENTE",
value1:"Inspiración floral ibérica",value2:"Tradición apícola",value3:"Vocación exportadora",value4:"Cuidado de la naturaleza",productsEyebrow:"NUESTRO CATÁLOGO",productsTitle:"Mieles con <em>carácter.</em>",productsIntro:"Cada variedad ofrece una forma distinta de disfrutar la riqueza de las flores españolas.",catalogNote:"Precios de catálogo del proyecto. Confirma disponibilidad, gastos de envío e impuestos antes de finalizar un pedido.",
storyEyebrow:"NUESTRA ESENCIA",storyTitle:"Una tradición que<br><em>viaja más lejos.</em>",storyText:"IBERMEL EXPORT nace con la idea de acercar la miel artesanal española a nuevos mercados. El proyecto contempla la colaboración con apicultores locales y da valor a variedades como romero, azahar, tomillo y multifloral.",storyText2:"Nuestra filosofía une el respeto por la tradición apícola, la atención a la naturaleza y una presentación cuidada para clientes que buscan productos con identidad.",learnExport:"Conoce nuestra vocación internacional ↗",exportEyebrow:"IBERMEL PARA EL MUNDO",exportTitle:"Un producto local.<br><em>Una mirada global.</em>",exportText:"El proyecto tiene una clara orientación internacional: distribuidores, importadores, tiendas gourmet y profesionales que desean explorar la miel española.",businessEnquiry:"Consulta comercial",
contactEyebrow:"HABLEMOS",contactTitle:"¿Preparamos algo <em>dulce?</em>",contactText:"¿Tienes una consulta sobre productos, distribución o exportación? Prepara tu mensaje con el formulario. Añade los datos comerciales oficiales antes de publicar la web.",nameLabel:"Nombre",emailLabel:"Correo electrónico",subjectLabel:"Motivo de la consulta",subjectProducts:"Productos y precios",subjectDistribution:"Distribución",subjectExport:"Exportación",messageLabel:"Mensaje",prepareEmail:"Preparar correo",contactHint:"Este formulario abre tu aplicación de correo; no envía datos a un servidor.",footerText:"El sabor de nuestra tierra, preparado para cruzar fronteras.",footerNote:"Catálogo demostrativo · Datos comerciales por confirmar",legal:"Aviso legal y privacidad",
yourSelection:"TU SELECCIÓN",cartTitle:"Tu cesta",emptyCart:"Tu cesta está esperando algo delicioso.",continueShopping:"Seguir explorando ↗",subtotal:"Subtotal estimado",shippingNote:"Envío e impuestos no incluidos. Se confirmarán antes del pago.",checkout:"Preparar pedido",clearCart:"Vaciar cesta",orderRequest:"SOLICITUD DE PEDIDO",checkoutTitle:"Un último paso.",checkoutText:"Completa tus datos para generar un resumen del pedido. Esta demo no cobra pagos ni envía el pedido automáticamente.",customerName:"Nombre o empresa",customerEmail:"Correo electrónico",customerCountry:"País de entrega",customerAddress:"Dirección de entrega (opcional)",generateOrder:"Generar resumen de pedido",orderCreated:"Resumen generado",copyOrder:"Copiar resumen",orderHint:"Envía el resumen al vendedor por un canal comercial que la empresa configure. No se ha realizado ningún cobro.",
multifloral:"Miel multifloral ibérica",rosemary:"Miel de romero",orange:"Miel de azahar",thyme:"Miel de tomillo",popular:"Favorita",gourmet:"Gourmet",new:"Variedad",add:"Añadir a la cesta",selectFormat:"Formato",priceOnRequest:"Precio por confirmar",format:"Formato",added:"Añadido a la cesta",emptyCheckout:"Añade al menos un producto a la cesta.",copied:"Resumen copiado.",copyFallback:"No se pudo copiar automáticamente. Selecciona y copia el texto.",noEmail:"No se ha configurado un correo comercial. Guarda el resumen y contacta con la empresa por un canal oficial.",emailSubject:"Consulta para IBERMEL EXPORT",orderTitle:"SOLICITUD DE PEDIDO — IBERMEL EXPORT",orderDate:"Fecha",orderCustomer:"Cliente",orderCountry:"País",orderAddress:"Dirección",orderItems:"Productos",orderTotal:"Subtotal estimado",orderDisclaimer:"El envío, los impuestos y la disponibilidad están pendientes de confirmación. Este documento es una solicitud, no una factura ni una confirmación de compra.",remove:"Eliminar",quantity:"Cantidad",currency:"EUR"
},
en:{
announcement:"Spanish artisan honey · Tradition, quality and nature",brandTag:"ARTISAN HONEY",navProducts:"Products",navAbout:"Our story",navExport:"Export",navContact:"Contact",language:"Language",cart:"Cart",
heroEyebrow:"FROM THE HEART OF SPAIN",heroTitle:"Nature,<br><em>in every drop.</em>",heroLead:"Discover artisan honeys inspired by the floral richness of the Iberian Peninsula and made with respect for beekeeping traditions.",discover:"Discover our honey",ourStory:"Our story",heroNote:"Local tradition. International vision.",heroLabelTop:"HONEY OF ORIGIN",heroLabelBottom:"SPAIN · NATURALLY",
value1:"Iberian floral inspiration",value2:"Beekeeping tradition",value3:"Export-minded",value4:"Care for nature",productsEyebrow:"OUR CATALOGUE",productsTitle:"Honey with <em>character.</em>",productsIntro:"Each variety offers a different way to enjoy the richness of Spanish flowers.",catalogNote:"Project catalogue prices. Confirm availability, shipping costs and taxes before completing an order.",
storyEyebrow:"OUR ESSENCE",storyTitle:"A tradition that<br><em>travels further.</em>",storyText:"IBERMEL EXPORT was conceived to bring Spanish artisan honey to new markets. The project envisages working with local beekeepers and celebrating rosemary, orange blossom, thyme and multifloral varieties.",storyText2:"Our philosophy combines respect for beekeeping traditions, care for nature and thoughtful presentation for customers looking for products with identity.",learnExport:"Discover our international outlook ↗",exportEyebrow:"IBERMEL FOR THE WORLD",exportTitle:"A local product.<br><em>A global outlook.</em>",exportText:"The project has a clear international focus: distributors, importers, gourmet shops and professionals interested in Spanish honey.",businessEnquiry:"Business enquiries",
contactEyebrow:"LET'S TALK",contactTitle:"Shall we make something <em>sweet?</em>",contactText:"Questions about products, distribution or exports? Prepare your message using this form. Add official business contact details before publishing the website.",nameLabel:"Name",emailLabel:"Email address",subjectLabel:"Enquiry type",subjectProducts:"Products and prices",subjectDistribution:"Distribution",subjectExport:"Export",messageLabel:"Message",prepareEmail:"Prepare email",contactHint:"This form opens your email application; it does not send data to a server.",footerText:"The taste of our land, ready to cross borders.",footerNote:"Demonstration catalogue · Business details to be confirmed",legal:"Legal notice and privacy",
yourSelection:"YOUR SELECTION",cartTitle:"Your cart",emptyCart:"Your cart is waiting for something delicious.",continueShopping:"Keep exploring ↗",subtotal:"Estimated subtotal",shippingNote:"Shipping and taxes are not included. They will be confirmed before payment.",checkout:"Prepare order",clearCart:"Clear cart",orderRequest:"ORDER REQUEST",checkoutTitle:"One last step.",checkoutText:"Enter your details to generate an order summary. This demo does not take payments or automatically submit orders.",customerName:"Name or company",customerEmail:"Email address",customerCountry:"Delivery country",customerAddress:"Delivery address (optional)",generateOrder:"Generate order summary",orderCreated:"Summary generated",copyOrder:"Copy summary",orderHint:"Send the summary to the seller through a business channel configured by the company. No payment has been taken.",
multifloral:"Iberian multifloral honey",rosemary:"Rosemary honey",orange:"Orange blossom honey",thyme:"Thyme honey",popular:"Popular",gourmet:"Gourmet",new:"Variety",add:"Add to cart",selectFormat:"Format",priceOnRequest:"Price to be confirmed",format:"Format",added:"Added to cart",emptyCheckout:"Add at least one product to your cart.",copied:"Summary copied.",copyFallback:"Automatic copy failed. Select and copy the text.",noEmail:"No business email has been configured. Save the summary and contact the company through an official channel.",emailSubject:"Enquiry for IBERMEL EXPORT",orderTitle:"ORDER REQUEST — IBERMEL EXPORT",orderDate:"Date",orderCustomer:"Customer",orderCountry:"Country",orderAddress:"Address",orderItems:"Products",orderTotal:"Estimated subtotal",orderDisclaimer:"Shipping, taxes and availability must be confirmed. This document is a request, not an invoice or purchase confirmation.",remove:"Remove",quantity:"Quantity",currency:"EUR"
},
ar:{
announcement:"عسل إسباني حرفي · التقاليد والجودة والطبيعة",brandTag:"عسل حرفي",navProducts:"المنتجات",navAbout:"من نحن",navExport:"التصدير",navContact:"اتصل بنا",language:"اللغة",cart:"السلة",
heroEyebrow:"من قلب إسبانيا",heroTitle:"الطبيعة،<br><em>في كل قطرة.</em>",heroLead:"اكتشف أنواع العسل الحرفي المستوحاة من تنوع أزهار شبه الجزيرة الأيبيرية، مع احترام تقاليد تربية النحل.",discover:"اكتشف أنواع العسل",ourStory:"قصتنا",heroNote:"تقاليد محلية. رؤية دولية.",heroLabelTop:"عسل من المصدر",heroLabelBottom:"إسبانيا · بطبيعتها",
value1:"تنوع الأزهار الأيبيرية",value2:"تقاليد تربية النحل",value3:"توجه نحو التصدير",value4:"العناية بالطبيعة",productsEyebrow:"كتالوجنا",productsTitle:"عسل له <em>شخصية.</em>",productsIntro:"يمنح كل نوع تجربة مختلفة للاستمتاع بغنى الأزهار الإسبانية.",catalogNote:"أسعار كتالوج المشروع. يرجى تأكيد التوفر وتكاليف الشحن والضرائب قبل إتمام الطلب.",
storyEyebrow:"جوهرنا",storyTitle:"تقاليد تسافر<br><em>إلى أبعد مدى.</em>",storyText:"تأسست فكرة IBERMEL EXPORT لتقديم العسل الإسباني الحرفي إلى أسواق جديدة. ويتضمن المشروع التعاون مع مربي النحل المحليين والاحتفاء بعسل إكليل الجبل وزهر البرتقال والزعتر والعسل متعدد الأزهار.",storyText2:"تجمع فلسفتنا بين احترام تقاليد تربية النحل والعناية بالطبيعة وتقديم منتجات بهوية مميزة.",learnExport:"اكتشف توجهنا الدولي ↗",exportEyebrow:"IBERMEL إلى العالم",exportTitle:"منتج محلي.<br><em>ورؤية عالمية.</em>",exportText:"يركز المشروع على الأسواق الدولية والموزعين والمستوردين ومتاجر المنتجات الفاخرة والمتخصصين المهتمين بالعسل الإسباني.",businessEnquiry:"استفسار تجاري",
contactEyebrow:"لنتحدث",contactTitle:"هل نصنع شيئًا <em>حلوًا؟</em>",contactText:"هل لديك استفسار عن المنتجات أو التوزيع أو التصدير؟ جهّز رسالتك عبر النموذج. أضف بيانات الاتصال التجارية الرسمية قبل نشر الموقع.",nameLabel:"الاسم",emailLabel:"البريد الإلكتروني",subjectLabel:"نوع الاستفسار",subjectProducts:"المنتجات والأسعار",subjectDistribution:"التوزيع",subjectExport:"التصدير",messageLabel:"الرسالة",prepareEmail:"إعداد البريد الإلكتروني",contactHint:"يفتح هذا النموذج تطبيق البريد الإلكتروني لديك؛ ولا يرسل البيانات إلى خادم.",footerText:"نكهة أرضنا مستعدة لعبور الحدود.",footerNote:"كتالوج تجريبي · بيانات تجارية بحاجة إلى تأكيد",legal:"الإشعار القانوني والخصوصية",
yourSelection:"اختياراتك",cartTitle:"سلة التسوق",emptyCart:"سلتك تنتظر شيئًا لذيذًا.",continueShopping:"تابع الاستكشاف ↗",subtotal:"المجموع الفرعي التقديري",shippingNote:"الشحن والضرائب غير مشمولة، وسيتم تأكيدها قبل الدفع.",checkout:"إعداد الطلب",clearCart:"إفراغ السلة",orderRequest:"طلب شراء",checkoutTitle:"خطوة أخيرة.",checkoutText:"أدخل بياناتك لإنشاء ملخص للطلب. هذا العرض التجريبي لا يقبل المدفوعات ولا يرسل الطلب تلقائيًا.",customerName:"الاسم أو الشركة",customerEmail:"البريد الإلكتروني",customerCountry:"بلد التسليم",customerAddress:"عنوان التسليم (اختياري)",generateOrder:"إنشاء ملخص الطلب",orderCreated:"تم إنشاء الملخص",copyOrder:"نسخ الملخص",orderHint:"أرسل الملخص إلى البائع عبر قناة تجارية تعتمدها الشركة. لم يتم تحصيل أي مبلغ.",
multifloral:"عسل أيبيري متعدد الأزهار",rosemary:"عسل إكليل الجبل",orange:"عسل زهر البرتقال",thyme:"عسل الزعتر",popular:"مفضل",gourmet:"فاخر",new:"نوع",add:"أضف إلى السلة",selectFormat:"الحجم",priceOnRequest:"السعر قيد التأكيد",format:"الحجم",added:"أُضيف إلى السلة",emptyCheckout:"أضف منتجًا واحدًا على الأقل إلى السلة.",copied:"تم نسخ الملخص.",copyFallback:"تعذر النسخ تلقائيًا. حدد النص وانسخه.",noEmail:"لم يتم إعداد بريد تجاري. احفظ الملخص وتواصل مع الشركة عبر قناة رسمية.",emailSubject:"استفسار إلى IBERMEL EXPORT",orderTitle:"طلب شراء — IBERMEL EXPORT",orderDate:"التاريخ",orderCustomer:"العميل",orderCountry:"البلد",orderAddress:"العنوان",orderItems:"المنتجات",orderTotal:"المجموع الفرعي التقديري",orderDisclaimer:"يجب تأكيد الشحن والضرائب والتوفر. هذه الوثيقة طلب وليست فاتورة أو تأكيد شراء.",remove:"حذف",quantity:"الكمية",currency:"EUR"
}};
let currentLang = "es";
let cart = JSON.parse(localStorage.getItem("ibermelCart") || "{}");
const $ = (s) => document.querySelector(s);
const money = (value) => new Intl.NumberFormat(currentLang==="ar"?"en-IE":currentLang==="en"?"en-IE":"es-ES",{style:"currency",currency:"EUR"}).format(value);
const t = (key) => (translations[currentLang] && translations[currentLang][key]) || translations.es[key] || key;
function applyTranslations(){
  document.documentElement.lang=currentLang;
  document.documentElement.dir=currentLang==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const value=t(el.dataset.i18n);
    if(value!==undefined) el.innerHTML=value;
  });
  $("#language").value=currentLang;
  renderProducts();renderCart();
}
function productTitle(p){return t(p.key)}
function renderProducts(){
  $("#productGrid").innerHTML=products.map(p=>{
    const price=p.price===null?`<span>${t("priceOnRequest")}</span>`:`${money(p.price)} <small>/ ${p.grams}</small>`;
    const options=products.filter(x=>x.key===p.key).map(x=>`<option value="${x.id}" ${x.id===p.id?"selected":""}>${x.grams}</option>`).join("");
    return `<article class="product-card">
      <div class="product-image"><img src="${p.image}" alt="${productTitle(p)}" loading="lazy">${p.tag?`<span class="product-tag">${t(p.tag)}</span>`:""}</div>
      <div class="product-details"><h3>${productTitle(p)}</h3><p>${productDescription(p.key)}</p>
      <div class="product-buy"><div class="product-price">${price}</div><div class="product-controls">
      <select aria-label="${t("selectFormat")}" id="format-${p.id}">${options}</select>
      <button class="add-button" data-add="${p.id}" ${p.price===null?"disabled title='Precio pendiente de confirmar'":""}>+ ${t("add")}</button></div></div></div></article>`;
  }).join("");
  document.querySelectorAll("[data-add]").forEach(btn=>btn.addEventListener("click",()=>{
    const selected=$("#format-"+btn.dataset.add).value;
    addToCart(selected);
  }));
}
function productDescription(key){
 const d={
  multifloral:{es:"Equilibrada y floral, inspirada en la diversidad de flores ibéricas.",en:"Balanced and floral, inspired by the diversity of Iberian flowers.",ar:"متوازنة وزهرية، مستوحاة من تنوع أزهار شبه الجزيرة الأيبيرية."},
  rosemary:{es:"Una variedad aromática asociada a los paisajes mediterráneos.",en:"An aromatic variety associated with Mediterranean landscapes.",ar:"نوع عطري يرتبط بمناظر البحر الأبيض المتوسط."},
  orange:{es:"Variedad prevista en el catálogo; disponibilidad y precio por confirmar.",en:"Planned catalogue variety; availability and price to be confirmed.",ar:"نوع مدرج في الخطة؛ التوفر والسعر بحاجة إلى تأكيد."},
  thyme:{es:"Variedad prevista en el catálogo; disponibilidad y precio por confirmar.",en:"Planned catalogue variety; availability and price to be confirmed.",ar:"نوع مدرج في الخطة؛ التوفر والسعر بحاجة إلى تأكيد."}
 };return d[key][currentLang]||d[key].es;
}
function saveCart(){localStorage.setItem("ibermelCart",JSON.stringify(cart));renderCart()}
function addToCart(id){
 const p=products.find(x=>x.id===id);if(!p||p.price===null)return;
 cart[id]=(cart[id]||0)+1;saveCart();showToast(`${productTitle(p)} · ${t("added")}`);
}
function cartEntries(){return Object.entries(cart).map(([id,qty])=>({p:products.find(p=>p.id===id),qty})).filter(x=>x.p&&x.qty>0)}
function renderCart(){
 const entries=cartEntries();const count=entries.reduce((sum,x)=>sum+x.qty,0);const total=entries.reduce((sum,x)=>sum+x.p.price*x.qty,0);
 $("#cartCount").textContent=count;$("#cartItems").innerHTML=entries.map(({p,qty})=>`<div class="cart-row">
 <img src="${p.image}" alt=""><div><h3>${productTitle(p)}</h3><small>${p.grams} · ${money(p.price)}</small>
 <div class="quantity-controls"><button data-qty="${p.id}" data-delta="-1" aria-label="Decrease">−</button><span>${qty}</span><button data-qty="${p.id}" data-delta="1" aria-label="Increase">+</button><button data-remove="${p.id}" aria-label="${t("remove")}" title="${t("remove")}">×</button></div></div>
 <div class="cart-line-price">${money(p.price*qty)}</div></div>`).join("");
 $("#cartEmpty").style.display=entries.length?"none":"block";$("#cartSummary").style.display=entries.length?"block":"none";$("#cartSubtotal").textContent=money(total);
 document.querySelectorAll("[data-qty]").forEach(btn=>btn.onclick=()=>{const id=btn.dataset.qty;cart[id]=(cart[id]||0)+Number(btn.dataset.delta);if(cart[id]<=0)delete cart[id];saveCart()});
 document.querySelectorAll("[data-remove]").forEach(btn=>btn.onclick=()=>{delete cart[btn.dataset.remove];saveCart()});
}
function openCart(){ $("#cartDrawer").classList.add("open");$("#cartBackdrop").classList.add("open");$("#cartDrawer").setAttribute("aria-hidden","false");document.body.classList.add("locked")}
function closeCart(){ $("#cartDrawer").classList.remove("open");$("#cartBackdrop").classList.remove("open");$("#cartDrawer").setAttribute("aria-hidden","true");document.body.classList.remove("locked")}
let toastTimer;
function showToast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2600)}
$("#language").addEventListener("change",e=>{currentLang=e.target.value;applyTranslations()});
$("#openCart").onclick=openCart;$("#closeCart").onclick=closeCart;$("#cartBackdrop").onclick=closeCart;$("#continueShopping").onclick=()=>{closeCart();$("#productos").scrollIntoView({behavior:"smooth"})};
$("#clearCart").onclick=()=>{cart={};saveCart()};
$("#checkoutButton").onclick=()=>{if(!cartEntries().length){showToast(t("emptyCheckout"));return}$("#orderResult").hidden=true;$("#checkoutDialog").showModal()};
$("#checkoutForm").addEventListener("submit",e=>{
 e.preventDefault();const data=new FormData(e.target);const entries=cartEntries();
 const lines=[t("orderTitle"),`${t("orderDate")}: ${new Date().toLocaleDateString(currentLang==="ar"?"en-GB":currentLang==="en"?"en-GB":"es-ES")}`,`${t("orderCustomer")}: ${data.get("customer")}`,`${t("customerEmail")}: ${data.get("email")}`,`${t("orderCountry")}: ${data.get("country")}`,`${t("orderAddress")}: ${data.get("address")||"—"}`,"",`${t("orderItems")}:`,...entries.map(({p,qty})=>`- ${productTitle(p)} (${p.grams}) × ${qty} = ${money(p.price*qty)}`),"",`${t("orderTotal")}: ${money(entries.reduce((sum,x)=>sum+x.p.price*x.qty,0))}`,"",t("orderDisclaimer")];
 $("#orderText").value=lines.join("\n");$("#orderResult").hidden=false;
});
$("#copyOrder").onclick=async()=>{try{await navigator.clipboard.writeText($("#orderText").value);showToast(t("copied"))}catch(e){$("#orderText").select();showToast(t("copyFallback"))}};
$("#contactForm").addEventListener("submit",e=>{
 e.preventDefault();const d=new FormData(e.target);
 const subject=`${t("emailSubject")} — ${d.get("subject")}`;
 const body=`${t("nameLabel")}: ${d.get("name")}\n${t("emailLabel")}: ${d.get("email")}\n\n${d.get("message")}`;
 const mailto=`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 window.location.href=mailto;showToast(t("noEmail"));
});
$("#menuToggle").onclick=()=>$(".main-nav").classList.toggle("open");
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>$(".main-nav").classList.remove("open")));
$("#year").textContent=new Date().getFullYear();
applyTranslations();
