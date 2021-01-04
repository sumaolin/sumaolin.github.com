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

var precacheConfig = [["2016/02/17/hello-hexo/index.html","c9d220d28f693dfaaa1f44b48c94afbb"],["2016/02/17/hexo-theme/index.html","ceeb520d03a3e6eadb04480930297a75"],["2016/02/24/web-storage-api/index.html","93711e11998b672b2d7216b69b7740d1"],["2016/03/25/webuploader/index.html","d9f5fd8bb1d9d58bec58cb6b9a8a9efe"],["2016/04/03/自定义Yeoman生成器/index.html","89a795c660f8067fdd777ec7028ac181"],["2016/04/05/readList-1/index.html","d41aef64d95107f634092b08ff630766"],["2016/04/06/移动端Web上传图片/index.html","c9cc39089fdcc7e2bb8ddaa204d37316"],["2016/04/25/docker入门/index.html","cc3c4eab863ec6278c47595a7803e9f3"],["2016/04/28/three-js-beginer/index.html","627e6affd845ade54cd82174df5a1752"],["2016/05/06/readList/index.html","451853e4e082f276d333de35c1cf033f"],["2016/05/10/koa-begainer/index.html","29b9d5e02897b52f25291b7c7d059ea4"],["2016/06/02/readList-2016-06-01/index.html","80bc4b73698bcd0801e944565a10a4f8"],["2016/06/06/hackathon-blog/index.html","4448924ad8436a1b25d782c36b779c7b"],["2016/07/06/React课程学习/index.html","05ff7bf698c468a098b803492c88ee68"],["2016/08/08/readList-201608/index.html","135c537b61918025016fc0166b7aead3"],["2017/01/10/小程序/index.html","16d8c1c74d7cc545d610c65c17b84e9b"],["2018/12/31/Typescript-cheatSheet/index.html","9fe3629380ff9cae7f90ac8e13e13871"],["about/index.html","c72ddd37924b3d74658ddf8be8791c2f"],["archives/2016/02/index.html","66622894c9df5a9a47fb712f83c85de7"],["archives/2016/03/index.html","676df9f5c28e347230a1fde01be9d4ef"],["archives/2016/04/index.html","4d8d41ac884847380894d37bff171c2f"],["archives/2016/05/index.html","bb0446c6152c58b7146ba8226fbb7b84"],["archives/2016/06/index.html","de2336ce66b1c924aab8f0682846328b"],["archives/2016/07/index.html","5e30a95834758ab0e52cf31c26ec9424"],["archives/2016/08/index.html","5c8b7393d12bcdf56c4dfa16aaf9583d"],["archives/2016/index.html","7b42ca6596109f86d8be4df4a7079c5a"],["archives/2016/page/2/index.html","aaa72746c5754609ac860c76557c057a"],["archives/2017/01/index.html","8dd6578e61f47a521fc037c68ad04693"],["archives/2017/index.html","efea76e05472a8eff56834342e1633a8"],["archives/2018/12/index.html","ddceebe3ce3b1dd2a2bc49755d94aa84"],["archives/2018/index.html","2bd9f7f37c30cf5405a5beb0f26db80f"],["archives/index.html","05dca24b13dde51dbd91f5f8406537ab"],["archives/page/2/index.html","35fb4f93041d41cd5909ab7ca412b1a4"],["baidu_verify_aH9Bnk1gKE.html","4273226968c8e14bbc3e66b1dd39e7b9"],["categories/F2E/React/index.html","ebcd4e37b5729023dd088cee542a73ae"],["categories/F2E/index.html","e0b3d3de79d798f71b86152b906f87ae"],["categories/F2E/three-js/index.html","f408f641fe617034f5633dad08c64b35"],["categories/Nodejs/index.html","ef345e5b32df60703dd557881fd28942"],["categories/ReadList/index.html","b54cdfe557213b1ce97165d7109c4f9a"],["categories/docker/index.html","6d50b9d5ce00d5e0ba7898b2ae89efa7"],["categories/index.html","1fa5366fd2de644de8f31277fae6ce23"],["categories/node/index.html","c4b14db0b73f743fbf1a8fb8b83ea9fc"],["css/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["css/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["css/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["css/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["css/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["css/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["css/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["css/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["css/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["css/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["css/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["css/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["css/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["css/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["css/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["css/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["css/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["css/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["css/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["css/prism/prism-atom-dark.css","d9af2d2cd6a4a36e522b2a3ff0ad5e3e"],["css/prism/prism-coy.css","b7bff98c4d9a8a087d2367cc39fb4a40"],["css/prism/prism-default.css","d9a21ff5854cf52037dd60c3cfbcbd00"],["css/prism/prism-okaidia.css","269c50be5a5c53739c1dbe2f9b52001d"],["css/prism/prism-solarized-light.css","0cd109ec828f72e8b367ca06333e1774"],["css/prism/prism-tomorrow-night.css","627e437bf3e032a1058acaabbae6cbe7"],["css/style.css","db268133cacee0c8fd81a0a65adbf953"],["img/QQ截图20160301204728.jpg","b260d7e0c91140b539c37969ca0811fb"],["img/QQ截图20160403180630.jpg","af3a92e159ceecfad58aa39d59cbf552"],["img/QQ截图20160613193005.jpg","a412cdc0cb7df249114db60685395701"],["img/alipay.png","ed99eccab8b711d7167ce66822241aa7"],["img/arrow-right.png","56b4e84ca5aeba8f592df8ce01bfc083"],["img/back_blue.png","8c9f2204acb9cff1923f09cff4abec9c"],["img/brand.jpg","3083d17c078f5ba2da12be28728c57cd"],["img/cc.png","40e8d4f2367ed503ec760572d78852de"],["img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["img/su-logo.png","792f3e66370d700039da2a426451c02a"],["img/wechat.png","63e8456a929f42b62f4affd0703c42e9"],["index.html","e83866d425a47f1ad2b57002092bf72d"],["js/Valine.min.js","14aa6fa3fb2c130a4e341f059fabb0ff"],["js/main.js","7a99636f0c531d80e0820d469bde30b2"],["js/main.min.js","add6756e3663809c9d4087a36280b770"],["js/prism-vim.js","b2b47f3aae64d5a5ff792efea91a281b"],["js/prism.js","e083b23235956f69d97d6373a4062de8"],["js/search.js","e20a0cab5d504c5012fb0c41cda9c1fe"],["js/search.min.js","f901db6e7faecf102f487d3920540531"],["page/2/index.html","77ac091c7883cc7c2b15f06a29267dd8"],["tags/CheatSheet/index.html","acf23cd60cc848dfb9c005565d0f38c7"],["tags/F2E/index.html","457be5730cd40bc1a9e7bf665a0b3917"],["tags/Nodejs/index.html","95456f2aea43b9c7a2b7032f0182c81d"],["tags/React/index.html","60efbf7ae6a2efdce6e2607851dd1b86"],["tags/Redux/index.html","83339e2b4ab49b6ad1cd7244ea9714d8"],["tags/Typescript/index.html","d97b3dfb0eab32165ca6c09e2ec4f4d3"],["tags/beginer/index.html","33c58085decf6fad16a630cc4cd11b80"],["tags/blog/index.html","1c0ca8cf6977e77c09cb027d3b5d3b04"],["tags/canvas/index.html","cf1dfb7c467e7cb8c00e00c9498bcdbd"],["tags/docker/index.html","25404cd0563eebba05bce45185b6cb21"],["tags/generator/index.html","06f0bee1df7d53f6ba1ab84ae9420316"],["tags/heox/index.html","678875be52351693ae8608838ff08839"],["tags/index.html","a5ca7667be5c922bb3bbddf41fac15a1"],["tags/kmapp/index.html","f8308ce0880504c57f69f8096e1df03e"],["tags/koa/index.html","45e37cf2d35b06cd797e0044d4f9d456"],["tags/localStorage/index.html","d261ca64266fff113c85990d109f5b84"],["tags/node/index.html","c31d42319eea3ae9d881ccdc6def17d1"],["tags/readList/index.html","453a6304811935e1a88350f0d19af131"],["tags/sessionStorage/index.html","277e5ae4bfe51e1ee76041fc7226bab3"],["tags/three-js/index.html","9173c7bbad321632a11b1040e033c172"],["tags/upload/index.html","da2ace2fc588d8229b9ac70f015284d0"],["tags/web-storage-api/index.html","d8907bf0fc0460f115bb94b033c4d871"],["tags/webGL/index.html","66cb862e3c282c3ca82ad4e54ef06999"],["tags/webuploader/index.html","13927d004ab0aae03447b78578708930"],["tags/yeoman/index.html","6aecaa3d8784fcab6a0d0724ca2a7c7e"],["tags/前端/index.html","08d3775bd32ed8687322d07f46366c53"],["tags/小程序/index.html","bc974beb90ed26f7ba28abed4eb4ece2"],["tags/笔记/index.html","a1a979e83a0963958a739d6f5f7f5b2a"],["vendors/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["vendors/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["vendors/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["vendors/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["vendors/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["vendors/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"]];
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







