export const theme = {

    colors: {
        orange500: "#D97A26",
        orange400: "#B98B3F",
        orange300: "#B9643F",
        orange200: "#E8C48A",
        blue500: "#111DFE",
        blue400: "#264AD9",
        blue300: "#3F4FB9",
        blue200: "#9AA5C0",
    },
    paddings:{
        small: ".8rem",
        medium: "1.2rem",
        large: "2.4rem"
    },
    margins: {
        small: ".8rem",
        medium: "1.2rem",
        large: "2.4rem"
    },
    gaps: {
        cardStreets: "3.2rem",
    },
    borderRadius:{
        common: "1.5rem",
    },
    shadows:{
        colorized:(color) => (
                `
                    -webkit-box-shadow: 0px 2px 10px 0px ${color};
        -moz-box-shadow: 0px 2px 10px 0px ${color};
        box-shadow: 0px 2px 10px 0px ${color}
                `
            ),
        black: `
        -webkit-box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.1);
        -moz-box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.1);
        box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.1);
        `,
    },

}