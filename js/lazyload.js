// document.addEventListener("DOMContentLoaded", function () {
//   var lazyImages = [].slice.call(document.querySelectorAll("iframe.lazy"));

//   if ("IntersectionObserver" in window) {
//     let lazyImageObserver = new IntersectionObserver(function (
//       entries,
//       observer
//     ) {
//       entries.forEach(function (entry) {
//         if (entry.isIntersecting) {
//           let lazyImage = entry.target;
//           lazyImage.src = lazyImage.dataset.src;
//           lazyImage.classList.remove("lazy");
//           lazyImageObserver.unobserve(lazyImage);
//         }
//       });
//     });

//     lazyImages.forEach(function (lazyImage) {
//       lazyImageObserver.observe(lazyImage);
//     });
//   }
// });
document.addEventListener("DOMContentLoaded", function() {
  if ("IntersectionObserver" in window) {
   var iframesLazy = document.querySelectorAll("iframe.iframe-lazy-video");
   var iframeObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
     if (entry.isIntersecting && entry.target.src.length == 0) {
      entry.target.src = entry.target.dataset.src;
      iframeObserver.unobserve(entry.target);
     }
    });
   });
   iframesLazy.forEach(function (iframe) {
    iframeObserver.observe(iframe);
   });
  } else {
   var iframesLazy = document.querySelector('iframe.iframe-lazy-video');
   for (var i = 0; i < iframesLazy.length; i++) {
    if (lazyVids[i].getAttribute('data-src')) {
     lazyVids[i].setAttribute('src', lazyVids[i].getAttribute('data-src'));
    }
   }
  }
 });