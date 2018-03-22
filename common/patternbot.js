(function () {
/**
 * Patternbot includes
 * https://github.com/thomasjbradley/patternbot-includes
 * @author Thomas J Bradley <hey@thomasjbradley.ca>
 * @copyright 2018 Thomas J Bradley
 * @license MIT
 */
const patternBotIncludes = function (manifest) {
  'use strict';

  const loadingScreenConfig = {
    id: 'patternbot-loading-screen',
    cssId: 'patternbot-loading-screen-css',
    get css() { return `
      div#${loadingScreenConfig.id} {
        all: initial;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin: 0;
        padding: 0;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        background-color: ${manifest.commonInfo.readme.attributes.backgroundColour};
        border: 0;
        opacity: 1;
        color: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
        text-align: center;
      }

      h1#patternbot-loading-screen-title {
        all: initial;
        margin: 0;
        padding: 0;
        background-color: transparent;
        font-size: 18px;
        font-weight: normal;
        line-height: 1.5;
        color: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        text-align: center;
      }

      svg#patternbot-loading-gears {
        margin-bottom: 10px;
        height: 64px;
        width: 64px;
        opacity: .8;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      path#patternbot-loading-gears-top {
        opacity: .5;
        animation: patternbot-loading-spin 2s linear infinite;
        transform-origin: 80.8px 80.8px;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      path#patternbot-loading-gears-bottom {
        opacity: .7;
        animation: patternbot-loading-spin 2s linear reverse infinite;
        transform-origin: 176.3px 176.3px;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      @keyframes patternbot-loading-spin {
        0% { transform: rotate(0); }
        100% { transform: rotate(360deg); }
      }
    `},
    get html() { return `
      <div id="${loadingScreenConfig.id}">
        <svg id="patternbot-loading-gears" viewBox="0 0 256 256" width="256" height="256">
          <path id="patternbot-loading-gears-top" d="M151.3 86.9a51.3 51.3 0 0 0 .2-6.1 51.3 51.3 0 0 0-.2-6.1l-12-.9a57.9 57.9 0 0 0-4.3-15.9l9.9-6.8a59.2 59.2 0 0 0-6.1-10.6l-10.9 5a59.6 59.6 0 0 0-11.6-11.6l5.3-10.9a59.2 59.2 0 0 0-10.6-6.2l-7.1 9.7a60.2 60.2 0 0 0-15.8-4.2l-.9-12a57.5 57.5 0 0 0-6.4-.2 51.3 51.3 0 0 0-6.1.2l-.9 12A57.9 57.9 0 0 0 58 26.5l-7-9.7A59.2 59.2 0 0 0 40.4 23l5 10.9a68.4 68.4 0 0 0-11.8 11.5l-10.6-5A59.2 59.2 0 0 0 16.8 51l9.7 6.8a59.5 59.5 0 0 0-4.2 16l-11.8.9a23 23 0 0 0-.5 5.9 51.3 51.3 0 0 0 .2 6.1l11.8.9a59.5 59.5 0 0 0 4.2 16l-9.7 6.8a59.2 59.2 0 0 0 6.1 10.6l10.6-5A54.8 54.8 0 0 0 45 127.6l-5 10.9a59.2 59.2 0 0 0 10.6 6.1l6.8-9.7a60.2 60.2 0 0 0 15.8 4.2l.9 12h6.4a51.3 51.3 0 0 0 6.1-.2l.9-12a60.2 60.2 0 0 0 15.8-4.2l6.8 9.9a59.2 59.2 0 0 0 10.6-6.1l-5-11.1a53.7 53.7 0 0 0 11.6-11.6l10.9 5.2a59.2 59.2 0 0 0 6.1-10.6l-9.7-6.8a60.2 60.2 0 0 0 4.2-15.8zm-70.5 29.3a35.4 35.4 0 1 1 35.4-35.4 35.3 35.3 0 0 1-35.4 35.4z"/>
          <path id="patternbot-loading-gears-bottom" d="M242.8 200.6a51.3 51.3 0 0 0 1.8-5.9 51.3 51.3 0 0 0 1.4-6l-11.4-4a57.9 57.9 0 0 0 0-16.4l11.3-4a59.2 59.2 0 0 0-3.2-11.8l-11.8 2a59.6 59.6 0 0 0-8.1-14.2l7.8-9.1a59.2 59.2 0 0 0-8.7-8.7l-9.4 7.5a60.2 60.2 0 0 0-14.2-8.2l2.2-11.9a57.5 57.5 0 0 0-6.1-1.9 51.3 51.3 0 0 0-6-1.4l-4 11.4a57.9 57.9 0 0 0-16.4 0l-4.1-11.1a59.2 59.2 0 0 0-11.8 3.2l2 11.8a68.4 68.4 0 0 0-14.4 8.1l-9-7.5a59.2 59.2 0 0 0-8.7 8.7l7.6 9.1a59.5 59.5 0 0 0-8.3 14.4l-11.3-2.4a23 23 0 0 0-2 5.6 51.3 51.3 0 0 0-1.4 6l11.1 4a59.5 59.5 0 0 0-.1 16.6l-11.1 4.1a59.2 59.2 0 0 0 3.2 11.8l11.5-2a54.8 54.8 0 0 0 8.4 14.2l-7.6 9.2a59.2 59.2 0 0 0 8.7 8.7l9.1-7.6a60.2 60.2 0 0 0 14.2 8.2l-2.3 11.9 6.1 1.7a51.3 51.3 0 0 0 6 1.4l4-11.4a60.2 60.2 0 0 0 16.4 0l4 11.3a59.2 59.2 0 0 0 11.8-3.2l-1.9-12a53.7 53.7 0 0 0 14.2-8.1l9.1 7.8a59.2 59.2 0 0 0 8.7-8.7l-7.6-9.1a60.2 60.2 0 0 0 8.2-14.2zm-75.7 9.9a35.4 35.4 0 1 1 43.4-24.9 35.3 35.3 0 0 1-43.4 24.9z"/>
        </svg>
        <h1 id="patternbot-loading-screen-title">Building page…</h1>
      </div>
    `},
  };

  let downloadedAssets = {};

  const downloadHandler = function (e) {
    e.target.removeEventListener('load', downloadHandler);
    downloadedAssets[e.target.getAttribute('href')] = true;
  };

  const findRootPath = function () {
    const rootMatcher = /\/common\//;
    const allScripts = document.querySelectorAll('script:not([type])');
    let t = allScripts.length, i = 0;

    for (i = 0; i < t; i++) {
      if (rootMatcher.test(allScripts[i].src)) {
        return allScripts[i].src.split(rootMatcher)[0];
        break;
      }
    }
  };

  const addCssFile = function (href) {
    const newLink = document.createElement('link');

    downloadedAssets[href] = false;

    newLink.setAttribute('rel', 'stylesheet');
    newLink.setAttribute('href', href);
    newLink.addEventListener('load', downloadHandler);

    document.head.appendChild(newLink);
  }

  const bindAllCssFiles = function (rootPath) {
    if (manifest.commonInfo && manifest.commonInfo.readme && manifest.commonInfo.readme.attributes &&  manifest.commonInfo.readme.attributes.fontUrl) {
      addCssFile(manifest.commonInfo.readme.attributes.fontUrl);
    }

    if (manifest.patternLibFiles && manifest.patternLibFiles.commonParsable) {
      if (manifest.patternLibFiles.commonParsable.modulifier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.modulifier}`);
      if (manifest.patternLibFiles.commonParsable.gridifier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.gridifier}`);
      if (manifest.patternLibFiles.commonParsable.typografier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.typografier}`);
      if (manifest.patternLibFiles.commonParsable.theme) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.theme}`);
    }

    manifest.userPatterns.forEach((pattern) => {
      if (!pattern.css) return;

      pattern.css.forEach((css) => {
        addCssFile(`../${css.localPath}`);
      });
    });
  };

  const getPatternInfo = function (patternElem) {
    let patternInfoJson;
    const data = patternElem.innerText.trim();

    if (!data) return {}

    try {
      patternInfoJson = JSON.parse(data);
      return patternInfoJson;
    } catch (e) {
      console.group('JSON error in pattern include');
      console.log(patternElem.dataset.pattern);
      console.log(patternElem.innerText);
      console.log(e);
      console.groupEnd();
      return {};
    }
  };

  const getPatternUrl = function (rootPath, patternName) {
    patternName = (patternName.slice(-5) === '.html') ? patternName.slice(0, -5) : patternName;
    return `${rootPath}/patterns/${patternName}.html`;
  };

  const constructPattern = function (rootPath, patternElem) {
    return {
      name: patternElem.dataset.pattern,
      url: getPatternUrl(rootPath, patternElem.dataset.pattern),
      html: false,
      elem: false,
    };
  };

  const htmlStringToElem = function (html) {
    const doc = (new DOMParser()).parseFromString(html, 'text/html');
    return doc.body;
  };

  const replaceElementValue = function (elem, sel, data) {
    elem.innerText = data;
  };

  const replaceAttributeValue = function (elem, sel, data) {
    const isXlinkAttr = /xlink\:/.test(sel);
    const attr = sel.match(/\[([^\]]+)\]$/)[1];

    if (isXlinkAttr) {
      elem.setAttributeNS('http://www.w3.org/1999/xlink', attr, data);
    } else {
      elem.setAttribute(attr, data);
    }
  };

  const outputPattern = function (patternElem, patternDetails) {
    let patternOutElem, patternData;

    if (!patternDetails.html) return;

    patternOutElem = htmlStringToElem(patternDetails.html);
    patternData = getPatternInfo(patternElem);

    Object.keys(patternData).forEach((sel) => {
      const isAttributeSelector = /\[.*\]/.test(sel);
      const jsSel = sel.replace(/\[.*:/, '[*|');
      const elem = patternOutElem.querySelector(jsSel);

      if (!elem) {
        console.group('Cannot find element');
        console.log(`Selector: ${sel}`);
        console.log(`Pattern: ${patternDetails.name}`);
        console.log(JSON.stringify(patternData, null, 2));
        console.groupEnd();
        return;
      }

      if (isAttributeSelector) {
        replaceAttributeValue(elem, sel, patternData[sel]);
      } else {
        replaceElementValue(elem, sel, patternData[sel]);
      }
    });

    patternElem.parentNode.replaceChild(patternOutElem.firstElementChild, patternElem);
  };

  const showLoadingScreen = function () {
    const loadCssElem = document.createElement('style');

    loadCssElem.id = loadingScreenConfig.cssId;
    loadCssElem.appendChild(document.createTextNode(loadingScreenConfig.css));
    document.head.appendChild(loadCssElem);
    document.body.innerHTML += loadingScreenConfig.html;
  };

  const hideLoadingScreen = function () {
    const allDownloadedInterval = setInterval(() => {
      if (Object.values(downloadedAssets).includes(false)) return;

      clearInterval(allDownloadedInterval);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(loadingScreenConfig.id).remove();
          document.getElementById(loadingScreenConfig.cssId).remove();
        });
      });
    }, 50);
  };

  const findAllPatternTags = function () {
    return document.querySelectorAll('script[type="application/json"][data-pattern]');
  };

  const constructAllPatterns = function (rootPath, allPatternTags) {
    let allPatterns = {};

    [].forEach.call(allPatternTags, (patternElem) => {
      if (allPatterns[patternElem.dataset.pattern]) return;

      allPatterns[patternElem.dataset.pattern] = constructPattern(rootPath, patternElem);
    });

    return allPatterns;
  };

  const buildPatternFetchPromises = function (allPatternUrls) {
    return allPatternUrls.map((url) => {
      return new Promise((resolve, reject) => {
        downloadedAssets[url] = false;

        fetch(url).then((resp) => {
          if (resp.status >= 200 && resp.status <= 299) {
            return resp.text();
          } else {
            console.group('Cannot location pattern');
            console.log(resp.url);
            console.log(`Error ${resp.status}: ${resp.statusText}`);
            console.groupEnd();
            return '';
          }
        }).then(function (html) {
          downloadedAssets[url] = true;
          resolve(html);
        }).catch((e) => {
          console.group('Download error');
          console.log(url);
          console.log(e);
          console.groupEnd();
          resolve('');
        });
      });
    });
  };

  const loadAllPatterns = function (allPatterns) {
    let patternUrls = {};
    let allPatternKeys = Object.keys(allPatterns);

    allPatternKeys.forEach((patternKey) => {
      patternUrls[patternKey] = allPatterns[patternKey].url;
    });

    return new Promise((resolve, reject) => {
      Promise.all(buildPatternFetchPromises(Object.values(patternUrls))).then((allPatternsHtml) => {
        allPatternsHtml.forEach((html, i) => {
          allPatterns[allPatternKeys[i]].html = html;
        });
        resolve(allPatterns);
      }).catch((e) => {
        console.group('Pattern load error');
        console.log(e);
        console.groupEnd();
        resolve(allPatterns);
      });
    });
  };

  const renderAllPatterns = function (allPatternTags, allLoadedPatterns) {
    [].forEach.call(allPatternTags, (elem) => {
      outputPattern(elem, allLoadedPatterns[elem.dataset.pattern]);
    });
  };

  const init = function () {
    let rootPath, patternsToLoad, allPatternTags = [], allPatterns = [];

    showLoadingScreen();

    rootPath = findRootPath();
    bindAllCssFiles(rootPath);
    allPatternTags = findAllPatternTags();
    allPatterns = constructAllPatterns(rootPath, allPatternTags);

    loadAllPatterns(allPatterns).then((allLoadedPatterns) => {
      renderAllPatterns(allPatternTags, allLoadedPatterns);
      hideLoadingScreen();
    }).catch((e) => {
      console.group('Pattern load error');
      console.log(e);
      console.groupEnd();
    });
  };

  document.addEventListener('DOMContentLoaded', init);
};


