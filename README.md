# Mapping Gandhi

A static Jekyll-based site presenting content on Mahatma Gandhi's impact on a remote region of central India called Wardha.

Project content directed by Nico Slate. Code originally developed by Daniel Evans, Di-ay Tesoro Battad, Scott Weingart.

## Build

Build requires ruby ^2.3.0. Install the bundler gem, then install the project dependencies and run the jekyll build command:

```
gem install bundler
cd gandhi/
bundle install
bundle exec jekyll build
```

This will generate compiled HTML/CSS/JS in the `_site` folder.

The Carto API map embedded in ths site is served from https://danieljohnevans.carto.com/viz/abe2f3ce-eca7-11e6-956d-0ee66e2c9693/map

## Server

The website is served from lab-static.library.cmu.edu.

Copy the files from your locally-generated `_site` into `/vol/html/mapping_gandhi`

Large image and video assets are not included in this repo. Originals are stored on the server at `/vol/gandhi_assets` and should be copied into `/vol/html/mapping_gandhi/assets/img/`.

Permalink is www.gandhimap.org originally maps to http://dh-web.hss.cmu.edu/gandhi/, which now redirects to https://mapping-gandhi.library.cmu.edu
