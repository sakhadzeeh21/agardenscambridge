//Button ID:		all		gardenCare		fenceManagement		shadeCare			wasteDisposal

$(document).ready(function(){  		
    $("#gardenCare").click(function()		{ 	$(".galleryFilterMenu").removeClass("activeGalleryFilter");
                                                $("#gardenCare").addClass("activeGalleryFilter");
                                                $(".imageContainer").hide().fadeOut(50)	;			
                                                $(".gardenCare").show().animate({scale: '0.0'}, "fast");			//	$(".gardenCare,  .fenceManagement, .shadeCare").hide().fadeOut(50);	;		
                                                $(".gardenCare").animate({scale: '1'}, "medium");					//	$(".gardenCare").show().fadeIn(100);	;																
                                            });										
    $("#manageFence").click(function()		{ 	$(".galleryFilterMenu").removeClass("activeGalleryFilter");
                                                $("#manageFence").addClass("activeGalleryFilter");
                                                $(".imageContainer").hide().fadeOut(50)	;			
                                                $(".manageFence").show().animate({scale: '0.0'}, "fast");		
                                                $(".manageFence").animate({scale: '1'}, "medium");				
                                            });										
    $("#shadeCare").click(function()		{ 	$(".galleryFilterMenu").removeClass("activeGalleryFilter");
                                                $("#shadeCare").addClass("activeGalleryFilter");
                                                $(".imageContainer").hide().fadeOut(50)	;			
                                                $(".shadeCare").show().animate({scale: '0.0'}, "fast");		
                                                $(".shadeCare").animate({scale: '1'}, "medium");
                                            });										
    $("#wasteDisposal").click(function()	{ 	$(".galleryFilterMenu").removeClass("activeGalleryFilter");
                                                $("#wasteDisposal").addClass("activeGalleryFilter");
                                                $(".imageContainer").hide().fadeOut(50)	;			
                                                $(".wasteDisposal").show().animate({scale: '0.0'}, "fast");		
                                                $(".wasteDisposal").animate({scale: '1'}, "medium");
                                            });										
    $("#all").click(function()				{ 	$(".galleryFilterMenu").removeClass("activeGalleryFilter");
                                                $("#all").addClass("activeGalleryFilter");
                                                $(".imageContainer").hide().fadeOut(50)	;			
                                                $(".imageContainer").show().animate({scale: '0.0'}, "fast");		
                                                $(".imageContainer").animate({scale: '1'}, "medium");
                                            });										
        
}); 
    
    