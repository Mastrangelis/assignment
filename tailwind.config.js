/* eslint-disable prettier/prettier */
module.exports = {
    content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            xs: '1200px',
            sm: '1440px',
            md: '1600px',
            lg: '1920px',
            xlg: '2220px'
        },

        fontSize: {
            xs: '.75rem', // 12px Caption
            tiny: '.875rem', // 14px Body2 a
            base: '1rem', // 16px Body1 Links
            lg: '1.125rem', // 18px h4
            xl: '1.25rem', // 20px h3
            '2xl': '1.5rem', // 24px  h2
            '4xl': '2.25rem' // 36px h1
        },
        fontWeight: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900
        },
        letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.025em',
            wider: '.05em',
            widest: '.1em',
            // eslint-disable-next-line no-dupe-keys
            widest: '.25em',
            /// //Tradias///////
            heading: '-0.02em',
            caption: '0.03em'
        },
        extend: {
            gridTemplateColumns: {
                13: 'repeat(auto-fit,13, minmax(0, 1fr));'
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                dark: '#010918', // Dark -> Overlays Shadows Headings
                input: '#FFFFFF', // Inputs
                primary: {
                    // Primary Brand
                    100: '#E8EFFF',
                    150: '#D1E1FF',
                    200: '#BAD1FF',
                    300: '#7AA6FF',
                    400: '#1A63F5',
                    500: '#0043C8'
                },
                secondary: {
                    100: '#E9E4FF',
                    200: '#B8AAFF',
                    250: '#7458FF',
                    300: '#3F1AF5',
                    400: '#1A0099'
                },
                text: {
                    100: '#BDBEC2', // Subtle Text -> Helper text Deemphasized text
                    200: '#787C84' // Text -> Body text
                },
                disabled: '#DEE0E5',
                blackWhite: {
                    100: '#FFFFFF',
                    150: '#FCFDFF',
                    200: '#F6F6F9',
                    250: '#E9EBEF',
                    300: '#DEE0E5',
                    350: '#BDBEC2',
                    400: '#787C84',
                    500: '#010918'
                },
                outline: {
                    // Outlines
                    100: '#FCFDFF',
                    200: '#F6F6F9',
                    300: '#DEE0E5'
                },
                negative: {
                    // Negative Values
                    100: '#FFE4E8',
                    200: '#FB576A'
                },
                positive: {
                    // Positive Values
                    100: '#E9FFE9',
                    200: '#09CE05'
                },
                partialState: {
                    100: '#FFE3B9',
                    200: '#FFC165'
                },
                alabaster: '#FBFBFB',
                cornflower: '#F6F8FF' // Input Background
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif']
            },
            lineHeight: {
                h1: '45.36px',
                h2: '30.24px',
                h3: '25.2px',
                h4: '22.68px',
                body1: '22.4px',
                body1bold: '20.16px',
                body2: '19.6px',
                body2bold: '19.6px',
                caption: '15.12px',
                link: '20.16px'
            },
            borderRadius: {
                sm: '4px',
                lg: '6px',
                xl: '7px',
                button: '8px'
            },
            fontWeight: {
                normal: 400,
                bold: 700
            }, // that is animation class
            keyframes: {
                fadeOut: {
                    from: {
                        opacity: '1'
                    },
                    to: {
                        opacity: '0'
                    }
                },
                fadeIn: {
                    '0%': {
                        opacity: '0'
                    },
                    '100%': {
                        opacity: '1'
                    }
                }
            },
            animation: {
                fadeIn: 'fadeIn 0.5s ease-in-out ',
                fadeOut: 'fadeOut 0.5s ease-in-out '
            }
        }
    },
    plugins: [require('@tailwindcss/line-clamp')]
};
