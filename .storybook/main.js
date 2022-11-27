const path = require('path');

module.exports = {
    stories: [
        '../src/stories/**/*.stories.mdx',
        '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                actions: false
            }
        },
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null
            }
        },
        // {
        //     name: '@storybook/addon-postcss',
        //     options: {
        //         cssLoaderOptions: {
        //             // When you have splitted your css over multiple files
        //             // and use @import('./other-styles.css')
        //             importLoaders: 1
        //         },
        //         postcssLoaderOptions: {
        //             // When using postCSS 8
        //             implementation: require('postcss')
        //         }
        //     }
        // }, 
        {
            name: "@storybook/preset-create-react-app"
        }
    ],
    webpackFinal: async (config, { configType }) => {
        config.resolve.modules = [
            path.resolve(__dirname, '..'),
            'node_modules'
        ];
        config.resolve.alias = {
            ...config.resolve.alias,
            '@/components': path.resolve(__dirname, '../src/components'),
            '@/constants': path.resolve(__dirname, '../src/constants'),
            '@/context': path.resolve(__dirname, '../src/context'),
            '@/types': path.resolve(__dirname, '../src/types')
        };
        return config;
    },
    framework: '@storybook/react',
    core: {
        builder: 'webpack5'
    }
};
