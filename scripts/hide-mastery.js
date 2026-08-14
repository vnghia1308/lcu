window.__LEPlugin__HideMastery__Destroy?.();

window.__LEPlugin__HideMastery = () => {
    const PARENT_SELECTOR = ".style-profile-overview-content";
    const TARGET_SELECTOR = ".style-profile-emblems-container";

    // Remove existing elements immediately
    const removeElements = () => {
        document
            .querySelectorAll(`${PARENT_SELECTOR} > ${TARGET_SELECTOR}`)
            .forEach((element) => {
                element.remove();
            });
    };

    // Remove anything already rendered
    removeElements();

    // Observe future DOM changes
    const observer = new MutationObserver(() => {
        removeElements();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Save observer to window so it can be destroyed
    window.__LEPlugin__HideMastery__Observer = observer;

    // Save destroy function
    window.__LEPlugin__HideMastery__Destroy = () => {
        window.__LEPlugin__HideMastery__Observer?.disconnect();
        window.__LEPlugin__HideMastery__Observer = undefined;
        window.__LEPlugin__HideMastery__Destroy = undefined;
    };
};

window.__LEPlugin__HideMastery();