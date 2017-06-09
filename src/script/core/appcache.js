if (window.applicationCache) {
  window.applicationCache.addEventListener('updateready', function () {
      window.location.reload();
  }, false);
} // if window.applicationCache
