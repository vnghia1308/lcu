window.__LEPlugin__HideMastery = () => {
    console.log("Hello world");
}

if ("__LEPlugin__HideMastery" in window) {
    window.__LEPlugin__HideMastery();
}