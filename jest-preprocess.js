const babelOptions = {
    presets: [
        [
            'babel-preset-gatsby',
            {
                reactRuntime: 'automatic',
            },
        ],
        '@babel/preset-typescript',
    ],
    plugins: [
        [
            'prismjs',
            {
                languages: [
                    'javascript',
                    'css',
                    'html',
                    'go',
                    'csharp',
                    'typescript',
                    'tsx',
                    'jsx',
                    'swift',
                    'ruby',
                    'scss',
                    'python',
                ],
                plugins: [
                    'show-language',
                    'line-numbers',
                    'normalize-whitespace',
                ],
                theme: 'tomorrow',
                css: true,
            },
        ],
    ],
};

module.exports = require('babel-jest').default.createTransformer(babelOptions);
