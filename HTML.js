<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<style>
body{
 margin:0;
 font-family:'Poppins',sans-serif;
 background:linear-gradient(180deg,#0a0a0a,#1a0000);
 color:#fff;
}

header{
 position:sticky;
 top:0;
 background:rgba(0,0,0,0.8);
 padding:15px;
 text-align:center;
 font-size:22px;
}

.tabs{
 display:flex;
 overflow-x:auto;
 background:#000;
}
.tab{
 flex:1;
 padding:10px;
 text-align:center;
 cursor:pointer;
 margin:5px;
 background:#111;
 border-radius:10px;
}
.tab.active{background:#b71c1c;}

.section{display:none;padding:15px;}
.section.active{display:block;}

.item{
 background:rgba(255,255,255,0.05);
 padding:14px;
 margin-bottom:10px;
 border-radius:12px;
 display:flex;
 justify-content:space-between;
 cursor:pointer;
 border:1px solid rgba(255,0,0,0.2);
}
.item:hover{background:rgba(255,0,0,0.15);}

.price{color:#ffcc80;}

h3{color:#ff5252;}

.modal{
 display:none;
 position:fixed;
 top:0;left:0;
 width:100%;height:100%;
 background:rgba(0,0,0,0.85);
 justify-content:center;
 align-items:center;
}
.modal-box{
 background:#111;
 padding:20px;
 border-radius:12px;
 text-align:center;
}
button{
 background:#b71c1c;
 color:white;
 border:none;
 padding:10px;
 border-radius:8px;
}
</style>

<script>
function showTab(id, el){
 document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
 document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
 document.getElementById(id).classList.add('active');
 el.classList.add('active');
}

function openModal(name,price){
 document.getElementById('title').innerText=name;
 document.getElementById('price').innerText=price;
 document.getElementById('modal').style.display='flex';
}

function closeModal(){
 document.getElementById('modal').style.display='none';
}
</script>
</head>

<body>

<header>🍕 Flysta Pizzeria</header>

<div class="tabs">
<div class="tab active" onclick="showTab('pizza', this)">Pizza</div>
<div class="tab" onclick="showTab('pasta', this)">Pasta</div>
<div class="tab" onclick="showTab('sallad', this)">Sallad</div>
<div class="tab" onclick="showTab('grill', this)">Grill</div>
<div class="tab" onclick="showTab('smash', this)">Smash Burgare</div>
</div>

<!-- PIZZA -->
<div id="pizza" class="section active">

<h3>Klass 1 (135 kr)</h3>
<div class="item" onclick="openModal('1. Margherita','135 kr')">1. Margherita <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('2. Vesuvio','135 kr')">2. Vesuvio <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('3. Funghi','135 kr')">3. Funghi <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('4. Capricciosa','135 kr')">4. Capricciosa <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('5. Calzone','135 kr')">5. Calzone <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('6. Bussola','135 kr')">6. Bussola <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('7. Marinara','135 kr')">7. Marinara <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('8. Opera','135 kr')">8. Opera <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('9. Hawaii','135 kr')">9. Hawaii <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('10. Curry','135 kr')">10. Curry <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('11. Salami','135 kr')">11. Salami <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('12. Vegetarisk','135 kr')">12. Vegetarisk <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('13. Taco','135 kr')">13. Taco <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('14. Rosa Pantern','135 kr')">14. Rosa Pantern <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('15. Jasmin','135 kr')">15. Jasmin <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('16. Napolitana','135 kr')">16. Napolitana <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('17. Pompei','135 kr')">17. Pompei <span class="price">135 kr</span></div>
<div class="item" onclick="openModal('18. Husets special','135 kr')">18. Husets special <span class="price">135 kr</span></div>

<h3>Klass 2 (140 kr)</h3>
<div class="item" onclick="openModal('19. English breakfast','140 kr')">19. English breakfast</div>
<div class="item" onclick="openModal('20. Kyckling curry','140 kr')">20. Kyckling curry</div>
<div class="item" onclick="openModal('21. Solvalla','140 kr')">21. Solvalla</div>
<div class="item" onclick="openModal('22. Pilotens','140 kr')">22. Pilotens</div>
<div class="item" onclick="openModal('23. Calzone special','140 kr')">23. Calzone special</div>
<div class="item" onclick="openModal('24. Strindberg','140 kr')">24. Strindberg</div>
<div class="item" onclick="openModal('25. Sundby','140 kr')">25. Sundby</div>
<div class="item" onclick="openModal('26. Ciao Ciao','140 kr')">26. Ciao Ciao</div>
<div class="item" onclick="openModal('27. Diff','140 kr')">27. Diff</div>
<div class="item" onclick="openModal('28. Bajen','140 kr')">28. Bajen</div>
<div class="item" onclick="openModal('29. Mamma Mia','140 kr')">29. Mamma Mia</div>
<div class="item" onclick="openModal('30. Freden','140 kr')">30. Freden</div>
<div class="item" onclick="openModal('31. Prinsessan','140 kr')">31. Prinsessan</div>
<div class="item" onclick="openModal('32. Hasses Special','140 kr')">32. Hasses Special</div>

<h3>Klass 3 (145 kr)</h3>
<div class="item" onclick="openModal('33. Spånga','145 kr')">33. Spånga</div>
<div class="item" onclick="openModal('34. Gorgonzola','145 kr')">34. Gorgonzola</div>
<div class="item" onclick="openModal('35. Quattro stagioni','145 kr')">35. Quattro stagioni</div>
<div class="item" onclick="openModal('36. AIK','145 kr')">36. AIK</div>
<div class="item" onclick="openModal('37. Mexican','145 kr')">37. Mexican</div>
<div class="item" onclick="openModal('38. Målarens','145 kr')">38. Målarens</div>
<div class="item" onclick="openModal('39. Rörmokarens','145 kr')">39. Rörmokarens</div>
<div class="item" onclick="openModal('40. Pesto','145 kr')">40. Pesto</div>
<div class="item" onclick="openModal('41. Kyckling pizza','145 kr')">41. Kyckling pizza</div>
<div class="item" onclick="openModal('42. Chiara','145 kr')">42. Chiara</div>
<div class="item" onclick="openModal('43. Laura','145 kr')">43. Laura</div>
<div class="item" onclick="openModal('44. Alberta','145 kr')">44. Alberta</div>
<div class="item" onclick="openModal('45. Juliana','145 kr')">45. Juliana</div>
<div class="item" onclick="openModal('46. Cludia','145 kr')">46. Cludia</div>
<div class="item" onclick="openModal('47. Bianca','145 kr')">47. Bianca</div>
<div class="item" onclick="openModal('48. Amanda','145 kr')">48. Amanda</div>
<div class="item" onclick="openModal('49. Gabriella','145 kr')">49. Gabriella</div>
<div class="item" onclick="openModal('50. Dubbel calzone','145 kr')">50. Dubbel calzone</div>
<div class="item" onclick="openModal('51. Mitcho','145 kr')">51. Mitcho</div>
<div class="item" onclick="openModal('52. Nonna','145 kr')">52. Nonna</div>
<div class="item" onclick="openModal('53. Indiano','145 kr')">53. Indiano</div>
<div class="item" onclick="openModal('54. Bele','145 kr')">54. Bele</div>
<div class="item" onclick="openModal('55. Bergshamra','145 kr')">55. Bergshamra</div>

<h3>Klass 4 (150 kr)</h3>
<div class="item" onclick="openModal('56. Renees','150 kr')">56. Renees</div>
<div class="item" onclick="openModal('57. Pepperoni','150 kr')">57. Pepperoni</div>
<div class="item" onclick="openModal('58. Flysta special','150 kr')">58. Flysta special</div>
<div class="item" onclick="openModal('59. Barkaby','150 kr')">59. Barkaby</div>
<div class="item" onclick="openModal('60. Vällingby','150 kr')">60. Vällingby</div>
<div class="item" onclick="openModal('61. Gormet','150 kr')">61. Gormet</div>
<div class="item" onclick="openModal('62. Haga','150 kr')">62. Haga</div>
<div class="item" onclick="openModal('63. Världsmästare','150 kr')">63. Världsmästare</div>
<div class="item" onclick="openModal('64. Bromma','150 kr')">64. Bromma</div>
<div class="item" onclick="openModal('65. Padre','150 kr')">65. Padre</div>
<div class="item" onclick="openModal('66. Läkarens','150 kr')">66. Läkarens</div>
<div class="item" onclick="openModal('67. Kebabpizza','150 kr')">67. Kebabpizza</div>
<div class="item" onclick="openModal('68. La polisen','150 kr')">68. La polisen</div>
<div class="item" onclick="openModal('69. Viking special','150 kr')">69. Viking special</div>
<div class="item" onclick="openModal('70. Sg-99','150 kr')">70. Sg-99</div>
<div class="item" onclick="openModal('71. Bromsten','150 kr')">71. Bromsten</div>
<div class="item" onclick="openModal('72. Duvbo','150 kr')">72. Duvbo</div>
<div class="item" onclick="openModal('73. Västkustspizza','150 kr')">73. Västkustspizza</div>
<div class="item" onclick="openModal('74. Hässelby special','150 kr')">74. Hässelby special</div>
<div class="item" onclick="openModal('75. Eneby','150 kr')">75. Eneby</div>
<div class="item" onclick="openModal('76. Vinsta','150 kr')">76. Vinsta</div>
<div class="item" onclick="openModal('77. Råcksta','150 kr')">77. Råcksta</div>
<div class="item" onclick="openModal('78. Nälsta','150 kr')">78. Nälsta</div>
<div class="item" onclick="openModal('79. Dejavu','150 kr')">79. Dejavu</div>
<div class="item" onclick="openModal('80. Peppes','150 kr')">80. Peppes</div>
<div class="item" onclick="openModal('81. Don Gijoteskinka','150 kr')">81. Don Gijoteskinka</div>
<div class="item" onclick="openModal('82. Rami','150 kr')">82. Rami</div>
<div class="item" onclick="openModal('83. Tefat','150 kr')">83. Tefat</div>

</div>

<!-- PASTA -->
<div id="pasta" class="section">
<h3>Pasta (150 kr)</h3>
<div class="item" onclick="openModal('Lasagne','150 kr')">1. Lasagne</div>
<div class="item" onclick="openModal('Rigatoni Al Pollo','150 kr')">2. Rigatoni Al Pollo</div>
<div class="item" onclick="openModal('Fettuccine Gorgonzola','150 kr')">3. Fettuccine Gorgonzola</div>
<div class="item" onclick="openModal('Carbonara','150 kr')">4. Carbonara</div>
<div class="item" onclick="openModal('Bolognese','150 kr')">5. Bolognese</div>
<div class="item" onclick="openModal('Avocado Pasta','150 kr')">6. Avocado Pasta</div>
<div class="item" onclick="openModal('Vegetarisk Pasta','150 kr')">7. Vegetarisk Pasta</div>
<div class="item" onclick="openModal('Cannelloni Spenat','150 kr')">8. Cannelloni Spenat</div>
<div class="item" onclick="openModal('Cannelloni Kött','150 kr')">9. Cannelloni Kött</div>
<div class="item" onclick="openModal('Pasta Pollo','150 kr')">10. Pasta Pollo</div>
<div class="item" onclick="openModal('La Gorgonzola','150 kr')">11. La Gorgonzola</div>
<div class="item" onclick="openModal('Choni Mino','150 kr')">12. Choni Mino</div>
<div class="item" onclick="openModal('Paradiso','150 kr')">13. Paradiso</div>
<div class="item" onclick="openModal('Carpaccio','150 kr')">14. Carpaccio</div>
<div class="item" onclick="openModal('Alamania','150 kr')">15. Alamania</div>
<div class="item" onclick="openModal('Pasta Delizie','150 kr')">16. Pasta Delizie</div>
<div class="item" onclick="openModal('Rigatoni Filetto','150 kr')">17. Rigatoni Filetto</div>
<div class="item" onclick="openModal('Frutti di Mare','150 kr')">18. Frutti di Mare</div>
<div class="item" onclick="openModal('Rigatoni Parmo','150 kr')">19. Rigatoni Parmo</div>
</div>

<!-- SALLAD -->
<div id="sallad" class="section">
<h3>Sallader (140 kr)</h3>
<div class="item" onclick="openModal('Felix pappa sallad','140 kr')">1. Felix pappa sallad</div>
<div class="item" onclick="openModal('Den där goda','140 kr')">2. Den där goda</div>
<div class="item" onclick="openModal('Kebabsallad','140 kr')">3. Kebabsallad</div>
<div class="item" onclick="openModal('Räksallad','140 kr')">4. Räksallad</div>
<div class="item" onclick="openModal('Kycklingsallad','140 kr')">5. Kycklingsallad</div>
<div class="item" onclick="openModal('Skaldjursallad','140 kr')">6. Skaldjursallad</div>
<div class="item" onclick="openModal('Tonfisksallad','140 kr')">7. Tonfisksallad</div>
<div class="item" onclick="openModal('Skinksallad','140 kr')">8. Skinksallad</div>
<div class="item" onclick="openModal('Vegetarisk sallad','140 kr')">9. Vegetarisk sallad</div>
<div class="item" onclick="openModal('Grekisk sallad','140 kr')">10. Grekisk sallad</div>
<div class="item" onclick="openModal('Köttbullssallad','140 kr')">11. Köttbullssallad</div>
<div class="item" onclick="openModal('Husets sallad','140 kr')">12. Husets sallad</div>
<div class="item" onclick="openModal('Avocadosallad','140 kr')">13. Avocadosallad</div>
<div class="item" onclick="openModal('Krabbsallad','140 kr')">14. Krabbsallad</div>
<div class="item" onclick="openModal('Dennis Special','140 kr')">15. Dennis Special</div>
<div class="item" onclick="openModal('Malin Special','140 kr')">16. Malin Special</div>
<div class="item" onclick="openModal('Mixis Sallad','140 kr')">17. Mixis Sallad</div>
<div class="item" onclick="openModal('Vestfold Sallad','140 kr')">18. Vestfold Sallad</div>
<div class="item" onclick="openModal('Juventus Sallad','140 kr')">19. Juventus Sallad</div>
<div class="item" onclick="openModal('Pastasallad','140 kr')">20. Pastasallad</div>

<h3>Dressingar</h3>
<p style="opacity:0.7;">
Rhode Island, Vinägerolja, Vitlöksås, Blue Cheese, Creme Fraiche, Curry Dressing
</p>
</div>

<!-- GRILL -->
<div id="grill" class="section">

<h3>Kebab</h3>
<div class="item" onclick="openModal('Kebab med bröd','120 kr')">Kebab med bröd <span class="price">120 kr</span></div>
<div class="item" onclick="openModal('Kebabtallrik','140 kr')">Kebabtallrik med strips/ris <span class="price">140 kr</span></div>
<div class="item" onclick="openModal('Kebabrulle','140 kr')">Kebabrulle <span class="price">140 kr</span></div>

<h3>Gyros</h3>
<div class="item" onclick="openModal('Gyros med bröd','120 kr')">Gyros med bröd <span class="price">120 kr</span></div>
<div class="item" onclick="openModal('Gyros med pommes','140 kr')">Gyros med pommes/ris <span class="price">140 kr</span></div>
<div class="item" onclick="openModal('Gyrossallad','140 kr')">Gyrossallad <span class="price">140 kr</span></div>
<div class="item" onclick="openModal('Gyrosrulle','140 kr')">Gyrosrulle <span class="price">140 kr</span></div>
<div class="item" onclick="openModal('Gyrospizza','150 kr')">Gyrospizza <span class="price">150 kr</span></div>

<h3>Burgare</h3>
<div class="item" onclick="openModal('Hamburgare 90g','100 kr')">Hamburgare 90g <span class="price">100 kr</span></div>
<div class="item" onclick="openModal('Hamburgare 150g','110 kr')">Hamburgare 150g <span class="price">110 kr</span></div>
<div class="item" onclick="openModal('Hamburgare 200g','120 kr')">Hamburgare 200g <span class="price">120 kr</span></div>

<h3>Falafel</h3>
<div class="item" onclick="openModal('Falafel med bröd','120 kr')">Falafel med bröd <span class="price">120 kr</span></div>
<div class="item" onclick="openModal('Falafeltallrik','140 kr')">Falafeltallrik med strips/ris <span class="price">140 kr</span></div>
<div class="item" onclick="openModal('Falafelrulle','140 kr')">Falafelrulle <span class="price">140 kr</span></div>
<div class="item" onclick="openModal('Falafelsallad','140 kr')">Falafelsallad <span class="price">140 kr</span></div>

<h3>Kötträtter</h3>
<div class="item" onclick="openModal('Lövbiff','170 kr')">Lövbiff <span class="price">170 kr</span></div>
<div class="item" onclick="openModal('Grillbiff','180 kr')">Grillbiff <span class="price">180 kr</span></div>
<div class="item" onclick="openModal('Rödspätta','140 kr')">Rödspätta med pommes/ris <span class="price">140 kr</span></div>

<h3>Annat gott</h3>
<div class="item" onclick="openModal('Hemlagat bröd','20 kr')">Hemlagat bröd <span class="price">20 kr</span></div>
<div class="item" onclick="openModal('Pommes','50 kr')">Pommes pack <span class="price">50 kr</span></div>
<div class="item" onclick="openModal('Vitlöksbröd','40 kr')">Vitlöksbröd <span class="price">40 kr</span></div>

<h3>Såser & dressingar</h3>
<div class="item" onclick="openModal('Såser','15 kr')">
Rhode Island / Vinägerolja / Bearnaisesås / Vitlök / Blue Cheese / Creme Fraiche / Curry
<span class="price">15 kr</span>
</div>

<h3>Dryck</h3>
<div class="item" onclick="openModal('33cl läsk','20 kr')">33cl <span class="price">20 kr</span></div>
<div class="item" onclick="openModal('50cl läsk','25 kr')">50cl <span class="price">25 kr</span></div>
<div class="item" onclick="openModal('2L läsk','40 kr')">2L <span class="price">40 kr</span></div>

</div>
</div>

<!-- SMASH -->
<div id="smash" class="section">

<h3>Smash Burgare Meny</h3>
<p style="opacity:0.8;">
100g 135:- • 200g 149:- • 300g 169:-
</p>

<div class="item" onclick="openModal('Cheese burger','135–169 kr')">Cheese burger <span class="price">135–169 kr</span></div>
<div class="item" onclick="openModal('Flysta special','135–169 kr')">Flysta special <span class="price">135–169 kr</span></div>
<div class="item" onclick="openModal('King burger','135–169 kr')">King burger <span class="price">135–169 kr</span></div>
<div class="item" onclick="openModal('Cheddar smash burger','135–169 kr')">Cheddar smash burger <span class="price">135–169 kr</span></div>
<div class="item" onclick="openModal('Tryffel delux','135–169 kr')">Tryffel delux <span class="price">135–169 kr</span></div>
<div class="item" onclick="openModal('Chipotles burger','135–169 kr')">Chipotles burger <span class="price">135–169 kr</span></div>
<div class="item" onclick="openModal('Ost & bacon burger','135–169 kr')">Ost & bacon burger <span class="price">135–169 kr</span></div>
<div class="item" onclick="openModal('Aioli smash','135–169 kr')">Aioli smash <span class="price">135–169 kr</span></div>
<div class="item" onclick="openModal('Hasses hot burger','135–169 kr')">Hasses hot burger <span class="price">135–169 kr</span></div>
<div class="item" onclick="openModal('BBQ burger','135–169 kr')">BBQ burger <span class="price">135–169 kr</span></div>

</div>

<!-- MODAL -->
<div id="modal" class="modal" onclick="closeModal()">
<div class="modal-box" onclick="event.stopPropagation()">
<h2 id="title"></h2>
<p id="price"></p>
<button onclick="closeModal()">Stäng</button>
</div>
</div>

</body>
</html>
