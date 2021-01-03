/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2016/02/17/hello-hexo/index.html","80a56dad97e8ddb6d083089cfa504849"],["2016/02/17/hexo-theme/index.html","ff512a8dc1f53363e646dc6fae37be9b"],["2016/02/24/web-storage-api/index.html","91e655084f885780bc6699aa8cc0ba4c"],["2016/03/25/webuploader/index.html","abf0c22cbd4e20e29a32c72c0f03efd7"],["2016/04/03/自定义Yeoman生成器/index.html","3487c48fd752d9d84ea4b094ec2277b2"],["2016/04/05/readList-1/index.html","43936716ca74ff04b6dcbbd0523498c0"],["2016/04/06/移动端Web上传图片/index.html","7165f93552e43cef698991b6e1f328d7"],["2016/04/25/docker入门/index.html","113bdffeb038bdd75b05f0249e756331"],["2016/04/28/three-js-beginer/index.html","cdac756758e857f0b431a6eefe107a9d"],["2016/05/06/readList/index.html","a830a880a4ae978a501a7f3fd4c687a8"],["2016/05/10/koa-begainer/index.html","014ddfe44eeb4ef52fc46cadd3ca475f"],["2016/06/02/readList-2016-06-01/index.html","1dbcfb1e3a3e1e436242202491d0534b"],["2016/06/06/hackathon-blog/index.html","43b79971d181d7f3005da0816c1a47dc"],["2016/07/06/React课程学习/index.html","93156f2479424aca2dc2dcc4917a5b8c"],["2016/08/08/readList-201608/index.html","f5d1b3530b11b9b2e7680c3057e9f372"],["2017/01/10/小程序/index.html","02744bac1e33b120e2893453e27b5453"],["2018/12/31/Typescript-cheatSheet/index.html","efcfd7753907fc172628e78809cdeb4c"],["about/index.html","bb80192acf56747ff62eaaec8972d8a5"],["archives/2016/02/index.html","273d8ef941bcada38107c2f929f68968"],["archives/2016/03/index.html","0da1ac305562989e91e8d9967a49c82e"],["archives/2016/04/index.html","bab3d1e1a594bc6a73178a9b7dc012c2"],["archives/2016/05/index.html","3e23af085cdd33d63c30368e0abb8702"],["archives/2016/06/index.html","9c92024a4ee0d33aab2dde6333f686b6"],["archives/2016/07/index.html","79d464d9c7e60d7dfcd84fb1879763c3"],["archives/2016/08/index.html","42ae99422e839ab3f24fb52d1d50c504"],["archives/2016/index.html","8580465101d35522e6bfa62c08399c18"],["archives/2016/page/2/index.html","7012e7ea18ff339a45901cab50a5884b"],["archives/2017/01/index.html","32f10443a2c2b691e722d20926298cc6"],["archives/2017/index.html","9571cbc321116018f5568310b8136642"],["archives/2018/12/index.html","cf36bed27b8ac1faf61b284c17707389"],["archives/2018/index.html","7cc8cad043edbee4caa8a3f6762a156d"],["archives/index.html","005e89237f10031cc6af214b4b30d260"],["archives/page/2/index.html","cb94b448195af76f4e68abef4bebd337"],["baidu_verify_aH9Bnk1gKE.html","4d301743a1ee324246c74c0a6edee057"],["categories/F2E/React/index.html","45fb962e077faa92eb4d09ef08ddbac2"],["categories/F2E/index.html","66eb9420ae599db2876327fc649d6115"],["categories/F2E/three-js/index.html","7bdb09cc99cc849302a547bcd7882cac"],["categories/Nodejs/index.html","f9575c04ce6fa5e3f7aef8ba67c05f65"],["categories/ReadList/index.html","bc9c4c481c925605efa5556762825582"],["categories/docker/index.html","ef8e18c663b8bedb404afca32e682f86"],["categories/index.html","ed50434b85faf0b8e45da030af39fde8"],["categories/node/index.html","07a73ee3e98d2941082365f2ff461535"],["css/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["css/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["css/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["css/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["css/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["css/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["css/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["css/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["css/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["css/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["css/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["css/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["css/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["css/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["css/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["css/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["css/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["css/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["css/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["css/prism/prism-atom-dark.css","d9af2d2cd6a4a36e522b2a3ff0ad5e3e"],["css/prism/prism-coy.css","b7bff98c4d9a8a087d2367cc39fb4a40"],["css/prism/prism-default.css","d9a21ff5854cf52037dd60c3cfbcbd00"],["css/prism/prism-okaidia.css","269c50be5a5c53739c1dbe2f9b52001d"],["css/prism/prism-solarized-light.css","0cd109ec828f72e8b367ca06333e1774"],["css/prism/prism-tomorrow-night.css","627e437bf3e032a1058acaabbae6cbe7"],["css/style.css","db268133cacee0c8fd81a0a65adbf953"],["img/QQ截图20160301204728.jpg","b260d7e0c91140b539c37969ca0811fb"],["img/QQ截图20160403180630.jpg","af3a92e159ceecfad58aa39d59cbf552"],["img/QQ截图20160613193005.jpg","a412cdc0cb7df249114db60685395701"],["img/alipay.png","ed99eccab8b711d7167ce66822241aa7"],["img/arrow-right.png","56b4e84ca5aeba8f592df8ce01bfc083"],["img/back_blue.png","8c9f2204acb9cff1923f09cff4abec9c"],["img/brand.jpg","3083d17c078f5ba2da12be28728c57cd"],["img/cc.png","40e8d4f2367ed503ec760572d78852de"],["img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["img/su-logo.png","792f3e66370d700039da2a426451c02a"],["img/wechat.png","63e8456a929f42b62f4affd0703c42e9"],["index.html","4959694b89f626754a91ea90c9eff366"],["js/Valine.min.js","14aa6fa3fb2c130a4e341f059fabb0ff"],["js/main.js","7a99636f0c531d80e0820d469bde30b2"],["js/main.min.js","add6756e3663809c9d4087a36280b770"],["js/prism-vim.js","b2b47f3aae64d5a5ff792efea91a281b"],["js/prism.js","e083b23235956f69d97d6373a4062de8"],["js/search.js","e20a0cab5d504c5012fb0c41cda9c1fe"],["js/search.min.js","f901db6e7faecf102f487d3920540531"],["page/2/index.html","c5316dcc37fd6c5220ab18ae06197f7d"],["tags/CheatSheet/index.html","3db2bec9a29cce34b6f63fd0be2aecee"],["tags/F2E/index.html","2933d457e277af737bb2a27c284fba80"],["tags/Nodejs/index.html","a17fa8325f0bd2ffa786bd7b50428f5a"],["tags/React/index.html","b6752f3df4a6177d325c1574c9e555e4"],["tags/Redux/index.html","b47b0eba085373e9fa4e3d035070e42d"],["tags/Typescript/index.html","035abdf44a7dcc9f469aa45b1a744335"],["tags/beginer/index.html","329778d97024e337977a9decc89d35ca"],["tags/blog/index.html","792569ba35e6af48107f9aad11c3bda7"],["tags/canvas/index.html","14550df42668d6d5ae99e7f8c705a4d0"],["tags/docker/index.html","3d6fad2117aa4065a6ec429cfa303117"],["tags/generator/index.html","9965a8e00c3e698c0a75ff8cc05b5b0a"],["tags/heox/index.html","002ae14c8dcc31960403516ec8a13ea5"],["tags/index.html","79f09790312b112569e95165506b4044"],["tags/kmapp/index.html","51b42d161a9d0b680e62b57ac634fe87"],["tags/koa/index.html","b3d45f007e0d82636bdf3fb1c47484df"],["tags/localStorage/index.html","3a88f59041b222961f97fffe47d8dd51"],["tags/node/index.html","65d59e460d09f576a26e23baabd025da"],["tags/readList/index.html","1bfdbc4449d2dbcd8a9becc71b0c8f6f"],["tags/sessionStorage/index.html","1d7a3233f3392c69d9038fa5171573a9"],["tags/three-js/index.html","812e39806a4a4e162c4dcd646b905667"],["tags/upload/index.html","5698d6c6c29bf464634a3770d5709739"],["tags/web-storage-api/index.html","079b834906e41d44ed283db4c2d46380"],["tags/webGL/index.html","6eecd7b1362c046156b1a220e19230ce"],["tags/webuploader/index.html","c90529758155a85d972e67f023b7a512"],["tags/yeoman/index.html","1760ab455403ced48c11f4505c9657aa"],["tags/前端/index.html","8214ce48896984dfe3f596f023199789"],["tags/小程序/index.html","9afec70fa060e5a4e9715b845f759cd4"],["tags/笔记/index.html","40f1218fa24444d7d524811bf056dcb7"],["vendors/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["vendors/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["vendors/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["vendors/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["vendors/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["vendors/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







