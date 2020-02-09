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

var precacheConfig = [["D:/DEVE01/PROJECT01/MaxBill-Blog/public/212834041.html","bb585977692cde9ec655003a54fabcdf"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/3439513514.html","290336e688fcf371ce7c643aa32f8432"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/404.html","564d3f8d7984101925de95fdd0df8c1f"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/4293262294.html","ea3729843f8e39d5c6add468fa9ff875"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/about/index.html","269452baf4ebc9f0e285bb49c9aaea16"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/archives/2019/11/index.html","664896c4169ff3181572e934c372b646"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/archives/2019/index.html","50ce56c3310a2da2e4a86503ecab733e"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/archives/2020/01/index.html","8cf4d51741ee643d00aed7fc60f30b0d"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/archives/2020/index.html","5344e2e736c0bc6eec6724701bbeac72"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/archives/index.html","40727023a1af375ee75f4baf9b58c55b"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/audio/index.html","0d580ba08b2a0aa0c7d62708bbf2842e"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/categories/index.html","7df0599fe3f3994e5d77d1338672fd9c"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/categories/学分布式/index.html","551d5e5e7af72a078b9ab21fb6b4f428"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/categories/建站过程/index.html","4f5e10ea79c4d2565871ec420d09e99c"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/css/index.css","6bd8e1e76b53177a751e8034f8dc17ff"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/image/index.html","c7413494c583488fd2685b2a8a08fb3e"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/index.html","4efe1de6c8200e1a63712eaf7017c88d"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/links/index.html","def5d333b5561a1bb64f3cd4cde79e0a"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/tags/FastDFS/index.html","a5adbb62ac3361fee9cc48222d7c7abb"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/tags/Hexo/index.html","db385ac293e229ff3bf4d7cd31adf543"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/tags/Hexo博客/index.html","b05b0d05c111f1779a23066c7a9289bc"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/tags/index.html","916717e4fdfaf0eb9b5d233f902af107"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/tags/分布式文件系统/index.html","ffe0bdc0f916435f53d92d1a62aedcb9"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/tags/高可用/index.html","5950c95c6994b355b33100aefc7ed65a"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/video/index.html","2b72361cea8b968387c41682da191acb"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/vitae/index.html","42b99121f632a728ff7aeab6561af2b4"],["D:/DEVE01/PROJECT01/MaxBill-Blog/public/words/index.html","b6c0b5316bdb91c82f0fb50cd8f665ef"]];
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







