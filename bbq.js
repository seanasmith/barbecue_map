
//Show the popup
var showPopup = function(event) {


//content for popup
  var titleText = event.srcElement.attributes['data-title'].value;
  var paragraphText1 = event.srcElement.attributes['data-paragraph'].value;
  var paragraphText2 = event.srcElement.attributes['data-paragraph-2'].value;
  var jointsParagraphText = event.srcElement.attributes['data-joints'].value;
  var imageSource = event.srcElement.attributes['data-image'].value;



//popup and prePopup
  var popup = document.getElementById('popup');

  var prePopup = document.getElementById('pre-popup')


//change popup content to data values
  var title = document.querySelector('#popup h3');
  title.innerHTML = '<span>' + titleText + '</span>';//concatenate to add underline to header

  var paragraph1 = document.querySelector('#popup p.text');
  paragraph1.innerHTML = paragraphText1;

  var paragraph2 = document.querySelector('#popup p.text-2');
  paragraph2.innerHTML = paragraphText2;

  var jointsParagraph = document.querySelector('#popup p.text-3');
  jointsParagraph.innerHTML = jointsParagraphText;

  var image = document.querySelector('#popup img');
  image.setAttribute('src', imageSource);

  popup.setAttribute('class', 'visible');
  prePopup.setAttribute('class', 'hidden');

  event.preventDefault();

}

//call the element from the DOM
var clickMapPoint = document.querySelectorAll('.region');

//two event listeners: mouseover and out
for (var i = 0; i < clickMapPoint.length; i++) {
  clickMapPoint[i].addEventListener('click', showPopup, false);
}

//Hide the popup
var hidePopup = function(event) {

  var popup = document.getElementById('popup');
  popup.removeAttribute('class');

  var prePopup = document.getElementById('pre-popup');
  prePopup.setAttribute('class', 'back');

  event.preventDefault();

}

//call the element from the DOM
var clearPopup = document.querySelectorAll('.clear');

//two event listeners: mouseover and out
for (var i = 0; i < clearPopup.length; i++) {
  clearPopup[i].addEventListener('click', hidePopup, false);
}

//scroll popup up

//write the function

var movePopupUp = function(event) {
  var popup = document.getElementById('popup');
  popup.setAttribute('class', 'visible-moved')
}

//call the element from the document
var scrollDivUp = document.getElementById('move-up');

//add addEventListener
scrollDivUp.addEventListener('click', movePopupUp, false);

//scroll popup down

//write the function

var movePopupDown = function(event) {
  var popup = document.getElementById('popup');
  popup.setAttribute('class', 'visible')
}

//call the element from the document
var scrollDivDown = document.getElementById('move-down');

//add addEventListener
scrollDivDown.addEventListener('click', movePopupDown, false);

/*********************** page load animation ***************************/

//write function to move mask
var landingMaskAnimate = function(event) {
  var landingMask = document.getElementById('heading-mask');
  landingMask.setAttribute('class', 'reveal')
  var subhead = document.getElementById('landing-subhead');
  subhead.setAttribute('class', 'reveal');
  var landingImage = document.getElementById('landing-image');
  landingImage.setAttribute('class', 'reveal');
  var downArrow = document.getElementById('down-arrow');
  downArrow.setAttribute('class', 'reveal');

  setTimeout(clearMask, 1000);
}

var clearMask = function(event) {
  var landingMask2 = document.getElementById('heading-mask');
  landingMask2.setAttribute('class', 'clearMask')
}
//add event listeners
window.addEventListener('load', landingMaskAnimate, false);

//scroll removes down downArrow

//function
var removeDownArrow = function(event) {
  var downArrow = document.getElementById('down-arrow');
  downArrow.setAttribute('class', 'hide');
}

//event listener
window.addEventListener('scroll', removeDownArrow, false,);

//second down arrow remove

var removeDownArrow2 = function(event) {
  var downArrow2 = document.getElementById('down-arrow2');
  downArrow2.setAttribute('class', 'hide');
}

var secondArrowScroll = document.getElementById('map');

//event listener
secondArrowScroll.addEventListener('mouseover', removeDownArrow2, false,);

//mobile form and popup2

