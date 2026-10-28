// ---- Content ----
// Prices are in Philippine pesos. Item format: [name, note, [prices]]. A group with `c` has one price per column label.
// `pre:1` adds the group title to the booking name so duplicates (Organic/Loreal) stay unique.
const S4 = ['S', 'M', 'L', 'XL'], MW = ['Men', 'Women'], HL = 'Prices depend on hair length (S, M, L, XL).';
const CATS = [
  {
    n: 'Hair', im: 'images/svc-cuts.svg', g: [
      { t: 'Cut & style', i: [['Blow-dry with shampoo', '', [250]], ['Haircut, shampoo and blow-dry', '', [300]], ['Bangs', '', [100]]] },
      { t: 'Hair color', c: S4, nt: HL, pre: 1, i: [['Organic', '', [1000, 1500, 2000, 2300]], ['Loreal', '', [1800, 2300, 2800, 3200]]] },
      { t: 'Color services', c: ['Organic', 'Loreal'], w: '4.8rem', pre: 1, i: [['Root color', '', [700, 1200]], ['Bleach', '', [1500, 2300]], ['Highlights', '', [1200, 2200]], ['Balayage', '', [1500, 2300]]] },
      { t: 'Rebond', c: S4, nt: HL + ' Thick hair: add ₱500.', pre: 1, i: [['Organic', '', [2000, 2500, 3000, 3500]], ['Loreal', '', [2800, 3500, 3800, 4500]]] },
      { t: 'Volume rebond', c: S4, pre: 1, i: [['Organic', '', [2500, 3200, 3700, 4000]], ['Loreal', '', [3500, 4500, 4800, 5000]]] },
      { t: 'Treatments', c: S4, i: [['Cellophane', '', [999, 1299, 1599, 3500]], ['Regular keratin', '', [1000, 1200, 1500, 4500]], ['U Lady', '', [1500, 1700, 2000, 2300]], ['Bio protein straightening', '', [3000, 4000, 5000, 6000]], ['Hair spa', '', [799, 1099, 1399, 4500]], ['Classic perming', '', [1000, 1500, 2000, 2500]]] },
      { t: 'Metal detox', i: [['Metal detox', 'Any hair length.', [1499]]] }
    ]
  },
  {
    n: 'Hair packages', im: 'images/svc-color.svg', g: [
      { t: 'Organic color', c: S4, pre: 1, i: [['Color + Treatment + Cut', '', [1500, 2000, 2700, 3000]], ['Color + Cello + Cut', '', [1600, 2300, 3000, 3300]], ['Color + Cello + Treatment + Cut', '', [2000, 3200, 4000, 4500]]] },
      { t: 'Loreal color', c: S4, pre: 1, i: [['Color + Treatment + Cut', '', [2300, 3100, 3700, 4200]], ['Color + Cello + Cut', '', [2500, 3300, 4000, 4500]], ['Color + Cello + Treatment + Cut', '', [3000, 3500, 5000, 5300]]] },
      { t: 'Loreal beach color', c: S4, i: [['Bleach + Color + Cello', '', [3700, 4800, 5800, 6500]], ['Bleach + Color + Treatment', '', [3400, 4500, 5500, 6500]]] },
      { t: 'Balayage package', c: S4, i: [['Balayage + Highlights + Treatment + Metal Detox', '', [4500, 5300, 5800, 6200]]] },
      { t: 'Treatment package', c: S4, i: [['Cello + Treatment', '', [1200, 1800, 2500, 3000]]] },
      { t: 'Organic rebond', c: S4, pre: 1, i: [['Rebond + Treatment + Cut', '', [2500, 3500, 4300, 5000]], ['Rebond + Cello + Cut', '', [2700, 3700, 4500, 5200]]] },
      { t: 'Loreal rebond', c: S4, pre: 1, i: [['Rebond + Treatment + Cut', '', [3200, 4000, 4800, 5500]], ['Rebond + Cello + Cut', '', [3500, 3800, 4000, 5000]]] }
    ]
  },
  {
    n: 'Manicure, pedicure & foot spa', im: 'images/svc-nails.svg', g: [
      { t: 'Nail care', i: [['Regular manicure', '', [150]], ['Regular pedicure', '', [200]], ['Hand massage', '', [350]], ['Foot massage', '', [350]], ['Hand paraffin', '', [350]], ['Foot paraffin', '', [450]], ['Foot spa', '', [280]], ['Premium foot spa', '', [345]], ['Full package foot spa', 'Pedicure, foot scrub, foot massage and foot paraffin.', [999]]] },
      { t: 'Gel polish', nt: 'Priced by polish brand.', i: [['Gel polish: Govandi', '', [400]], ['Gel polish: Danny Coll', '', [350]], ['Gel polish: OPI', '', [500]], ['Gel polish: Apex', '', [350]]] },
      { t: 'Nail art', i: [['Nail art', 'Price depends on the design.', ['From ₱50']]] },
      { t: 'Repair & removals', i: [['Gel removal', '', [100]], ['Outside removal', '', [150]], ['Extension removal', '', [200]], ['Extension removal (outside)', '', [250]], ['Hardener, per nail', '', [35]], ['Ingrown removal (2 big toes)', '', [200]], ['Ingrown removal (3 toes up)', '', [250]]] },
      { t: 'Ear cleaning', i: [['Ear cleaning', '', [350]]] }
    ]
  },
  {
    n: 'Nail & toe extensions', im: 'images/svc-extensions.svg', g: [
      { t: 'Soft gel extensions', i: [['Short', '', [800]], ['Medium', '', [1100]], ['Long', '', [1300]], ['Extra long', '', [1500]], ['Nail hardener', '', [350]]] }
    ]
  },
  {
    n: 'Nail & foot spa packages', im: 'images/svc-footspa.svg', g: [
      { i: [['Package 1', 'Gel manicure, regular pedicure and foot spa.', [850]], ['Package 2', 'Manicure, pedicure and foot spa.', [549]], ['Package 3', 'Gel manicure, gel pedicure and foot spa.', [999]], ['Package 4', 'Manicure, pedicure, foot spa and haircut.', [899]]] }
    ]
  },
  {
    n: 'Bridal spa package', im: 'images/svc-bridal.svg', g: [
      { i: [['Bridal spa package', 'Ask us what is included and for current pricing.', ['Ask us']]] }
    ]
  },
  {
    n: 'Waxing', im: 'images/svc-waxing.svg', g: [
      { t: 'Face', c: MW, w: '4.2rem', pre: 1, i: [['Eyebrow', '', [190, 190]], ['Upper lip', '', [170, 140]], ['Lower lip', '', [170, 140]], ['Mandible', '', [170, null]], ['Mustache', '', [230, null]], ['Full face', '', [690, 390]]] },
      { t: 'Arms', c: MW, w: '4.2rem', pre: 1, i: [['Underarms', '', [290, 230]], ['Half arms', '', [640, 390]], ['Full arms', '', [890, 690]]] },
      { t: 'Body', c: MW, w: '4.2rem', pre: 1, i: [['Fingers', '', [140, 140]], ['Toes', '', [190, 190]], ['Chest', '', [500, null]], ['Back', '', [590, 500]], ['Bikini', '', [590, 490]], ['Brazilian', '', [1690, 790]], ['Full body', '', [3450, 2990]]] },
      { t: 'Legs', c: MW, w: '4.2rem', pre: 1, i: [['Thighs', '', [690, 550]], ['Lower legs', '', [690, 550]], ['Thighs & lower legs', '', [1390, 990]]] }
    ]
  },
  {
    n: 'Laser', im: 'images/svc-laser.svg', g: [
      { t: 'Diode laser hair removal', c: ['Single', '7 sessions'], w: '5rem', i: [['Upper & lower lip', '', [500, 3000]], ['Underarm', '', [700, 3500]], ['Brazilian laser', '', [1000, 6000]], ['Whole face', '', [1000, 6000]], ['Half legs', '', [1000, 6000]]] },
      { t: 'Pico laser', i: [['Pico laser', 'Ask us about treatments and pricing.', ['Ask us']]] }
    ]
  },
  {
    n: 'Eyelashes', im: 'images/svc-lashes.svg', g: [
      { i: [['Classic lash extension', '', [500]], ['Cat-eye lash extension', '', [700]], ['Wispy lash extension', '', [800]], ['Lash lift', '', [499]], ['Lash removal', '', [350]]] }
    ]
  },
  {
    n: 'Facials', im: 'images/svc-facials.svg', g: [
      { i: [['Acne facial', '', [1000]], ['Diamond facial', '', [800]], ['Hydra facial', '', [1200]], ['Blackdoll facial', '', [1300]], ['Blackdoll + Diamond facial', '', [1500]], ['Pimple injection', 'Per pimple.', [150]]] }
    ]
  },
  {
    n: 'Slimming & tightening', im: 'images/svc-slimming.svg', g: [
      { t: 'Exilis', c: ['Single', '6 sessions'], w: '5rem', i: [['Eyebags', '', [1000, 5000]], ['Face', '', [1500, 8000]], ['Double chin', '', [1500, 8000]], ['Arms', '', [2000, 11000]], ['Tummy', '', [2500, 14000]], ['Braline', '', [2500, 14000]], ['Thighs', '', [3000, 17000]]] }
    ]
  }
];
const GAL = [['Cuts', 'Layered cut', 'images/layeredcut.jpeg'], ['Color', 'Honey balayage', 'images/g02.svg'], ['Bridal', 'Bridal updo', 'images/g03.svg'], ['Cuts', 'Classic bob', 'images/Classicbob.jpeg'], ['Color', 'Rose brown color', 'images/g05.svg'], ['Bridal', 'Bridal makeup', 'images/g06.svg'], ['Cuts', 'Men’s fade', 'images/Mensfade.webp'], ['Color', 'Ash blonde', 'images/g08.svg'], ['Bridal', 'Wedding party', 'images/g09.svg'], ['Cuts', 'Long layers', 'images/Longlayer.jpg'], ['Color', 'Copper highlights', 'images/g11.svg'], ['Bridal', 'Soft curls', 'images/g12.svg']];
const SERVICES = [['Hair', 'Cuts, color, rebond, treatments and hair packages.', 'images/hair.jpeg'], ['Nails & foot spa', 'Manicure, pedicure, gel polish, extensions and packages.', 'images/nailfootspa.jpg'], ['Waxing & laser', 'Waxing for face, arms, body and legs, plus diode laser.', 'images/waxingandlaser.jpg'], ['Facials & slimming', 'Facials, lashes and Exilis slimming and tightening.', 'images/facialslimmimg.jpg']];
const HERO = [
  { k: 'Hair, nails & skin', h: 'Beauty care, <em>all in one place</em>', p: 'Hair, nails, waxing, facials and more at Goldenfield Complex, Bacolod City.', img: 'images/hairnailsskin.jpg', tag: 'The lounge' },
  { k: 'Hair', h: 'Color that <em>suits you</em>', p: 'Organic and Loreal color, balayage, highlights and rebond, priced by your hair length.', img: 'images/haircolor.webp', tag: 'Hair' },
  { k: 'Bridal', h: 'Look your best on <em>your big day</em>', p: 'Ask about our bridal spa package.', img: 'images/bridal.jpeg', tag: 'Bridal' }
];
const TESTI = [['[Review Text]: Best haircut I have had in Bacolod.', '[Client Name]'], ['[Review Text]: Friendly team and a relaxing place.', '[Client Name]'], ['[Review Text]: My color came out exactly how I wanted.', '[Client Name]']];
const TEAM = [['[Owner Name]', 'Owner & Master Stylist', 'images/team-1.svg'], ['[Team Member]', 'Senior Stylist', 'images/team-2.svg'], ['[Team Member]', 'Colorist', 'images/team-3.svg'], ['[Team Member]', 'Nail Technician', 'images/team-4.svg']];
const SLOTS = ['10:30 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:30 PM', '3:30 PM', '4:30 PM', '5:30 PM'];
const HOURS = [['Every day', '10:30 AM to 7:00 PM']];
// Booking/contact email and social page links.
const EMAIL = 'kgdevstudio@gmail.com';              // booking and contact messages are delivered here
const FB = 'https://www.facebook.com/profile.php?id=61595069246649', IG = 'https://www.instagram.com/villarandaemmanuelle/'; // paste your Facebook and Instagram page links
const PHONE = '+63 961 299 2275', TEL = 'tel:+639612992275', ADDR = 'Door 2, Goldenfield Complex, Bacolod City';
const MAP = 'https://www.google.com/maps?q=Goldenfield+Complex+Bacolod+City&output=embed';
const SOCIAL = `<a href="${FB}" target="_blank" rel="noopener">Facebook</a> · <a href="${IG}" target="_blank" rel="noopener">Instagram</a>`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
// image helper: sample image in a cropping frame
const im = (src, alt, cls = 'r45', extra = '') => `<div class="im ${cls} ${extra}"><img src="${src}" alt="${esc(alt)}" loading="lazy"></div>`;
const words = (html, n = 0) => html.split(/(<\/?em>)/).reduce((o, p) => { if (p === '<em>') o.em = true; else if (p === '</em>') o.em = false; else p.split(/\s+/).filter(Boolean).forEach(w => { o.h += `<span class="w" style="--i:${n + o.k++}">${o.em ? `<em>${w}</em>` : w}</span> ` }); return o }, { h: '', k: 0, em: false }).h.trim();
const hdr = (t) => `<div class="page-h"><div class="wrap"><h1>${words(t)}</h1></div></div>`;
const contactBlock = () => `<div class="split"><div class="rv"><span class="eyebrow">Find us</span><h2>Visit us</h2><p>${ADDR}<br><a href="${TEL}">${PHONE}</a><br>Open daily, 10:30 AM to 7:00 PM<br>${SOCIAL}</p><a class="btn" href="${TEL}">Call Us</a></div><iframe class="map rv" style="--d:150ms" title="Map to Nell’z Beauty Lounge" loading="lazy" src="${MAP}"></iframe></div>`;

