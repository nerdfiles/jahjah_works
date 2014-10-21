###*
@fileOverview
global JS file for the Website.
###
(($, w) ->

  #// DOM Interaction Namespace ////

  ###*
  Intensify
  @memberof interactionModel
  ###

  ###*
  Preview of Gallery Item

  @description

  Image previews which trigger "zoom" events and "purchase".
  ###

  ###*
  Foundation

  @using offcanvas
  ###

  ###*
  Initialization of DOM handlings
  @memberof interactionModel
  ###

  #// Internal/Implementation Functions ////

  ###*
  Deferred Intense Images Container

  @inner
  ###
  deferredIntenseImagesContainer = (selector) ->
    d = new $.Deferred()
    elementSearch = w.setInterval(->
      figure$ = $(selector)
      if figure$.length
        d.resolve figure$
        w.clearInterval elementSearch
    , 1000)

    return d.promise()

  ###*
  Intensify Gallery Item

  @inner
  ###
  intensifyGalleryItem = ->
    preview$ = $(this)
    preview$.on "click.previewIntenseImage", (e) ->
      img$ = $(e.target)
      miniChargeContainer$ = img$.prev()
      miniChargeContainerClone$ = miniChargeContainer$.clone()

      # Wait for Intense Image container to be injected at the tail of <body>
      # in the DOM.
      deferredIntenseImagesContainer(".intense-images--container").done (element$) ->
        miniChargeContainerClone$.appendTo element$

  interactionModel =
    intensify: ->
      $(".preview").each intensifyGalleryItem

    foundation: ->
      $(document).foundation()

    init: ->
      this.foundation()
      this.intensify()


  # init
  interactionModel.init()

) jQuery, window