document.getElementById("form1").onchange = function() {


  var choice = document.getElementById('thedropdown').value;
  var popup2 = document.getElementById('popup2');
  var mobileTitle = document.querySelector('#popup2 h3 span');
  var mobileCutsWood = document.querySelector('#popup2 p.text');
  var mobileParagraph = document.querySelector('#popup2 p.text-2');
  var mobileJoints = document.querySelector('#popup2 p.text-3');
  var mobileImg = document.querySelector('#popup2 img')


  if (choice == 'wtex')   {


    mobileTitle.innerHTML = "West Texas";
    mobileCutsWood.innerHTML = "<span>Cuts &amp; Variations:</span> Beef, goat, mutton.</p><p><span>Wood &amp; Cook:</span> Mesquite, direct heat";
    mobileImg.setAttribute('src', 'images/west.jpg');
    mobileParagraph.innerHTML = "Often referred to as &quot;Cowboy&quot; or &quot;Hill Country&quot; barbecue, West Texas diverges from the Lone Star State&apos;s other regional variations by using direct heat and a wood with a stronger flavor: mesquite.</p><p>This variation is widely considered to &quot;<a style='color:red;' href='https://www.thrillist.com/eat/dallas/the-definitive-texas-barbecue-style-guide' target='_blank'>harken back to barbecue&apos;s Southern roots,</a>&quot; distiguishing its flavor from other Texas varieties. Direct-heat cooking allows the meat to capture the smoke from fat dripping on the wood below rather than pure, clean smoke alone.</p><p>While considered one of the four regions of Texas barbecue, this style is commonly found in other states as well. Some consider it to have more in common with a whole-hog barbecue often seen in North Carolina than the offset pit smoking seen in Central and East Texas.";
    mobileJoints.innerHTML = "<span>Famous Joints:</span> <a href='https://saltlickbbq.com/' target='_blank'>Salt Lick</a>, <a href='http://visitpecos.com/visit-pecos/destination/1-podys-bbq-barbecue' target='_blank'>Pody&apos;s</a>";
  }


  else if (choice == 'stex') {


    mobileTitle.innerHTML = "South Texas";
    mobileCutsWood.innerHTML = "<span>Cuts &amp; Variations:</span> Beef and goat barbacoa</p><p><span>Wood &amp; Cook:</span> Mesquite, earthen pit";
    mobileImg.setAttribute('src', 'images/south.jpg');
    mobileParagraph.innerHTML = "Though it&apos;s becoming increasingly rare in Texas and thoughout the country as a genre, common terms from South Texas barbecue are starting to becoming houshold names. You may recognize barbacoa from the menu at Chipotle, but the real stuff is very, <i>very</i> different.</p><p>Traditionally, whole heads &mdash; yes, as in the place with the face and the brain &mdash; of beef or goat is cooked for several hours in subterranian pits filled with smoldering mesquite wood embers and lined with banana or agave leaves. Otherwise, only tongue and cheek are used.</p><p>The meat is unearthed, shredded and usually served with tortillas. More modern, but definitely nontraditional, ways of cooking &quot;barbacoa&quot; involve steamers, ovens or slowcookers which remain above ground. That&apos;s no fun.";
    mobileJoints.innerHTML = "<span>Famous Joints:</span> <a href='https://www.facebook.com/VerasBackyardBarBQue/' target='_blank'>Vera&apos's Backyard Bar-B-Que</a>";

  }


  else if (choice == 'ctex') {


    mobileTitle.innerHTML = "Central Texas";
    mobileCutsWood.innerHTML = "<span>Cuts &amp; Variations:</span> Beef brisket, coarse sausage, beef plate ribs</p><p><span>Wood &amp; Cook:</span> Post Oak, offset";
    mobileImg.setAttribute('src', 'images/central.jpg');
    mobileParagraph.innerHTML = "What&apos;s becoming ubiquitous with the general term <em>Texas barbecue</em>, Central Texas style revolves around beef; it&apos;s been like that since the beginning.</p><p>German and Czech meat markets concentrated on portions of the Chisholm Trail near Bastrop, Luling, Lockhart, Taylor and Elgin, and these butchers turned to smoking and sausage making to make use of unsold cuts of beef. To this day, Central Texas-style establishments carve meat in front of customers and serve it on red butcher paper as an homage to these barbecue pioneers.</p><p>For most of the late 1900s, barbecue conisseurs had to <a href='https://www.texasmonthly.com/food/our-guide-to-central-texas-barbecue/' target='_blank'>venture to the greater Austin area</a> for high-quality Central Texas barbecue, but its popularity has blossomed as of late, and most major cities in the state have notable joints of this variety.";
    mobileJoints.innerHTML = "<span>Famous Joints:</span> <a href='https://franklinbbq.com/' target='_blank'>Franklin</a>, <a href='http://snowsbbq.com/' target='_blank'>Snow&apos;s</a>";

  }

  else if (choice == 'etex') {


    mobileTitle.innerHTML = "East Texas";
    mobileCutsWood.innerHTML = "<span>Cuts &amp; Variations:</span> Pork ribs, chopped beef, boudin, lots of sauce.</p><p><span>Wood &amp; Cook:</span> Hickory, offset";
    mobileImg.setAttribute('src', 'images/east.jpg');
    mobileParagraph.innerHTML = "East Texas stretches from the southern corners of Arkansas and Oklahoma, down the entire length of western Louisiana to the gulf coast. Naturally, there&apos;s a lot of variation in this style. Two things that are standard: pork is valid, and sauce is necessary.</p><p>This style has roots in Deep South barbecue brought to Texas through slave migration. Pretty much everything gets coated in tomato-based sauce &mdash; including pork, which is just as prominent as beef.</p><p>Boudin (or boudain, depending on how close to Louisiana you are) is also prevalent here. The cajun-style sausage is most popular in deep East Texas, while more Central Texas-style garlic sausage shows up closer to the coast and in Houston.";
    mobileJoints.innerHTML = "<span>Famous Joints:</span> <a href='https://stanleysfamous.com/' target='_blank'>Stanley&apos;s</a>, <a href='http://bodaciousbarbq.com/' target='_blank'>Bodacious Bar-B-Q</a>";

  }

  else if (choice == 'memp') {


    mobileTitle.innerHTML = "Memphis";
    mobileCutsWood.innerHTML = "<span>Cuts &amp; Variations:</span> Pork prepared &quot;wet&quot; or &quot;dry&quot;</p><p><span>Wood &amp; Cook:</span>Hickory chunks added to charcoal";
    mobileImg.setAttribute('src', 'images/memphis.jpg');
    mobileParagraph.innerHTML = "Wet or dry? Picnic shoulder or Boston butt? Mustard or mayo slaw? Memphians debate a lot internally about what true Memphis style barbecue is. One thing is certain: pork reigns supreme.</p><p>Typically in the form of ribs or pulled pork, the Memphis meat staple is cooked in large pits over charcoal with chunks of hickory added to flavor the smoke. Ribs can be seasoned with dry rub only, mopped in either tomato- or vinegar-based sauce, or served &quot;muddy&quot; (that&apos;s a bit of wet and a bit of dry). Coleslaw can be found atop a pulled pork sandwich rather than on the side.</p><p>If you needed more proof that pork is Memphis' meat, <a href='http://www.memphisinmay.org/events/world-championship-barbecue-cooking-contest/' target='_blank'>the world's largest pork barbecue contest</a> is held there yearly. No brisket in sight.";
    mobileJoints.innerHTML = "<span>Famous Joints:</span> <a href='https://cbqmemphis.com/' target='_blank'>Central BBQ</a>, <a href='https://www.hogsfly.com/' target='_blank'>The Rendezvous</a>";

  }

  else if (choice == 'kans') {


    mobileTitle.innerHTML = "Kansas City";
    mobileCutsWood.innerHTML = "<span>Cuts &amp; Variations:</span> All the meats, but distictly brisket burnt ends</p><p><span>Wood &amp; Cook:</span> Hickory, oak, pecan, apple, etc. Offset";
    mobileImg.setAttribute('src', 'images/kansas-city.png');
    mobileParagraph.innerHTML = "Kansas Citians will smoke anything and everything with, well, anything and everything. There&apos;s no one dominant meat or wood, but brisket burnt ends are a KC demand. The lack of one defining meat comes from the city&apos;s status as a meatpacking hub.</p><p>The woods used most commonly are hickory, oak, pecan and apple, as timber of these kinds were known to populate the area in the early 1900s, when barbecue begain rising in local popularity.</p><p>Burnt ends, the fatty, super-caramelized end cut of a beef brisket, are the local specialty, and even Central Texas spots have been known to sell their burnt ends. The sauce is sticky, rich and molasses heavy with a little spice and is served along side the meat with various sides.";
    mobileJoints.innerHTML = "<span>Famous Joints:</span> <a href='https://q39kc.com/' target='_blank'>Q39</a>, <a href='https://www.lcsbarbq.com/' target='_blank'>LC&apos;s Bar-B-Q</a>";

  }

  else if (choice == 'stlo') {



    mobileTitle.innerHTML = "St. Louis";
    mobileCutsWood.innerHTML = "<span>Cuts &amp; Variations:</span> St. Louis style spare ribs, heavy on sauce.</p><p><span>Wood &amp; Cook:</span> Grilled over direct heat, not smoked.";
    mobileImg.setAttribute('src', 'images/st-louis.jpg');
    mobileParagraph.innerHTML = "St. Louis style often refers to the cut of the pork ribs rather than a defining style of cook, wood and sauce. Rib tips and cartilage are removed to create a uniform, rectangular-shaped rib rack which adds to the presentation. Naturally, this ribs are often used in competition.</p><p>One can argue, however, that the preferred method of cooking in St. Louis style &mdash; grilling directly over the heat source &mdash; is not technically barbecue, which usually involves slow cooking or smoking over wood.</p><p>Sweet, sticky, acidic tomato-based sauce is applied liberally after the ribs are grilled. How liberally? Well, <a href='https://www.stlmag.com/dining/Ask-George-What-is-St-Louis-Style-Barbecue/' target='_blank'>St. Louis consumes more barbecue sauce than any other city in America</a>. For a style that&apos;s one city rather a whole region of a state, that has to be a lot.";
    mobileJoints.innerHTML = "<span>Famous Joints:</span> <a href='http://www.pappyssmokehouse.com/' target='_blank'>Pappy&apos;s</a>, <a href='http://saltandsmokestl.com/' target='_blank'>Salt and Smoke</a>";

  }

  else if (choice == 'alab') {



    mobileTitle.innerHTML = "Alabama";
    mobileCutsWood.innerHTML = "<span>Cuts &amp; Variations:</span> Chicken and pork ribs, shoulder or ham. Vinegar or white sauce.</p><p><span>Wood &amp; Cook:</span> Hickory, oak, pecan, indirect/offset";
    mobileImg.setAttribute('src', 'images/alabama.jpg');
    mobileParagraph.innerHTML = "Alabama style is often seen as an amalgamation of southern regional style, drawing on Memphis, the Carolinas and Kentucky for its characteristics. Like most of the Old South, pork is king and varies in the form of ribs, pulled pork and even whole hams.<p><p>Internal variation is found among Alabama style, too. A vinegar-based sauce is found in regions near the Tennessee River and the Carolinas, while a mayonnaise-based white barbecue sauce is popular near the coast. Yes, white barbecue sauce is a thing and was once reserved for barbecued chicken, but it can now be found on pork as well.</p><p>Sandwiches are piled high with pulled pork and coleslaw, much like Memphis style, but dill pickle sare also often found atop a sandwich as Alabama&apos;s defining condiment.";
    mobileJoints.innerHTML = "<span>Famous Joints:</span> <a href='http://www.sawsbbq.com/' target='_blank'>Saw&apos;s</a>, <a href='http://labarbeque.com/' target='_blank'>L.A. Barbeque</a>";

  }

  else if (choice == 'ncar') {



    mobileTitle.innerHTML = "North Carolina";
    mobileCutsWood.innerHTML = "<span>Cuts &amp; Variations:</span> Pork, though the cuts vary by region</p><p><span>Wood &amp; Cook:</span> Oak or hickory, indirect";
    mobileImg.setAttribute('src', 'images/north-carolina.jpg');
    mobileParagraph.innerHTML = "Two variations compete in North Carolina: eastern style and Lexington style. The east uses &quot;<a href='https://usatoday30.usatoday.com/news/nation/2005-05-29-barbecue-debate_x.htm' target='_blank'>every part of the pig except the squeal</a>,&quot; while Lexington sticks to pork shoulder.</p><p>Some argue that eastern style is <a href='https://www.ourstate.com/nc-barbecue-styles/' target='_blank'>the truest form of barbecue to the carribean origins</a> of the cuisine, and regions west and south started experimenting with different sauces and cuts of meat. Regardles, pork is prevalent in both North Carolinian styles.</p><p>Western North Carolina or Lexington style uses a red sauce made from ketchup, vinegar and spices, and even the coleslaw gets some barbecue sauce in its dressing. Easterners use vinegar-based sauces and ditch the ketchup in the slaw for mayo or whipped salad dressings.";
    mobileJoints.innerHTML = "<span>Famous Joints:</span> <a href='https://www.ourstate.com/a-day-at-bs-barbecue-greenville/' target='_blank'>B&apos;s</a>, <a href='http://www.skylightinnbbq.com/' target='_blank'>Skylight Inn</a>";
  }

  else if (choice == 'scar') {



    mobileTitle.innerHTML = "South Carolina";
    mobileCutsWood.innerHTML = "<span>Cuts &amp; Variations:</span> Pork with varying sauces.</p><p><span>Wood &amp; Cook:</span> Hickory or oak, indirect";
    mobileImg.setAttribute('src', 'images/south-carolina.jpeg');
    mobileParagraph.innerHTML = "Just like its neighbor to the north, South Carolina has two defining styles based on intrastate regions. The main variations come from the sauce: mustard-based or vinegar-based.</p><p>Eastern/Coastal South Carolina, known as the &quot;Pee Dee&quot; region, mirrors eastern North Carolina&apos;s vinegar-and-pepper sauce, while western South Carolina features a mustard-based sauce commonly referred to as &quot;Carolina Gold.&quot;</p><p>Pee Dee barbeuce uses whole hog, while western South Carolina uses pork shoulder, Boston butts and hams. <a href='https://www.washingtonpost.com/lifestyle/food/a-south-carolina-barbecue-primer/2016/08/01/13c3b80c-527f-11e6-b7de-dfe509430c39_story.html?utm_term=.4ec1216a4acd' target='_blank'>Some divide South Carolina&apos;s regions into four</a>, with more variations of sauce and preferred cut. One consensus is that South Carolina style is pupular in the state but not so much nationally. More popular styles like North Carolina, Memphis and Texas seem to overshadow the Palmetto State&apos;s style.";
    mobileJoints.innerHTML = "<span>Famous Joints:</span> <a href='https://hometeambbq.com/' target='_blank'>Home Team</a>, <a href='http://www.bessingersbbq.com/' target='_blank'>Bessinger&apos;s</a>";
  }

  else if (choice == 'cali') {



    mobileTitle.innerHTML = "California";
    mobileCutsWood.innerHTML = "<span>Cuts &amp; Variations:</span> Beef tri-tip and (occasionally) pork.</p><p><span>Wood &amp; Cook:</span> Red or Live Oak, grilled over earthen pit";
    mobileImg.setAttribute('src', 'images/california.jpeg');
    mobileParagraph.innerHTML = "Often referred to as &quot;Santa Maria-style&quot; barbecue, California draws from its Spanish and Mexican ancestral influences. Though the technique is grilling rather than true slow-smoked barbeccue, the social and cultural characteristics are still present.</p>" + "<p>Santa Maria-style barbecue, as a social event rather than purely a method of cooking, <a href='https://www.huffingtonpost.com/entry/5-things-to-know-about-santa-maria-style-barbecue_us_5942a18ae4b06bb7d271670f' target='_blank'>evolved from large parties thrown by ranchers for vaqueros or cowboys after large cattle roundups</a>. Concentrated in coastal Central California, Santa Maria-style invokes adjustable iron grills that move over coals to control temperature.</p><p>No sauce involved with Santa Maria-style, just a dry rub of salt, pepper and garlic powder. Sides vary from beans and salsas to salads and French bread, and while the style is more akin to grilling than the smoking of Texas and the Carolinas, it&apos;s still a deeply held cultural example of barbecue.";
    mobileJoints.innerHTML = "<span>Famous Joints:</span> <a href='https://www.zagat.com/r/jockos-nipomo' target='_blank'>Jocko&apos;s</a>, <a href='https://www.zagat.com/r/hitching-post-casmalia' target='_blank'>The Hitsching Post</a>";
  }

  else if (choice == "hawa") {



    mobileTitle.innerHTML = "Hawaii";
    mobileCutsWood.innerHTML = "<span>Cuts &amp; Variations:</span> Pork, beef and fish</p><p><span>Wood &amp; Cook:</span> Grilled or slowcooked in earthen pits";
    mobileImg.setAttribute('src', 'images/hawaii.JPG');
    mobileParagraph.innerHTML = "Hawaiian barbecue as a named concept is more of a corporate creation than a cultural one. Fusion of Asian-style &quot;barbecue&quot; and American cuisine from mainland settlers on the island formed this variety.</p><p>Whole hog roasts over open pits or wrapped in leaves and cooked underground are mainstays at large social events, though more mainstream varieties feature standard grilled meats coated in sticky sauces that draw from contemporary pan-Asian cuisine.</p><p>Similar to California, the traditional barbecue aspect is most prominent in the socialization that occurs around the food rather than the food itself. And while it seems vastly different than the slow smoked pit barbecue of Central Texas or the Southern roots-style of Alabama, Hawaiian barbecue is becoming increasingly popular.";
    mobileJoints.innerHTML = "<span>Famous Joints:</span> <a href='https://www.hawaiianbarbecue.com/' target='_blank'>L&amp;L</a>, <a href='https://www.onohawaiianbbq.com/' target='_blank'>Ono</a>";
  }
}
