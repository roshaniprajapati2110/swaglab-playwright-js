import { CheckoutDTO } from "../DTO/CheckoutDTO";

export class CheckoutFactory{
    static AddUserDetails(){
        return new CheckoutDTO(
            'Roshani',
            'Prajapati',
            '300005'
        );
    }
}