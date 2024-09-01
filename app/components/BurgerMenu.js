export default function BurgerMenu(status, pageHeaderRef) {

    let pageHeader = pageHeaderRef.current
    switch (status) {
        case 'open':
            pageHeader.style.transform = "translateX(0)";
            pageHeader.classList.remove("visuallyHidden");
            break;

        case 'close':
            pageHeader.style.transform = "translateX(120%)";
            break;
    }

}