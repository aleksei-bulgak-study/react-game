export type ThemeType = typeof light; // This is the type definition for my theme object.
export type HeaderFooterType = {
    background: string;
    fontColor: string;
};

export const light = {
    boardColor: '#faf8ef',
    footer: {
        background: 'black',
        fontColor: 'white',
    } as HeaderFooterType,
    header: {
        background: 'black',
        fontColor: 'white',
    } as HeaderFooterType,
    gameInfo: {
        fontColor: '#776e65',
        score: {
            background: '#BBADA0',
            font: 'white',
            title: '#EBE2D7',
        },
    },
    button: {
        background: '#8f7a66',
        color: 'white',
    },
    board: {
        background: '#bbada0',
        card: {
            background: '#cdc1b4',
            font: '#776e65'
        },
    },
};
export const dark: ThemeType = {
    boardColor: 'black',
    footer: {
        background: '#3c3c3c',
        fontColor: '#868383',
    } as HeaderFooterType,
    header: {
        background: '#3c3c3c',
        fontColor: '#868383',
    } as HeaderFooterType,
    gameInfo: {
        fontColor: '#868383',
        score: {
            background: '#3c3c3c',
            font: '#868383',
            title: '#868383',
        },
    },
    button: {
        background: '#3c3c3c',
        color: '#868383',
    },
    board: {
        background: '#868383',
        card: {
            background: '#3c3c3c',
            font: '#868383'
        },
    },
};

const theme = dark; // set the light theme as the default.
export default theme;
