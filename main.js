alert("I am linked");

// Declaring all the variables 
var guesthouseValue;
var restuarantValue;
var holidayDestinationValue;
var guesthouses;
var guesthouseCost;
var restuarants;
var restuarantsCost;
var holidayDestinations;
var holidayDestCosts;
var isEmpty


// All funtions are called through this function
function Main(){

 isEmpty = false;
 var fullName = document.getElementById("fname").value;
 var email = document.getElementById("email").value;
 var address = document.getElementById("adr").value;
 var City = document.getElementById("city").value;
 var cardName = document.getElementById("cname").value;
 var expMonth = document.getElementById("expmonth").value;
 var expYear = document.getElementById("expyear").value;
 var ccnum = document.getElementById("ccnum").value;
 var ccv = document.getElementById("cvv").value;
 
 var arrBillingAddress = [fullName, email, address, City, cardName, expMonth, expYear];

 // Validate if input values are empty
 for(let i = 0; i < 6;i++){
    if(arrBillingAddress[i] == ""){
        isEmpty = true;
    }
 }
 // test if card redentials are valid
   if(isEmpty){
    alert("Please ensure that all the billing address infromation has been entered");
   }
   else{
        const onlyNumbers = /^[0-9]+$/;
       
        alert(ccv);
        if (onlyNumbers.test(ccnum) == false){alert("Not a valid credit card number");}  
        else{
           if(onlyNumbers.test(ccv) == false){alert("Not a valid CVV"); }
            else{
                SelectedProvince();
                alert(guesthouseValue); // Value used for testing
                var total = CalcCost();
                alert(`Total: R${total}`);     
            }
        }
    }       

// Callculate the total cost of the bookings
function CalcCost(){
    var total = 0;
    for(let i = 0; i < 4;i++){
        if(guesthouses[i] == guesthouseValue){
            total = total + guesthouseCost[i];
        }
        if(restuarants[i] == restuarantValue){
            total = total + restuarantsCost[i];
        }
        if(holidayDestinations[i] == holidayDestinationValue){
            total = total + holidayDestCosts[i];
        }
    }
    return total;
}
// Determin what items has been selected
function SelectedProvince(){
    var selectElement = document.getElementById('prov');
    var selectedValue = selectElement.options[selectElement.selectedIndex].value;
    
   switch (selectedValue){
    case 'Gauteng':
        alert("Gauteng has been Selected");

        guesthouses = ["Sunrock Guesthouse","Emperors Lodge and Tours","Kelkiewyn Waterkloof Guesthouse","Peppertree Guest House"];
        guesthouseCost = [1234,2567,3891,2432];

        restuarants = ["Marble Restuarant","Blue Room Hatfield","Propeganda Pretoria","Mozambik Linksfield"];
        restuarantsCost = [1234,2567,3891,2432];

        holidayDestinations = ["Home Suite Hotels Rosebank","Menlyn Boutique Hotel","Nothcliff Boutique Hotel","Askara Haus"];
        holidayDestCosts = [1234,2567,3891,2432];

        var selectElement = document.getElementById('guesthouseGauteng');
        guesthouseValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('restuarantGauteng');
        restuarantValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('holidaydestinationGauteng');
        holidayDestinationValue = selectElement.options[selectElement.selectedIndex].value;

        break;
    case 'Limpopo':
        alert("Limpopo has been Selected");

        guesthouses = ["Kom en Rus","Langkloof","Vir Altyd","Wharthog Corner"];
        guesthouseCost = [1234,2567,3891,2432];

        restuarants = ["Three Bridges Restuarant","Buffalo Gril","Sleepers Restuarant","The Hat and Creek"];
        restuarantsCost = [1234,2567,3891,2432];

        holidayDestinations = ["Waterberg Game Lodge","Ledend Gholf and Safari  Resort","Swadini, A Forever Resort","Thornybush Game Lodge"];
        holidayDestCosts = [1234,2567,3891,2432];

        var selectElement = document.getElementById('guesthouseLimpopo');
         guesthouseValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('restuarantLimpopo');
        restuarantValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('holidaydestinationLimpopo');
        holidayDestinationValue = selectElement.options[selectElement.selectedIndex].value;

        break;
    case 'Free State':
        alert("Free State has been Selected");

        guesthouses = ["SiBella guest house","Aloe guest rooms","Goedehoop","The Vaal Guesthouse"];
        guesthouseCost = [1234,2567,3891,2432];

        restuarants = ["Balloon","Bella Casa Restuarant","Longhorn Bloemfontein","Famous Brew and Still"];
        restuarantsCost = [1234,2567,3891,2432];

        holidayDestinations = ["Kiara Lodge","Casa Cara Resort","First Group","Wyndford Holiday Farm"];
        holidayDestCosts = [1234,2567,3891,2432];

        var selectElement = document.getElementById('guesthouseFreeState');
        guesthouseValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('restuarantFreeState');
        restuarantValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('holidaydestinationFreeState');
        holidayDestinationValue = selectElement.options[selectElement.selectedIndex].value;

        break;
    case 'Mpumalanga':
        alert("Mpumalanga has been Selected");

        guesthouses = ["Hakuna Matata Guesthouse","Beauty and the Beast Guesthouse","That's The Way It Is Guesthouse","True Colors Guesthouse"];
        guesthouseCost = [1234,2567,3891,2432];

        restuarants = ["Flavourful Flare","It's All Coming Back To Me Now","Pumpernickel","Heito Potato"];
        restuarantsCost = [1234,2567,3891,2432];

        holidayDestinations = ["Bleeding Love","Rainbow Lodge","Dikhololo","Buffelspoort"];
        holidayDestCosts = [1234,2567,3891,2432];

        var selectElement = document.getElementById('guesthouseMpumalanga');
        guesthouseValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('restuarantMpumalanga');
        restuarantValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('holidaydestinationMpumalanga');
        holidayDestinationValue = selectElement.options[selectElement.selectedIndex].value;  

        break;
    case 'Western Cape':
        alert("Western Cape has been Selected");

        guesthouses = ["Rigatoni","Dave","Pumpernickel","Reeses"];
        guesthouseCost = [1234,2567,3891,2432];

        restuarants = ["Timon and Pumbaa","The Legit Boss Restaurant","From This moment Restaurant","Iwaju Restaurant"];
        restuarantsCost = [1234,2567,3891,2432];

        holidayDestinations = ["Lovers Lane","Foute","Pumpernickel","Vir Altyd"];
        holidayDestCosts = [1234,2567,3891,2432];

        var selectElement = document.getElementById('guesthouseWesternCape');
        guesthouseValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('restuarantWesternCape');
        restuarantValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('holidaydestinationWesternCape');
        holidayDestinationValue = selectElement.options[selectElement.selectedIndex].value;

        break;
    case 'East-Cape':
        alert("East-Cape has been Selected");

        guesthouses = ["Semi-Soet Guesthouse","Platteland Guesthouse","Strikdas Guesthouse","Reus Guesthouse"];
        guesthouseCost = [1234,2567,3891,2432];

        restuarants = ["Palm & Pine.","Girl and The Lion","Ska-Rumba","Dropit Soos n Disprin"];
        restuarantsCost = [1234,2567,3891,2432];

        holidayDestinations = ["Rigatoni","Dave","Pumpernickel","Reeses"];
        holidayDestCosts = [1234,2567,3891,2432];

        var selectElement = document.getElementById('guesthouseEastCape');
        guesthouseValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('restuarantEastCape');
        restuarantValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('holidaydestinationEastCape');
        holidayDestinationValue = selectElement.options[selectElement.selectedIndex].value;

        break;
    case 'KwaZulu-Natal':
        alert("KwaZulu-Natal has been Selected");

        guesthouses = ["Side To Side","Break Free","Bang Bang","A New Day Has Come"];
        guesthouseCost = [1234,2567,3891,2432];

        restuarants = ["Sticky and Cruel","Dave","Pichana","NorthSea"];
        restuarantsCost = [1234,2567,3891,2432];

        holidayDestinations = ["I'm Alive","Once Upon A Time","Periwinckle","My Heart Will Go On"];
        holidayDestCosts = [1234,2567,3891,2432];

        var selectElement = document.getElementById('guesthouseKwazuluNatal');
        guesthouseValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('restuarantKwazuluNatal');
        restuarantValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('holidaydestinationKwazuluNatal');
        holidayDestinationValue = selectElement.options[selectElement.selectedIndex].value;

        break;
    case 'Northern Cape':
        alert("Northern Cape has been Selected");

        guesthouses = ["Proud Mary","I Wil Always Love You","Nickel","When You Believe"];
        guesthouseCost = [1234,2567,3891,2432];

        restuarants = ["Drivers Lisence","The Climb","Flowers","Poker Face"];
        restuarantsCost = [1234,2567,3891,2432];

        holidayDestinations = ["Rigatoni","Dave","Pumpernickel","Reeses"];
        holidayDestCosts = [1234,2567,3891,2432];

        var selectElement = document.getElementById('guesthouseNorthenCape');
        guesthouseValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('restuarantNorthenCape');
        restuarantValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('holidaydestinationNorthenCape');
        holidayDestinationValue = selectElement.options[selectElement.selectedIndex].value;

        break;
    case 'North-West':
        alert("North-West has been Selected");

        guesthouses = ["Coat Of Many Colors","Mis Eet Slaap Herhaal","Lelie","Reeses"];
        guesthouseCost = [1234,2567,3891,2432];

        restuarants = ["Net Een Keer","Duifie","Pumpernickel","Vulkaan"];
        restuarantsCost = [1234,2567,3891,2432];

        holidayDestinations = ["Mag Ek Jou Laaste Wees","Dave","Pumpernickel","Reeses"];
        holidayDestCosts = [1234,2567,3891,2432];

        var selectElement = document.getElementById('guesthouseNorthWest');
        guesthouseValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('restuarantNorthWest');
        restuarantValue = selectElement.options[selectElement.selectedIndex].value;

        var selectElement = document.getElementById('holidaydestinationNorthWest');
        holidayDestinationValue = selectElement.options[selectElement.selectedIndex].value;

        break;
   }
}
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}