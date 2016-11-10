//next and back btn
function openNext(id){
	var element = document.getElementById(id);
	element.setAttribute("open", "");
	element.scrollIntoView();
}

/*
function checkValidity(id){
    console.log(id);
    //console.log(e);
    var form = $( "id" + "-form" );
    form.validate();
    if(!form.valid()){
        e.stopPropagation(); 
    }
}
*/
    
$('.step-continue').click(function (e) {
    var id = e.target.id;
    var formid = (id + "-form");
    var form = $('#' + formid);
    var icon = $('#' + id + '-valid-icon');

    try{
        form.validate();
        if(!form.valid()){
            console.log('form not valid');
            e.stopPropagation(); 
            icon.hide();
        }
        else{
            console.log('form valid');
            icon.show();
            
            var step = parseInt(formid.charAt(5)) + 1;
            var next = "container-step-" + step;
            var element = $('#' + next);
            
        }
    }
    catch(e){
        icon.show();    
    }


   // e.stopPropagation();   
    // some action ...
});
//slideshow
/*var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);   
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    } 
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}*/

$(function () {
    $('#datetimepicker12').datetimepicker({
        inline: true,
        sideBySide: true
    });
});              

