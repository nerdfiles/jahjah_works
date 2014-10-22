#require 'foundation'
add_import_path "../../vendor/foundation/scss"
add_import_path "../../vendor/organic-css/src"
add_import_path "../../vendor/organic-css/src/molecules"

http_path = "/"
css_dir = "stylesheets"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"
#output_style = :compressed
output_style = :expanded
# relative_assets = true
line_comments = false
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
