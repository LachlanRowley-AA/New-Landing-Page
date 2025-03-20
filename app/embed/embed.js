(function () {
    const iframe = document.createElement("iframe");
    const params = new URLSearchParams(window.myEmbedConfig || {}).toString();
    iframe.src = `http://localhost:3000/embed?`;
    iframe.style.width = "100%";
    iframe.style.height = "500px";
    iframe.style.border = "none";
    document.currentScript.parentNode.insertBefore(iframe, document.currentScript);
  })();
  