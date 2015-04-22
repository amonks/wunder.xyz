# wunder.xyz

These are the source files for [www.wunder.xyz](http://www.wunder.xyz). 

The website they generate is in the [gh-pages branch](https://github.com/amonks/wunder.xyz/tree/gh-pages) of this same repository.

## what

If you want to make a similar website, this might be a good starting point.

*   The artist pages are generated from data in [pieces.json](https://github.com/amonks/wunder.xyz/blob/master/pieces.json).
*   The statement on the [info page](http://www.wunder.xyz/info) is generated from text in [src/md](https://github.com/amonks/wunder.xyz/tree/master/src/md).
*   [Gruntfile.js](https://github.com/amonks/wunder.xyz/blob/master/Gruntfile.js) tells `grunt` which pages to build. You'll have to edit it if you want different artist pages.
*   Anything in [/pub](https://github.com/amonks/wunder.xyz/tree/master/pub) is copied directly into the final website. The images and the custom css for the cover page are in there.
*   Templates for each page are in [/src/jade](https://github.com/amonks/wunder.xyz/tree/master/src/jade).

## how

to build:

    npm install
    grunt build

to push to github-pages:

    grunt dist
