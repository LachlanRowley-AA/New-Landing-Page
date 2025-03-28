
(function () {
  const iframe = document.createElement("iframe");
  const params = new URLSearchParams(window.assetAlleyConfig || {});
  const referral = params.get('referral');
  // iframe.src = 'https://assetalley.vercel.app/embed?'+params;
  iframe.src = 'http://localhost:3000/embed?'+params;
  iframe.style.width = "100%";
  if(!!params) {
    iframe.style.height = "200px";
  }
  else {
    iframe.style.height = "500px";
  }
  iframe.style.border = "none";
  iframe.classList.add('my-iframe');
  iframe.classList.add(params.referral);
  if (window.assetAlleyConfig && window.assetAlleyConfig.styles) {
    Object.assign(iframe.style, window.assetAlleyConfig.styles);
}
  document.currentScript.parentNode.insertBefore(iframe, document.currentScript);
  const label = document.createElement("label");
  label.innerHTML = params;
  document.currentScript.parentNode.insertBefore(label, document.currentScript);
})();