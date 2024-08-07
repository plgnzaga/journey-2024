import localFont from 'next/font/local';

export const neueMachina = localFont({
    src: [
        {
            path: '../../../public/fonts/NeueMachina-Regular.otf',
        },
        {
            path: '../../../public/fonts/NeueMachina-Ultrabold.otf',
        },
    ],
    variable: '--neue-machina',
})

export const bricolageGrotesque = localFont({
    src: [
        {
            path: '../../../public/fonts/BricolageGrotesque-ExtraLight.ttf',
        },
        {
            path: '../../../public/fonts/BricolageGrotesque-Light.ttf',
        },
        {
            path: '../../../public/fonts/BricolageGrotesque-Regular.ttf',
        },
    ],
    variable: '--neue-machina',
})