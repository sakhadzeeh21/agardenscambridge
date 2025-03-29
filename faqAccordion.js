$(function() {		//BEGIN
    $(".accordionTitle").on("click", function(e) {
        e.preventDefault();
        var $this = $(this);
        if (!$this.hasClass("accordionActive")) {
            $(".accordionContent").slideUp(400);
            $(".accordionTitle").removeClass("accordionActive");
            $('.accordionArrow').removeClass('accordionRotate');
        }

        $this.toggleClass("accordionActive");
        $this.next().slideToggle();
        $('.accordionArrow',this).toggleClass('accordionRotate');
    });		//END				
});		