const bname = (g, i) => g.pre && g.t ? g.t + ' – ' + i[0] : i[0];
const cell = (v, g, col) => {
  const lab = col ? `<span class="vh">${esc(col)}: </span>` : '';
  if (v == null) return `<span class="cell na">${lab}<span aria-hidden="true">–</span><span class="vh">Not offered</span></span>`;
  return `<span class="cell">${lab}${typeof v === 'number' ? (g.c ? '' : '₱') + v.toLocaleString('en-PH') : esc(v)}</span>`
};
const row = (g, i, k = 0) => `<div class="row${g.c && g.c.length > 2 ? ' wide' : ''}" style="--i:${Math.min(k, 9)}"><div class="nm">${esc(i[0])}${i[1] ? `<small>${esc(i[1])}</small>` : ''}</div><div class="pc">${i[2].map((v, k) => cell(v, g, g.c && g.c[k])).join('')}</div><a class="bk" href="#/book?s=${encodeURIComponent(bname(g, i))}">Book</a></div>`;
const grp = g => `<div class="grp" style="--w:${g.w || '3.6rem'}${g.c && g.c.length > 2 ? ';--n:' + g.c.length : ''}">${g.t ? `<div class="gh"><h4>${esc(g.t)}</h4>${g.c ? `<div class="pc" aria-hidden="true">${g.c.map(c => `<span class="cell">${esc(c)}</span>`).join('')}</div>` : ''}<span class="sp"></span></div>` : ''}${g.nt ? `<p class="gn">${esc(g.nt)}</p>` : ''}${g.i.map((i, k) => row(g, i, k)).join('')}</div>`;

