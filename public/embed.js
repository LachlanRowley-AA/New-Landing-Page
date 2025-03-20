(function () {
    const iframe = document.createElement("iframe");
    const params = new URLSearchParams(window.myEmbedConfig || {}).toString();
    iframe.src = `http://localhost:3000/embed?`+window.myEmbedConfig.referral;
    iframe.style.width = "100%";
    if(!!params) {
      iframe.style.height = "200px";
    }
    else {
      iframe.style.height = "500px";
    }
    iframe.style.border = "none";
    iframe.classList.add('my-iframe');
    if (window.myEmbedConfig && window.myEmbedConfig.styles) {
      Object.assign(iframe.style, window.myEmbedConfig.styles);
  }
    document.currentScript.parentNode.insertBefore(iframe, document.currentScript);
    const label = document.createElement('label');
    label.textContent = params;
    document.currentScript.parentNode.insertBefore(label, document.currentScript);
  })();
  