module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6a2bad1f4365e3b47ee7c12a742e63b0'),
      email: "mostafafayyado1@gmail.com"
    },
  },
});
