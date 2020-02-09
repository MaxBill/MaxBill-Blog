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

var precacheConfig = [["D:/DEVE01/PROJECT01/MaxBill-Blog/public/212834041.html","5c8ce1aa923d9956618c85f7e5a15520"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/3439513514.html","d12d64298461a74a4c3dcce8d21f73c2"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/4293262294.html","987312f4cd1fa7d134bb3ccfe14246c4"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/about/index.html","22aa21ace4472f336edcf46774f3f9f3"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/archives/2019/11/index.html","2014e41df274fecc0bde7177dad1aa05"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/archives/2019/index.html","b7884572a90d929b3c9a87bb4bf53967"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/archives/2020/01/index.html","8b2fbb854b138afdd31261e556284f17"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/archives/2020/index.html","1f1bd52e87ea1882fbef3cc024cb8450"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/archives/index.html","72fd53c037fc8b6ea392fe733715c463"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/audio/index.html","2474be0a4f5f4c9cbaf0a8239815f300"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/categories/index.html","62217ae79a5c64ec5adff3d66229b073"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/categories/学分布式/index.html","2a74d33a0d76d5d8136b7038f51421d1"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/categories/建站过程/index.html","f137ec59ce294ca1040275e6f7b09b7b"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/css/index.css","79c289c39b883c9aa1c07f0816fe4f26"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/image/index.html","6591b350b744d938f36f50c747f740fe"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/index.html","375380548593ae784624366318f775f7"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/links/index.html","609046c637f712a0760bdf6aa64e66eb"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/tags/FastDFS/index.html","190444e5ae3ef8d2b77bfbb22554b0c4"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/tags/Hexo/index.html","5e1ef39ffce642d5f806fb302de00903"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/tags/Hexo博客/index.html","41bedc9b053f9877708172ffdacd46f8"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/tags/index.html","8af06cc0ae6d07d0dfdb8517c711869a"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/tags/分布式文件系统/index.html","7a2bf2bba204abc43439335d5926b271"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/tags/高可用/index.html","0a1b6a5fd8b0434b52ecee9480679dfb"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/video/index.html","196102100fbd30940eb0caa109dd03f4"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/vitae/index.html","179eb902ee930d0edcb6c5cc53d26305"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/words/index.html","51089deb2901d8c2524580fd260d886a"]];
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







