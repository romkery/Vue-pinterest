export let popUp = {
    showPopUp(event, isPopUp, popSrc) {
        let target = event.target;
        isPopUp = true;
        return popSrc = target.src;
    },
    hidePopUp(event, isPopUp) {
        isPopUp = false;
    }
};
