const moment = require("moment");
const jwt = require("jsonwebtoken");

const saveToken = async (token, userId, expires, type, blacklisted = false) => {
    const tokenDoc = await Token.create({
        token,
        user: userId,
        expires: expires.toDate(),
        type,
        blacklisted,
    });
    return tokenDoc;
};

const secre = process.env.SECRETORPRIVATEKEY;

const generateToken = (userId, expires, secret = secre) => {
    const payload = {
        sub: userId,
        iat: moment().unix(),
        exp: expires.unix(),
    };
    return jwt.sign(payload, secret);
};

const generateAuthTokens = async (user) => {
    const accessTokenExpires = moment().add("30", "minutes");
    const accessToken = generateToken(user.id, accessTokenExpires);

    return {
        access: {
            token: accessToken,
            expires: accessTokenExpires.toDate(),
        },
    };
};

module.exports = {
    generateToken,
    generateAuthTokens,
};
