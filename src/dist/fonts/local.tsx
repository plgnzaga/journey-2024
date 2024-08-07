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