const pages = {
  home: () => `
<section class="hero" aria-roledescription="carousel" aria-label="Featured">
 <div class="hcopy">${HERO.map((s, i) => `<div class="slide${i ? '' : ' on'}" aria-label="Slide ${i + 1} of ${HERO.length}"><div><span class="eyebrow">${s.k}</span>${i ? '<h2>' : '<h1>'}${words(s.h)}${i ? '</h2>' : '</h1>'}<p>${s.p}</p><div class="btns"><a class="btn solid" href="#/book">Book Now</a><a class="btn" href="#/services">Our Services</a></div></div></div>`).join('')}</div>
 <span class="spark" style="left:46%;top:18%">✦</span><span class="spark" style="left:6%;top:78%;--s:1.6s">✦</span><span class="spark" style="left:93%;top:12%;--s:2.4s">✦</span><div class="himgs">${HERO.map((s, i) => `<img src="${s.img}" alt="Sample image: ${esc(s.tag)}"${i ? '' : ' class="on"'}>`).join('')}<span class="tag">Sample image</span></div>
 <div class="hctl"><button class="sl-nav" aria-label="Previous slide" data-d="-1">&#8249;</button><div class="dots hdots"></div><button class="sl-nav" aria-label="Next slide" data-d="1">&#8250;</button></div>
</section>
<div class="mq" aria-hidden="true"><div>${Array(2).fill(['Hair', 'Nails', 'Waxing', 'Laser', 'Lashes', 'Facials', 'Slimming', 'Bridal'].map(w => `<span>${w}</span>`).join('')).join('')}${Array(2).fill(['Hair', 'Nails', 'Waxing', 'Laser', 'Lashes', 'Facials', 'Slimming', 'Bridal'].map(w => `<span>${w}</span>`).join('')).join('')}</div></div>
<section><div class="wrap ctr"><div class="shead rv"><span class="eyebrow">What we do</span><h2>Our Services</h2><p class="sub">Popular services at Nell’z Beauty Lounge</p></div>
 <div class="grid">${SERVICES.map(([n, d, src], i) => `<a class="card rv" style="--d:${i * 110}ms;text-decoration:none" href="#/services">${im(src, n)}<div class="in"><h3>${n}</h3><p>${d}</p></div></a>`).join('')}</div>
 <p class="rv" style="margin-top:56px"><a class="btn" href="#/services">View All Services</a></p></div></section>
<section class="alt"><div class="wrap split"><div class="rv"><span class="eyebrow">Our story</span><h2>About Nell’z</h2><p>Nell’z Beauty Lounge has been providing [X] years of exceptional hair, nail and beauty services in Bacolod City. [Short description of the salon.]</p><a class="tlink" href="#/about">Learn more</a></div>${im('og-image.png', 'Sample image: salon interior', 'r45', 'rv-img')}</div></section>
<section><div class="wrap ctr"><div class="shead rv"><span class="eyebrow">Portfolio</span><h2>Gallery</h2><p class="sub">A look at our recent work</p></div><div class="gal">${GAL.slice(0, 6).map((g, i) => `<a class="rv" style="--d:${(i % 3) * 100}ms" href="#/gallery">${im(g[2], g[1], 'r11')}<span class="cap">${esc(g[1])}</span></a>`).join('')}</div><p class="rv" style="margin-top:56px"><a class="btn" href="#/gallery">View Gallery</a></p></div></section>
<section class="dark"><div class="wrap ctr quote-wrap rv"><span class="eyebrow">Kind words</span><h2 style="margin-bottom:40px">What Clients Say</h2><div class="quote" id="tq" aria-live="polite"></div><div class="dots" id="td"></div></div></section>
<section><div class="wrap">${contactBlock()}</div></section>`,

  about: () => `${hdr('About Us')}
<section style="padding-top:60px"><div class="wrap split"><div class="rv"><span class="eyebrow">Since [Year]</span><h2>Our Story</h2><p>Nell’z Beauty Lounge was founded in [Year] by [Owner Name]. We started with a simple, clear mission: to bridge the gap between businesses and their ideal audience through exceptional web design. We noticed that too many amazing local brands, creators, and growing enterprises were being held back by outdated, slow, or complicated websites that didn't reflect their true value.</p></div>${im('images/about-story.svg', 'Sample image: salon interior or team photo', 'r45', 'rv-img')}</div></section>
<section class="alt"><div class="wrap"><div class="shead ctr rv"><span class="eyebrow">Principles</span><h2>Mission & Vision</h2></div><div class="grid g2" style="gap:64px"><div class="rv"><h3>Mission</h3><p style="margin-top:12px;color:var(--ink-soft)">To bridge the gap between businesses and their ideal audience by crafting custom, lightning-fast, and user-friendly websites. We are committed to turning digital visions into tangible growth through expert design, SEO optimization, and dedicated ongoing support.</p></div><div class="rv" style="--d:120ms"><h3>Vision</h3><p style="margin-top:12px;color:var(--ink-soft)">To be the leading digital partner for businesses of all sizes, empowering every brand to establish a powerful, high-performing, and enduring online presence.</p></div></div></div></section>
<section><div class="wrap ctr"><div class="shead rv"><span class="eyebrow">The people</span><h2>Meet the Team</h2></div><div class="grid">${TEAM.map((t, i) => `<div class="card t rv" style="--d:${i * 110}ms">${im(t[2], 'Sample portrait of ' + t[0], 'r11')}<div class="in"><h3 style="font-size:1.35rem">${t[0]}</h3><p>${t[1]}</p></div></div>`).join('')}</div></div></section>`,

  services: () => `${hdr('Our Services')}<section style="padding-top:60px"><div class="wrap" style="max-width:860px"><p class="sub rv" style="margin:0 auto 48px;text-align:center">All prices are in Philippine pesos (₱) and may change without notice. Ask us about current promotions.</p>${CATS.map((c, k) => `<div class="acc rv" style="--d:${k * 40}ms"><button aria-expanded="${k == 0}" aria-controls="p${k}" id="b${k}"><span class="ttl"><span class="th"><img src="${c.im}" alt="Sample image: ${esc(c.n)}" loading="lazy"></span>${c.n}</span><span class="pm" aria-hidden="true"></span></button><div class="pw${k == 0 ? ' open' : ''}"><div class="pn" id="p${k}" role="region" aria-labelledby="b${k}" ${k ? 'inert' : ''}>${c.g.map(grp).join('')}</div></div></div>`).join('')}</div></section>`,

  gallery: () => `${hdr('Gallery')}<section style="padding-top:60px"><div class="wrap"><div class="tabs" role="group" aria-label="Filter gallery">${['All', 'Cuts', 'Color', 'Bridal'].map((c, i) => `<button data-c="${c}" aria-pressed="${!i}">${c}</button>`).join('')}</div><div class="gal" id="gal"></div></div></section>
<div class="lb" role="dialog" aria-modal="true" aria-label="Image viewer"><button class="x" aria-label="Close">&times;</button><button class="l" aria-label="Previous image">&#8249;</button><figure id="lbi"></figure><button class="rr" aria-label="Next image">&#8250;</button></div>`,

  contact: () => `${hdr('Contact Us')}<section style="padding-top:60px"><div class="wrap split" style="align-items:start"><div class="rv"><h2>Send a message</h2><form id="cf" novalidate style="margin-top:28px">
 <label>Name<input name="n" autocomplete="name" required></label><label>Email<input name="e" type="email" autocomplete="email" required></label>
 <label>Phone<input name="p" type="tel" autocomplete="tel"></label><label>Message<textarea name="m" rows="4" required></textarea></label>
 <div><button class="btn solid" type="submit">Send Message</button></div><p class="err" id="ce" role="alert"></p></form><div id="co"></div></div>
 <div class="rv" style="--d:120ms"><h2>Business hours</h2><table style="margin:28px 0 28px">${HOURS.map(h => `<tr><td>${h[0]}</td><td>${h[1]}</td></tr>`).join('')}</table><p>${ADDR}<br><a href="${TEL}">${PHONE}</a><br>${SOCIAL}</p></div></div></section>
<section class="alt"><div class="wrap rv"><iframe class="map" title="Map to Nell’z Beauty Lounge" loading="lazy" src="${MAP}"></iframe></div></section>`,

  book: q => {
    const s = new URLSearchParams(q).get('s'); return `${hdr('Book an Appointment')}<section style="padding-top:60px"><div class="wrap rv" style="max-width:620px"><form id="bf" novalidate>
 <label>Service<select name="s" required><option value="">Select a service</option>${CATS.map(c => `<optgroup label="${c.n}">${c.g.flatMap(g => g.i.map(i => bname(g, i))).map(n => `<option ${n == s ? 'selected' : ''}>${esc(n)}</option>`).join('')}</optgroup>`).join('')}</select></label>
 <div class="row2"><label>Date<input name="d" type="date" min="${new Date().toISOString().slice(0, 10)}" required></label><label>Time<select name="t" required><option value="">Select a time</option>${SLOTS.map(t => `<option>${t}</option>`).join('')}</select></label></div>
 <div class="row2"><label>Full name<input name="n" autocomplete="name" required></label><label>Phone<input name="p" type="tel" autocomplete="tel" required></label></div>
 <label>Notes (optional)<textarea name="x" rows="3"></textarea></label><div><button class="btn solid" type="submit">Request Booking</button></div><p class="err" id="be" role="alert"></p></form><div id="bo"></div></div></section>`},

  notfound: () => `${hdr('Page not found')}<section style="padding-top:40px"><div class="wrap ctr"><p class="sub" style="margin-bottom:32px">We couldn’t find that page.</p><a class="btn" href="#/">Back to Home</a></div></section>`
};

