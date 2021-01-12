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