module.exports = {
  HOST: (process.env.HOST || 'localhost'),
	PORT: (process.env.PORT || 3000),
	DATABASE_URL: (process.env.DATABASE_URL || 'postgres://test:test@localhost:5432/blogger')
};