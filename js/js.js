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
    })


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

		
		jQuery('.modal-close, .form-overlay').click( function(){
            jQuery('.text-selected-model>span').text(''); 
            jQuery('#select-model').val(''); 
//            jQuery("input[name=friend]").val("");
//			jQuery('input, select').removeClass('error');
//			jQuery("#success-content").hide(1000);
//            jQuery("#form-content").show(1000);
            
			jQuery('.getTreal-form').animate({opacity: 0}, 200, function(){ 
						 jQuery(this).css('display', 'none'); 
						 jQuery('.form-overlay').fadeOut(400); 
					 });
	
		});


//   popup-form-open-end
    
});