module.exports = {
  async redirects() {
    return [
      {
        source: "/auth",
        destination: "/auth/login",
        permanent: true,
      },
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};
