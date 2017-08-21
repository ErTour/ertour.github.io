$ (function() {
  var Acordeon = function(el, multiple) { 
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas 

      var links = this.el.find('.link');
      // Eventos 
      links.on('click', this.dropdown)
    };
      Acordeon.prototype.dropdown = function(e) {
          var $this = $(this);
              $next = $this.next();

          $next.slideToggle();    
      }

    var acordeon = new Acordeon($('#acordeon'));
});
