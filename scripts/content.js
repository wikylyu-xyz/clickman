var buttonSelector = "ytd-player div.video-ads button.ytp-ad-skip-button";

var observer = new MutationObserver(function (mutations) {
  const button = document.querySelector(buttonSelector);
  if (button) {
    button.click();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
