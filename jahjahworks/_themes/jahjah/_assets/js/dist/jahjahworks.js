 /*! jahjah_works - v0.0.0 - 2014-12-01
 * https://github.com/nerdfiles/jahjah_works
 * Copyright (c) 2014 ; Licensed WTFPL */
(function() {
  (function($, w, document) {

    /**
    Intensify
    @memberof interactionModel
     */

    /**
    Preview of Gallery Item
    
    @description
    
    Image previews which trigger "zoom" events and "purchase".
     */

    /**
    Foundation
    
    @using offcanvas
     */

    /**
    Initialization of DOM handlings
    @memberof interactionModel
     */

    /**
    
    Deferred Intense Images Container
    @inner
     */
    var deferredIntenseImagesContainer, intensifyGalleryItem, interactionModel;
    deferredIntenseImagesContainer = function(selector) {
      var d, elementSearch;
      d = new $.Deferred();
      elementSearch = w.setInterval(function() {
        var figure$;
        figure$ = $(selector);
        if (figure$.length) {
          d.resolve(figure$);
          return w.clearInterval(elementSearch);
        }
      }, 1000);
      return d.promise();
    };

    /**
    Intensify Gallery Item
    
    @inner
     */
    intensifyGalleryItem = function() {
      var preview$;
      preview$ = $(this);
      return preview$.on("click.previewIntenseImage", function(e) {
        var img$, miniChargeContainer$, miniChargeContainerClone$;
        img$ = $(e.target);
        miniChargeContainer$ = img$.prev();
        miniChargeContainerClone$ = miniChargeContainer$.clone();
        return deferredIntenseImagesContainer(".intense-images--container").done(function(element$) {
          return miniChargeContainerClone$.appendTo(element$);
        });
      });
    };
    interactionModel = {
      intensify: function() {
        return $(".preview").each(intensifyGalleryItem);
      },
      foundation: function() {
        return $(document).foundation();
      },
      init: function() {
        this.foundation();
        return this.intensify();
      }
    };
    console.log('ca');
    return interactionModel.init();
  })(jQuery, window, document);

}).call(this);
