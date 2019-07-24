const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|json)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }
        ]
    },    
    resolve: {
        extensions: ['.js', '.json']
    },
    mode: 'production',
};
