const config = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    dbUri: process.env.DB_URI || 'mongodb://localhost:27017/RSS_DB',
};

export default config;
