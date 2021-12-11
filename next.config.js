// in next.config.js (should be located in the root of your project if not create one)

module.exports = {
    // useFileSystemPublicRoutes: false,
  async redirects() {
    return [
      {
          source: '/home',
          destination: '/',
          permanent: true,
        },
    ]
  },
  webpack: (config,  { isServer }) => {
    if (!isServer) {
      config.node = {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
       }
    }
          return config
  },

       distDir: "_next",
      generateBuildId: async () => {
         if(process.env.BUILD_ID){
               return process.env.BUILD_ID;
         }else{
             return ``;
         }

      }


}