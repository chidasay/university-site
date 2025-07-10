window.addEventListener("load", ()=> {
    const loader = document.getElementById("loader");
    setTimeout(()=> {
        loader.style.opacity = 0;
        setTimeout(()=> {
            loader.style.display = "none"; // 1.5秒+0.7秒でなくなる
        }, 700); // 0.7秒
    }, 1500); // 1.5秒
});