// ---- Router ----
const main = document.getElementById('main'); let timers = [];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .12, rootMargin: '0px 0px -6% 0px' }) : null;
function reveal() { document.querySelectorAll('.rv,.rv-img').forEach(el => io && !reduce ? io.observe(el) : el.classList.add('in')) }
function route() {
  timers.forEach(clearInterval); timers = [];
  const [p, q = ''] = (location.hash.slice(2) || 'home').split('?');
  const key = p === '' ? 'home' : p; const ok = pages[key] && key !== 'notfound';
  main.style.animation = 'none'; void main.offsetWidth; main.style.animation = '';
  main.innerHTML = (ok ? pages[key] : pages.notfound)(q);
  document.querySelectorAll('nav a').forEach(a => a.classList.toggle('on', ok && a.dataset.r === key && !a.classList.contains('btn')));
  document.title = (ok && key !== 'home' ? key[0].toUpperCase() + key.slice(1) + ' | ' : '') + 'Nell’z Beauty Lounge';
  closeNav(); window.scrollTo(0, 0);
  ({ home: initHome, services: initServices, gallery: initGallery, contact: initContact, book: initBook })[ok ? key : '']?.();
  reveal();
}
const nav = document.getElementById('nav'), bg = document.querySelector('.burger'), hd = document.getElementById('hdr');
function closeNav() { nav.classList.remove('open'); bg.setAttribute('aria-expanded', 'false') }
bg.onclick = () => bg.setAttribute('aria-expanded', nav.classList.toggle('open'));
const prog = document.getElementById('prog');
addEventListener('scroll', () => { hd.classList.toggle('scrolled', scrollY > 24); const h = document.documentElement.scrollHeight - innerHeight; prog.style.transform = `scaleX(${h > 0 ? Math.min(scrollY / h, 1) : 0})` }, { passive: true });

