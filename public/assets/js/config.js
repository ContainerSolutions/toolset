'use strict';

angular.module('Toolset.Config', []).
    value('config', {
        host: "http://toolset.container-solutions.com/",
        applications: [
            {
                title: "Eclipse",
                subtitle: "Java IDE",
                description: "<p></p>",
                url: "https://eclipse.org/",
                logo: "eclipse-logo.jpg",
                base_dir: "eclipse",
                commands: [
                    //"curl $TOOLSET_HOST/static/downloads/pres-base-0.1/pres.tar | tar xv",
                    //"docker run -p 8000:8000 -p 35729:35729 -v $(pwd)/pres/:/revealjs/pres/:ro containersol/pres-base:0.1"
                ]
            },
            {
                title: "Reveal.js",
                subtitle: "Presentations in browser",
                description: "<p>Go to localhost:8080. The presentation resides in your project directory; why not open a new tab and edit pres/slides.md?</p><p>Note that the image run RevealJS 2.6 and not yet 3.0. It has been tested in Chrome and been found to be a bit buggy in Firefox.</p>",
                url: "https://github.com/ContainerSolutions/reveal.js",
                logo: "revealjs-logo.jpg",
                base_dir: "reveal-js-pres",
                commands: [
                    "curl $TOOLSET_HOST/static/downloads/pres-base-0.1/pres.tar | tar xv",
                    "docker run -p 8000:8000 -p 35729:35729 -v $(pwd)/pres/:/revealjs/pres/:ro containersol/pres-base:0.1"
                ]
            }
        ]
    });