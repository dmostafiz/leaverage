module.exports = {
    env: {
        API: process.env.BASE_API,
    },
    poweredByHeader: false,
    generateEtags: false,
    // exportPathMap: async function (
    //     defaultPathMap,
    //     { dev, dir, outDir, distDir, buildId }
    //   ) {
    //     return {
    //       '/': { page: '/articles' },
    //       '/about': { page: '/' },
    //     }
    //   },
}