function carousel(count, show, dotsEl) {
  let i = 0; const dots = dotsEl; dots.classList.toggle('still', reduce);
  dots.innerHTML = Array.from({ length: count }, (_, k) => `<button aria-label="Go to ${k + 1}"></button>`).join('');
  const go = n => { i = (n + count) % count; show(i);[...dots.children].forEach((d, k) => d.setAttribute('aria-current', k === i)) };
  let t; const auto = () => { clearInterval(t); if (!reduce) { t = setInterval(() => go(i + 1), 5000); timers.push(t) } };
  [...dots.children].forEach((d, k) => d.onclick = () => { go(k); auto() }); go(0); auto();
  return d => { go(i + d); auto() };
}
function initHome() {
  const sl = [...document.querySelectorAll('.slide')], imgs = [...document.querySelectorAll('.himgs img')];
  const step = carousel(sl.length, i => { sl.forEach((s, k) => s.classList.toggle('on', k === i)); imgs.forEach((m, k) => { m.classList.remove('on'); if (k === i) { void m.offsetWidth; m.classList.add('on') } }) }, document.querySelector('.hdots'));
  document.querySelectorAll('.sl-nav').forEach(b => b.onclick = () => step(+b.dataset.d));
  const tq = document.getElementById('tq');
  carousel(TESTI.length, i => { tq.style.animation = 'none'; void tq.offsetWidth; tq.style.animation = ''; tq.innerHTML = `<p>“${esc(TESTI[i][0])}”</p><b>${esc(TESTI[i][1])}</b>` }, document.getElementById('td'));
}
function initServices() {
  document.querySelectorAll('.acc>button').forEach(b => b.onclick = () => {
    const open = b.getAttribute('aria-expanded') === 'true'; b.setAttribute('aria-expanded', !open);
    const pn = document.getElementById(b.getAttribute('aria-controls')); pn.parentElement.classList.toggle('open', !open); pn.inert = open
  });
}
function initGallery() {
  const g = document.getElementById('gal'), lb = document.querySelector('.lb'); let list = [], cur = 0;
  const draw = c => {
    list = GAL.map((x, i) => [...x, i]).filter(x => c === 'All' || x[0] === c);
    g.innerHTML = list.length ? list.map((x, k) => `<button style="--i:${k}" data-k="${k}" aria-label="Open ${esc(x[1])}">${im(x[2], x[1], 'r11')}<span class="cap">${esc(x[1])}</span></button>`).join('') : '<p>No images yet.</p>';
    g.querySelectorAll('button').forEach(b => b.onclick = () => { cur = +b.dataset.k; show(); lb.classList.add('on'); lb.querySelector('.x').focus() })
  };
  const show = () => { const x = list[cur]; document.getElementById('lbi').innerHTML = `${im(x[2], x[1], 'r11')}<figcaption>${esc(x[1])}</figcaption>` };
  const mv = d => { cur = (cur + d + list.length) % list.length; show() };
  lb.querySelector('.l').onclick = () => mv(-1); lb.querySelector('.rr').onclick = () => mv(1);
  const close = () => lb.classList.remove('on'); lb.querySelector('.x').onclick = close; lb.onclick = e => { if (e.target === lb) close() };
  document.onkeydown = e => { if (!lb.classList.contains('on')) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') mv(-1); if (e.key === 'ArrowRight') mv(1) };
  document.querySelectorAll('.tabs button').forEach(b => b.onclick = () => { document.querySelectorAll('.tabs button').forEach(x => x.setAttribute('aria-pressed', x === b)); draw(b.dataset.c) });
  draw('All');
}
async function send(subject, fields) {
  // Delivers to Gmail through FormSubmit (no server needed). The first submission sends a one-time activation email to EMAIL.
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(EMAIL) || /^YOUR_/.test(EMAIL)) throw new Error('setup');
  if (location.protocol === 'file:') throw new Error('file');
  const r = await fetch('https://formsubmit.co/ajax/' + EMAIL, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ _subject: subject, _template: 'table', ...fields }) });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || j.success === false || j.success === 'false') { console.error('FormSubmit refused the request:', r.status, j); throw new Error('send') }
}
function formHandler(id, errId, okId, check, okHtml, pack) {
  const f = document.getElementById(id), btn = f.querySelector('button[type=submit]'), err = document.getElementById(errId);
  f.onsubmit = async e => {
    e.preventDefault(); const d = Object.fromEntries(new FormData(f)); const m = check(d);
    err.textContent = m || ''; if (m) return;
    btn.disabled = true; const label = btn.textContent; btn.textContent = 'Sending…';
    const [subject, fields] = pack(d);
    try {
      await send(subject, fields);
      f.hidden = true; document.getElementById(okId).innerHTML = `<div class="ok">${okHtml(d)}</div>`;
    } catch (x) {
      console.error('Form send failed:', x);
      const body = Object.entries(fields).filter(([k]) => k[0] !== '_').map(([k, v]) => k + ': ' + v).join('\n');
      const mail = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      err.innerHTML = `We could not send your request online. <a href="${mail}">Send it by email instead</a> or call <a href="${TEL}">${PHONE}</a>.`;
      btn.disabled = false; btn.textContent = label
    }
  };
}
function initContact() { formHandler('cf', 'ce', 'co', d => (!d.n.trim() || !/\S+@\S+\.\S+/.test(d.e) || !d.m.trim()) ? 'Enter your name, a valid email and a message.' : '', d => `<h3>Message sent</h3><p>We will reply to ${esc(d.e)} soon.</p>`, d => ['Website message from ' + d.n, { Name: d.n, Email: d.e, Phone: d.p || '-', Message: d.m, _replyto: d.e }]) }
function initBook() { formHandler('bf', 'be', 'bo', d => (!d.s || !d.d || !d.t || !d.n.trim() || !d.p.trim()) ? 'Choose a service, date and time, then enter your name and phone.' : '', d => `<h3>Request received</h3><p>Thanks, ${esc(d.n)}. We will confirm ${esc(d.s)} on ${esc(d.d)} at ${esc(d.t)} by phone.</p>`, d => ['Booking request: ' + d.s + ', ' + d.d + ' ' + d.t, { Service: d.s, Date: d.d, Time: d.t, Name: d.n, Phone: d.p, Notes: d.x || '-' }]) }
document.getElementById('fb').href = FB; document.getElementById('ig').href = IG;
document.getElementById('yr').textContent = new Date().getFullYear();
addEventListener('hashchange', route); route();
