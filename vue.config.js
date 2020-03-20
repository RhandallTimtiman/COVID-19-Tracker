module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/covid-tracker/' :
        '/',
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