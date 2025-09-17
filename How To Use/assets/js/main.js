$(document).ready(function() {
	
    /* ===== Stickyfill ===== */
    /* Ref: https://github.com/wilddeer/stickyfill */
    // Add browser support to position: sticky
    var elements = $('.sticky');
    Stickyfill.add(elements);
  
    
    /* Hack related to: https://github.com/twbs/bootstrap/issues/10236 */
    $(window).on('load resize', function() {
        $(window).trigger('scroll'); 
    });

    /* Activate scrollspy menu */
    $('body').scrollspy({target: '#doc-menu', offset: 120 });
    
    /* Smooth scrolling */
	$('a.scrollto').on('click', function(e){
        //store hash
        e.preventDefault();
        // var target = this.hash;    
        var target = $(this.hash);
        if (target.length) {
            var targetPosition = target.offset().top;

            targetPosition -= 100;

            $('body, html').animate({
                scrollTop: targetPosition
            },800);
        }
		// $('body').scrollTo(target, 800, {offset: 0, 'axis':'y'});
		
	});
	
    
    /* ======= jQuery Responsive equal heights plugin ======= */
    /* Ref: https://github.com/liabru/jquery-match-height */
    
    // $('#cards-wrapper .item-inner').matchHeight();
    // $('#showcase .card').matchHeight();
     
    /* Bootstrap lightbox */
    /* Ref: http://ashleydw.github.io/lightbox/ */

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });    


});