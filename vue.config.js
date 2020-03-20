module.exports = {
    devServer: {
        proxy: {
            '/countries': {
                target: 'https://restcountries.eu/rest/v2/all',
                changeOrigin: true,
                pathRewrite: {
                    '^/countries': ''
                }
            }
        }
    }
}