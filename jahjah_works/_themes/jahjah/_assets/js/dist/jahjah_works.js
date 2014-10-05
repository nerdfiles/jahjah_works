 /*! jahjah_works - v0.0.0 - 2014-10-05
 * https://github.com/nerdfiles/jahjah_works
 * Copyright (c) 2014 ; Licensed WTFPL */
;(function ($, w, undefined) {

  //// DOM Interaction Namespace ////

  var interactionModel = {

    /**
     * Intensify
     * @memberof interactionModel
     */
    intensify: function () {
      /**
       * Preview of Gallery Item
       *
       * @description
       *
       * Image previews which trigger "zoom" events and "purchase".
       */
      $('.preview').each(intensifyGalleryItem);
    },

    /**
     * Foundation
     *
     * @using offcanvas
     */
    foundation: function () {
      $(document).foundation();
    },

    /**
     * Initialization of DOM handlings
     * @memberof interactionModel
     */
    init: function () {
      this.foundation();
      this.intensify();
    }
  };

  //// Internal/Implementation Functions ////

  /**
   * Deferred Intense Images Container
   *
   * @inner
   */
  function deferredIntenseImagesContainer (selector) {
    var
    d = new $.Deferred();

    var elementSearch = w.setInterval(function () {
      var figure$ = $(selector);
      if (figure$.length) {
        d.resolve(figure$);
        w.clearInterval(elementSearch);
      }
    }, 1000);

    return d.promise();
  }

  /**
   * Intensify Gallery Item
   *
   * @inner
   */
  function intensifyGalleryItem () {
    var
    preview$ = $(this);

    preview$.on('click', function (e) {

      var
      img$ = $(e.target),
      miniChargeContainer$ = img$.prev(),
      miniChargeContainerClone$ = miniChargeContainer$.clone();

      // Wait for Intense Image container to be injected at the tail of <body>
      // in the DOM.
      deferredIntenseImagesContainer('.intense-images--container').done(function (element$) {
        miniChargeContainerClone$.appendTo(element$);
      });

    });
  }

  // init
  interactionModel.init();

})(jQuery, window);

