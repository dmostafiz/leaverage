const JSLoader = (src) => {
    let script = document.querySelector(`script[src="${src}"]`)

    // console.log('Loaded Script: '.script)   

    script = document.createElement("script");
    script.src = src;
    script.async = true;
    // script.setAttribute("data-status", "loading");
    // Add script to document body
    document.body.appendChild(script);

   
    script.remove();
   
}

export default JSLoader