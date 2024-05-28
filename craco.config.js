module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "util": false
        }
      }
    }
  }
};