/** 
 * Patternbot library manifest
 * /Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library
 * @version 1521690188884
 */
const patternManifest_1521690188883 = {
  "commonInfo": {
    "modulifier": [
      "responsive",
      "images",
      "list-group",
      "embed",
      "media-object",
      "icons",
      "hidden",
      "positioning",
      "nice-lists",
      "forms",
      "buttons",
      "accessibility"
    ],
    "modulifierUrl": "responsive;images;list-group;embed;media-object;icons;hidden;positioning;nice-lists;forms;buttons;accessibility",
    "gridifier": [
      {
        "prefix": "xs",
        "columns": 6,
        "mq": 0
      },
      {
        "prefix": "s",
        "columns": 6,
        "mq": 25
      },
      {
        "prefix": "m",
        "columns": 6,
        "mq": 38
      },
      {
        "prefix": "l",
        "columns": 6,
        "mq": 60
      }
    ],
    "gridifierUrl": "xs,6,0,0,0;s,6,25,0,0;m,6,38,1,1;l,6,60,1,1",
    "typografier": [
      {
        "mq": 0,
        "fontSize": 100,
        "lineHeight": 1.3,
        "scale": 1.125
      },
      {
        "mq": 38,
        "fontSize": 110,
        "lineHeight": 1.4,
        "scale": 1.25
      },
      {
        "mq": 60,
        "fontSize": 120,
        "lineHeight": 1.5,
        "scale": 1.25
      },
      {
        "mq": 90,
        "fontSize": 130,
        "lineHeight": 1.5,
        "scale": 1.25
      }
    ],
    "typografierUrl": "0,100,1.3,1.125,0;38,110,1.4,1.250,1;60,120,1.5,1.250,1;90,130,1.5,1.250,1",
    "theme": {
      "colours": {
        "primary": [
          {
            "name": "--color-primary",
            "namePretty": "Primary",
            "raw": "#e6e6e6",
            "hex": "#e6e6e6",
            "rgba": "rgba(230, 230, 230, 1)"
          },
          {
            "name": "--color-primary-light",
            "namePretty": "Primary light",
            "raw": "#f4f4f4",
            "hex": "#f4f4f4",
            "rgba": "rgba(244, 244, 244, 1)"
          }
        ],
        "secondary": [
          {
            "name": "--color-secondary",
            "namePretty": "Secondary",
            "raw": "#7d918a",
            "hex": "#7d918a",
            "rgba": "rgba(125, 145, 138, 1)"
          },
          {
            "name": "--color-secondary-medium",
            "namePretty": "Secondary medium",
            "raw": "#707070",
            "hex": "#707070",
            "rgba": "rgba(112, 112, 112, 1)"
          },
          {
            "name": "--color-secondary-dark",
            "namePretty": "Secondary dark",
            "raw": "#3c3f42",
            "hex": "#3c3f42",
            "rgba": "rgba(60, 63, 66, 1)"
          }
        ],
        "neutral": [],
        "accent": [
          {
            "name": "--color-accent",
            "namePretty": "Accent",
            "raw": "#1d3a3d",
            "hex": "#1d3a3d",
            "rgba": "rgba(29, 58, 61, 1)"
          }
        ]
      },
      "fonts": {
        "primary": {
          "name": "--font-primary",
          "namePretty": "Poppins",
          "raw": "\"Poppins\", sans-serif",
          "weights": {
            "600": {
              "weight": "600",
              "hasNormal": true,
              "hasItalic": false
            },
            "normal": {
              "weight": "normal",
              "hasNormal": true,
              "hasItalic": false
            }
          }
        },
        "secondary": {},
        "accent": []
      },
      "coloursRaw": {
        "--color-primary": "#e6e6e6",
        "--color-primary-light": "#f4f4f4",
        "--color-secondary": "#7d918a",
        "--color-secondary-medium": "#707070",
        "--color-secondary-dark": "#3c3f42",
        "--color-accent": "#1d3a3d"
      },
      "fontsRaw": {
        "--font-primary": "\"Poppins\", sans-serif"
      }
    },
    "readme": {
      "attributes": {
        "name": "Black Stag Apparel",
        "fontURL": "https://fonts.googleapis.com/css?family=Poppins:400,600",
        "accentColor": "#1d3a3d",
        "fontUrl": "https://fonts.googleapis.com/css?family=Poppins:400,600",
        "accentColour": "#1d3a3d",
        "backgroundColour": "#fff",
        "interfaceColours": {
          "primary": 0,
          "opposite": 255
        }
      }
    },
    "icons": [
      "email",
      "facebook",
      "instagram",
      "logo-large",
      "logo-small",
      "nav-close",
      "nav-open",
      "twitter"
    ],
    "interfaceColours": {
      "primary": 0,
      "opposite": 255
    }
  },
  "patternLibFiles": {
    "commonParsable": {
      "gridifier": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/common/grid.css",
      "typografier": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/common/type.css",
      "modulifier": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/common/modules.css",
      "theme": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/common/theme.css"
    },
    "imagesParsable": {
      "icons": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/images/icons.svg"
    },
    "logos": {
      "sizeLarge": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/images/logo-256.svg",
      "size64": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/images/logo-64.svg",
      "size32": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/images/logo-32.svg",
      "size16": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/images/logo-16.svg",
      "size16Local": "logo-16.svg",
      "sizeLargeLocal": "logo-256.svg",
      "size32Local": "logo-32.svg",
      "size64Local": "logo-64.svg"
    },
    "patterns": [
      "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/banners",
      "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/buttons",
      "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/cards",
      "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/footer",
      "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms",
      "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/header",
      "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/images",
      "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/navigation"
    ],
    "pages": []
  },
  "userPatterns": [
    {
      "name": "banners",
      "namePretty": "Banners",
      "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/banners",
      "html": [
        {
          "name": "footer-banner",
          "namePretty": "Footer banner",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/banners/footer-banner.html",
          "localPath": "patterns/banners/footer-banner.html",
          "readme": {}
        },
        {
          "name": "home-banner",
          "namePretty": "Home banner",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/banners/home-banner.html",
          "localPath": "patterns/banners/home-banner.html",
          "readme": {}
        },
        {
          "name": "sale-banner",
          "namePretty": "Sale banner",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/banners/sale-banner.html",
          "localPath": "patterns/banners/sale-banner.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/banners/README.md",
          "localPath": "patterns/banners/README.md"
        }
      ],
      "css": [
        {
          "name": "banners",
          "namePretty": "Banners",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/banners/banners.css",
          "localPath": "patterns/banners/banners.css"
        }
      ]
    },
    {
      "name": "buttons",
      "namePretty": "Buttons",
      "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/buttons",
      "html": [
        {
          "name": "buttons-on-dark",
          "namePretty": "Buttons on dark",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/buttons/buttons-on-dark.html",
          "localPath": "patterns/buttons/buttons-on-dark.html",
          "readme": {
            "backgroundColor": "#3c3f42",
            "backgroundColour": "#3c3f42",
            "interfaceColours": {
              "primary": 255,
              "opposite": 0
            }
          }
        },
        {
          "name": "buttons-on-light",
          "namePretty": "Buttons on light",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/buttons/buttons-on-light.html",
          "localPath": "patterns/buttons/buttons-on-light.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/buttons/README.md",
          "localPath": "patterns/buttons/README.md"
        }
      ],
      "css": [
        {
          "name": "buttons",
          "namePretty": "Buttons",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/buttons/buttons.css",
          "localPath": "patterns/buttons/buttons.css"
        }
      ]
    },
    {
      "name": "cards",
      "namePretty": "Cards",
      "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/cards",
      "html": [
        {
          "name": "home-card",
          "namePretty": "Home card",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/cards/home-card.html",
          "localPath": "patterns/cards/home-card.html",
          "readme": {}
        },
        {
          "name": "product-card",
          "namePretty": "Product card",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/cards/product-card.html",
          "localPath": "patterns/cards/product-card.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/cards/README.md",
          "localPath": "patterns/cards/README.md"
        }
      ],
      "css": [
        {
          "name": "cards",
          "namePretty": "Cards",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/cards/cards.css",
          "localPath": "patterns/cards/cards.css"
        }
      ]
    },
    {
      "name": "footer",
      "namePretty": "Footer",
      "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/footer",
      "html": [
        {
          "name": "footer",
          "namePretty": "Footer",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/footer/footer.html",
          "localPath": "patterns/footer/footer.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/footer/README.md",
          "localPath": "patterns/footer/README.md"
        }
      ],
      "css": [
        {
          "name": "footer",
          "namePretty": "Footer",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/footer/footer.css",
          "localPath": "patterns/footer/footer.css"
        }
      ]
    },
    {
      "name": "forms",
      "namePretty": "Forms",
      "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms",
      "html": [
        {
          "name": "basic-field",
          "namePretty": "Basic field",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms/basic-field.html",
          "localPath": "patterns/forms/basic-field.html",
          "readme": {
            "width": 400
          }
        },
        {
          "name": "checkbox",
          "namePretty": "Checkbox",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms/checkbox.html",
          "localPath": "patterns/forms/checkbox.html",
          "readme": {
            "width": 400
          }
        },
        {
          "name": "drop-down",
          "namePretty": "Drop down",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms/drop-down.html",
          "localPath": "patterns/forms/drop-down.html",
          "readme": {
            "width": 400
          }
        },
        {
          "name": "radio-buttons",
          "namePretty": "Radio buttons",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms/radio-buttons.html",
          "localPath": "patterns/forms/radio-buttons.html",
          "readme": {
            "width": 400
          }
        },
        {
          "name": "radio-sizes",
          "namePretty": "Radio sizes",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms/radio-sizes.html",
          "localPath": "patterns/forms/radio-sizes.html"
        },
        {
          "name": "text-field",
          "namePretty": "Text field",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms/text-field.html",
          "localPath": "patterns/forms/text-field.html",
          "readme": {
            "width": 400
          }
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms/README.md",
          "localPath": "patterns/forms/README.md"
        }
      ],
      "css": [
        {
          "name": "forms",
          "namePretty": "Forms",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms/forms.css",
          "localPath": "patterns/forms/forms.css"
        }
      ]
    },
    {
      "name": "header",
      "namePretty": "Header",
      "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/header",
      "html": [
        {
          "name": "header",
          "namePretty": "Header",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/header/header.html",
          "localPath": "patterns/header/header.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/header/README.md",
          "localPath": "patterns/header/README.md"
        }
      ],
      "css": [
        {
          "name": "header",
          "namePretty": "Header",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/header/header.css",
          "localPath": "patterns/header/header.css"
        }
      ]
    },
    {
      "name": "images",
      "namePretty": "Images",
      "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/images",
      "html": [
        {
          "name": "header-image",
          "namePretty": "Header image",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/images/header-image.html",
          "localPath": "patterns/images/header-image.html",
          "readme": {}
        },
        {
          "name": "product-array",
          "namePretty": "Product array",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/images/product-array.html",
          "localPath": "patterns/images/product-array.html",
          "readme": {}
        },
        {
          "name": "social-photo-array",
          "namePretty": "Social photo array",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/images/social-photo-array.html",
          "localPath": "patterns/images/social-photo-array.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/images/README.md",
          "localPath": "patterns/images/README.md"
        }
      ],
      "css": [
        {
          "name": "images",
          "namePretty": "Images",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/images/images.css",
          "localPath": "patterns/images/images.css"
        }
      ]
    },
    {
      "name": "navigation",
      "namePretty": "Navigation",
      "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/navigation",
      "html": [
        {
          "name": "breadcrumbs",
          "namePretty": "Breadcrumbs",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/navigation/breadcrumbs.html",
          "localPath": "patterns/navigation/breadcrumbs.html",
          "readme": {}
        },
        {
          "name": "side-navigation",
          "namePretty": "Side navigation",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/navigation/side-navigation.html",
          "localPath": "patterns/navigation/side-navigation.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/navigation/README.md",
          "localPath": "patterns/navigation/README.md"
        }
      ],
      "css": [
        {
          "name": "navigation",
          "namePretty": "Navigation",
          "path": "/Users/delphinesullivan/Dropbox/Graphic Design Program/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/navigation/navigation.css",
          "localPath": "patterns/navigation/navigation.css"
        }
      ]
    }
  ],
  "config": {
    "patternLibFilename": "index.html",
    "manifestFilename": ".patternbot-manifest.json",
    "includesFilename": "patternbot.js",
    "commonFolder": "/common",
    "commonParsableFilenames": {
      "modulifier": "modules.css",
      "gridifier": "grid.css",
      "typografier": "type.css",
      "theme": "theme.css"
    },
    "imagesFolder": "/images",
    "imagesParsableFilenames": {
      "icons": "icons.svg"
    },
    "patternsFolder": "/patterns",
    "pagesFolder": "/pages"
  }
};

patternBotIncludes(patternManifest_1521690188883);
}());