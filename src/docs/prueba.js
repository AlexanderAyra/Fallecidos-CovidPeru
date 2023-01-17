

const saveToken = (token = '') => {
  const lastToken = [];

  if (token === '') {
    console.log('Esta Vacio');
    return lastToken
  }

  lastToken.push(token);
  return lastToken
}

module.exports = {
  saveToken
}

// import { Body, Controller, Get, Post, Req, Res, UnauthorizedException, ValidationPipe } from '@nestjs/common';
// import { ApiBadRequestResponse, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
// import { User } from 'src/interfaces/user.interface';
// import { AuthService } from './auth.service';
// import { AuthCredentials } from './dto/auth-credential.dto';
// import { Response,Request } from 'express';
// import { JwtService } from '@nestjs/jwt';

// @ApiTags('auth')
// @Controller('auth')
// export class AuthController {
//     constructor(
//         private authService: AuthService,
//         private jwtService: JwtService
//         ){}

//     @Post('/signup')
//     @ApiCreatedResponse({description: 'this response has created successfully'})
//     @ApiForbiddenResponse({description: 'Forbidden'})
//     signUp(@Body(ValidationPipe) authCredentials:AuthCredentials):Promise<User> {
//         return this.authService.signUp(authCredentials);
//     }

//     @Post('/signin')
//     @ApiOkResponse({description:'The resource has been successfully returned'})
//     @ApiForbiddenResponse({description:'Invalid credintials'})
//     async signin(@Body(ValidationPipe) authCredentials:AuthCredentials,@Res() response: Response):Promise<{accessToken:string}> {
//         const token = await this.authService.signIn(authCredentials);

//         response
//         .cookie('access_token', token, {
//             httpOnly: true,
//             domain: 'localhost', // your domain here!
//             expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
//             // expires: new Date(Date.now() + 60000 ),
//         })
//         .send(token);

//         return token;

//     }

//     @Get('/cookies')
//     findAll(@Req() request: Request) {
//     console.log(request.cookies['access_token'].accessToken);
//      // or 
//     //  "request.cookies['cookieKey']"
//     // or 
//     // console.log(request.signedCookies);
//     }


//     // to verify the user's token
//     @Get('/user')
//     @ApiOkResponse({description:'User varified Successfully'})
//     @ApiUnauthorizedResponse({description:'Unauthorised User'})
//     async user(@Req() request: Request) {
//         try{
//             const cookies =  request.cookies['access_token']
//             const cookie = cookies.accessToken 
//             const data = await this.jwtService.verifyAsync(cookie)

//             if(!data) {
//                 throw new UnauthorizedException()
//             }

//             const user = await this.authService.findOne(data.username)

//             return user;

//         }catch(e){throw new UnauthorizedException()}
//     }


//     // to logout by delelting the token
//     @ApiOkResponse({description:'User varified Successfully'})
//     @ApiBadRequestResponse({description:'login failed'})
//     @Post('logout')
//     async logout(@Res({passthrough: true}) response: Response) {
//         response.clearCookie('access_token');

//         return {
//             message: 'Logged out successfully'
//         }
//     }
    
// }