module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.ipify.org/',
                changeOrigin: true,
                pathRewrite: { '^/api': '' }
            }, '/ope': {
                target: 'https://ope33.com/',
                changeOrigin: true,
                pathRewrite: { '^/ope': '' }
            },
        }
    }
}