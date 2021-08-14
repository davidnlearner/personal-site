const textMain = "hsl(208, 47%, 12%)";
const textHighlight = "hsl(225, 29%, 11%)";
const background = "hsl(204, 67%, 92%)";
const backgroundDark = "hsl(204, 56%, 83%)";

const styles = {
    bmBurgerButton: {
        position: "absolute",
        width: "1.5rem",
        height: "1.5rem",
        right: "1.5rem",
        top: ".75rem",
    },
    bmBurgerBars: {
        background: textMain,
    },
    bmBurgerBarsHover: {
        background: textHighlight,
    },
    bmCrossButton: {
        height: "24px",
        width: "24px",
    },
    bmCross: {
        background: "#bdc3c7",
    },
    bmMenuWrap: {
        position: "fixed",
        height: "100%",
    },
    bmMenu: {
        background: textMain,
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em",
    },
    bmMorphShape: {
        fill: "#373a47",
    },
    bmItemList: {
        color: "#b8b7ad",
        padding: "0.8em",
    },
    bmItem: {
        display: "inline-block",
    },
    bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)",
    },
};

export default styles;
