$(document).ready(function() {
$(".technic-table:eq(0)").addClass("visible");
$('.flex-technic-block').on('click', function (e) {
$(".table-border-info").hide();
$(".technic-table.visible").css('display', ''); 
const idx = $(this).index();
$(this)
.addClass('selected')
.siblings().removeClass('selected');
$(".technic-table")
.eq(idx).addClass("visible")
.siblings().removeClass('visible');
scrolId();
});
function scrolId() {
let anchor = 'show-techic'; 
$('html, body').stop().animate( { scrollTop: $('#' + anchor).offset().top }, 777);
return false;
}
//tabs start
$('.open-table').click(function(e) {
e.preventDefault();  
$(".table-border-info").hide();
$('#' + $(this).data('name')).show();
$(".technic-subtable").addClass('open'); 
$(".technic-table.visible").css('display', 'none');   
}); 
$('.close-table').click(function(e) {
e.preventDefault(); 
$(".table-border-info").hide();
$(".technic-subtable").removeClass('open'); 
$(".technic-table.visible").css('display', ''); 
}); 
//tabs end 
//   popup-form-open-start 
jQuery('.getForFree').click( function(e){ 
e.preventDefault();
jQuery('.text-selected-model>span').text(jQuery(this).attr('data-popup')); 
jQuery('#select-model').val(jQuery(this).attr('data-popup')); 
jQuery('.form-overlay').fadeIn(400, function(){
jQuery('.getTreal-form').css('display', 'block').animate({opacity: 1}, 200);
});
});
jQuery('.modal-close, .form-overlay, .formclose').click( function(){
//            jQuery("input[name=friend]").val("");
//			jQuery('input, select').removeClass('error');
//			jQuery("#success-content").hide(1000);
//            jQuery("#form-content").show(1000);
jQuery('.getTreal-form').animate({opacity: 0}, 200, function(){ 
jQuery(this).css('display', 'none'); 
jQuery('.form-overlay').fadeOut(400); 
});
jQuery('.text-selected-model>span').text(''); 
jQuery('#select-model').val('');
});
$('.nolink').on('click', function(e){
e.preventDefault;  
});
//   popup-form-open-end
$("[data-trigger=scroll]").on("click", function(e) { 
var anchor = $(this); 
$('html, body').stop().animate( { scrollTop: $(anchor.attr('href')).offset().top }, 777);
e.preventDefault();
return false;
});
let descLink = $('.tech-info-item-card > .link-blue');
descLink.on('click', function(e){
e.preventDefault();
let button = $(this);
let wrap = $(this).parent('.tech-info-item-card');
if (wrap.hasClass('hidden')){
wrap.removeClass('hidden').addClass('open');
button.text('Cкрыть описание');
}  else {
wrap.removeClass('open').addClass('hidden'); 
button.text('Показать описание');
} 
});
jQuery('.form-popup, .form').submit(function(e){
e.preventDefault();
console.log('событие поймано');
var form = jQuery(this); 
var error = false; 
form.find("input[name='name'], input[name='phone']").each( function(){ 
if (jQuery(this).val() == '' || jQuery(this) < 4) {   
jQuery(this).addClass('error');
error = true; 
}else { 
jQuery(this).removeClass('error');
} 
});
if(!form.find("input[name='select-check']").is(':checked')) {
jQuery("input[name='select-check']").addClass('error');
error = true;
}
//    if(jQuery('#popupPhone').val().length < 9) {
//      jQuery('#popupPhone').addClass('error');
//      error = true;
//    }
if (!error) { 
var data = form.serialize(); 
jQuery.ajax({ 
type: 'POST', 
url: 'send.php', 
dataType: 'json', 
data: data, 
beforeSend: function(data) { 
form.find('input[type="submit"]').attr('disabled', 'disabled'); 
},
success: function(data){ 
if (data['error']) { 
alert(data['error']); 
} 
else {
//                       jQuery("#form-content").hide(200);
//                       jQuery("#form-content").hide(200);
//                       jQuery("#success-content").show(200);
let model = form.find("input[name='model']").val();
if (!model){
window.location.replace("/success.php/"); 
} else {
window.location.replace("/success.php/" + '?model=' + model);
}
console.log('форма отправлена');
}
},
error: function (xhr, ajaxOptions, thrownError) {
alert(xhr.status); 
alert(thrownError); 
},
complete: function(data) { 
form.find('button[type="submit"]').prop('disabled', false); 
jQuery(this).removeClass('error');
form.find("input[name='name'], input[name='phone']").val('');
}
});
}
return false;
});
});