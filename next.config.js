module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'brandmeals.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "https://brandmeals.com/blog/",
  //       permanent: true,
  //     },
  //     // {
  //     //   source: "/",
  //     //   destination: "/evro-lifestyle/dashboard",
  //     //   permanent: true,
  //     // },
  //   ];
  // },
};
