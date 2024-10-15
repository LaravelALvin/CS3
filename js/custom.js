// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


$('.custom_slick_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.slick_slider_nav',
    responsive: [{
        breakpoint: 768,
        settings: {
            dots: false
        }
    }]
})

$('.slick_slider_nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.custom_slick_slider',
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true
});


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

var visibleActivity = false;
function showActivity(){
    if(visibleActivity == false){
        $('#myDiv').removeClass('d-none');
        $('#showButton').html('Hide Activity');
        visibleActivity = true;
    }else{
        $('#myDiv').addClass('d-none');
        $('#showButton').html('Show Activity');
        visibleActivity = false;
    }
    
}

function showFAActivity(){

  const inputField = document.getElementById('inputCode');
  const inputValue = inputField.value;
  const errorMsg = document.getElementById('errorMsg');
  inputField.classList.remove('error', 'shake'); 
  errorMsg.textContent = '';

  // Trigger reflow to restart animation (necessary for CSS animations)
  void inputField.offsetWidth;

switch(inputValue){
  case "Long-Weekend":{
    $('#gradeModal').modal('hide');
    $('#lithiumFA1').removeClass('d-none');
    $('#btnShowActivity').remove();
    break;
  }
  case "Sodium-Mall":{
    $('#gradeModal').modal('hide');
    $('#sodiumFA1').removeClass('d-none');
    $('#btnShowActivity').remove();
    break;
  }
  case "2024-Barium-FA1":{
    $('#gradeModal').modal('hide');
    $('#bariumFA1').removeClass('d-none');
    $('#btnShowActivity').remove();
    break;
  }
  case "Calcium-FA1":{
    $('#gradeModal').modal('hide');
    $('#calciumFA1').removeClass('d-none');
    $('#btnShowActivity').remove();
    break;
  }
  case "Colors":{
    $('#gradeModal').modal('hide');
    $('#Colors').removeClass('d-none');
    $('#btnShowActivity').remove();
    break;
  }
  default:
    inputField.classList.add('error', 'shake'); // Add the error class to make the border red
    errorMsg.textContent = "Invalid Code"; // Add error message
}


}

// Get modal element
var modal = document.getElementById("myModal");

// Get open modal button
var openModalBtn = document.getElementById("openModalBtn");

// Get close button
var closeModalBtn = document.getElementsByClassName("close")[0];

// Listen for open click
openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

// Listen for close click
closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal on clicking anywhere outside the modal
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

function popupModal(){
    setTimeout(function() {
    $('#gradeModal').modal('hide');
    const start = () => {
      setTimeout(function() {
        confetti.start()
      }, 600); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
    };
    const stop = () => {
      setTimeout(function() {
        confetti.stop()
      }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
    };
    start();
        stop();
    },500);
    
  }
  
  function changeColor(){
    $('#formative').css('background-color', '#78ABA8');
    $('#formative').css('animation', 'typing 3s steps(30, end) 1s 1 normal both, blink-caret .75s step-end infinite');

    $('#alternative').css('background-color', '#C8CFA0');
    $('#quarter').css('background-color', '#FCDC94');
    $('#gradefinal').css('background-color', '#EF9C66');
  }

  function startCounting(FA, AA, LT, grade) {
    const countElements = {
      formative: { element: document.getElementById('formative-score'), end: FA }, // Example value
      alternative: { element: document.getElementById('alternative-score'), end: AA }, // Example value
      longTest: { element: document.getElementById('longtest-score'), end: LT }, // Example value
      grade: { element: document.getElementById('grade-display'), end: grade } // Example value
    };

    function countUp(element, endValue) {
      let startValue = 0;
      const duration = 3000; // Duration in milliseconds
      const increment = endValue / (duration / 100);
      const interval = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
          startValue = endValue;
          clearInterval(interval);
        }
        element.textContent = Math.floor(startValue);
      }, 100);
    }
      countUp(countElements.formative.element, countElements.formative.end);
      countUp(countElements.alternative.element, countElements.alternative.end);
      countUp(countElements.longTest.element, countElements.longTest.end);
      countUp(countElements.grade.element, countElements.grade.end);
   
  }

  function typeWriter() {
    if (index < text.length) {
        document.getElementById("output").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust the speed by changing the timeout duration
    }
}





