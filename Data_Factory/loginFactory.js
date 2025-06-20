import { LoginDTO} from "../DTO/LoginDTO";

export class LoginFectory{
    static ValidUser(){
        return new LoginDTO('standard_user','secret_sauce');
    }

    static InvalidUser(){
        return new LoginDTO('secret_sauce','12345678');
    }
}