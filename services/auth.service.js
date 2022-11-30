const httpStatus = require("http-status");
const userService = require("./user.service");
const ApiError = require("../utils/ApiError");

const loginUserWithEmailAndPassword = async (correo, contraseña) => {
    const user = await userService.getUserByEmail(correo);
    if (!user || !(await user.isPasswordMatch(contraseña))) {
        throw new ApiError(
            httpStatus.UNAUTHORIZED,
            "Incorrect email or Password"
        );
    }
    return user;
};

module.exports = {
    loginUserWithEmailAndPassword,
};
