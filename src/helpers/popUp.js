export let popUp = {
    showPopUp(event, isPopUp, popSrc) {
        debugger;
        let target = event.target;
        isPopUp = true;
        return popSrc = target.src;
    },
    hidePopUp(event, isPopUp) {
        isPopUp = false;
    }
};
