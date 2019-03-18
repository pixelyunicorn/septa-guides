# Campus Guides

Built with Jekyll and hosted on GitHub Pages.

## Content Structure

| Directory |  |
| --- | --- |
| ````pages/```` | List of pages on the site. |
| ````pdf/```` | Printable PDF exports! |


## Development Structure

| Directory |  |
| --- | --- |
| ````_includes/```` | Contents of < head >, navigation, and footer. |
| ````_layouts/```` | Page layout templates. |
| ````_sass/```` | Partial stylesheets. Modify _site.scss for site styles. |
| ````css/```` | Stylesheet compiler, don't touch this file. |
| ````icons/```` | Icon font! See icons/demo.html for a full list. |
| ````img/```` | Static assets necessary to display the site. |

| File |  |
| --- | --- |
| ````404.html/```` | 404 page. Easter egg, maybe? |
| ````CNAME```` | Sets up a CNAME record for the domain the site is on. |
| ````_config.yml```` | Site settings and commonly used phrases.  |
| ````robots.txt```` | Bot access settings, please change before deploying to production. |

## Running the site locally

Make sure you have ruby installed, then...

````bash
# install gems (first time only)
bundle install

# run server on localhost:4000. SCSS and page content compiled automatically on save.
bundle exec jekyll serve --port 4000 --watch
````
