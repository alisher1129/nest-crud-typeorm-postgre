import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy}  from "@nestjs/passport"
import { Strategy } from "passport-local";
import { AuthController } from "src/auth/auth.controller";
import { Auth } from "src/auth/entities/auth.entity";


@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy){
constructor(private readonly authController : AuthController ){
     super();

}
 
validate(username : string , password :string) : Auth {
   const user : Auth = this.authController.findOne(username); 
   console.log("first" , user)
    if(user == undefined) throw new UnauthorizedException();
    if(user.password == password ) return user;
}



} 