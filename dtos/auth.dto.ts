import {
    IsEmail,
    IsString,
    Length,

  } from 'class-validator';

  export class SignupDto {
    @IsEmail()
    email: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    phoneNumber: number;

    @IsString()
    scjRegId: string;

    // @IsString()
    // address1: string;

    // @IsString()
    // address2: string;

    // @IsString()
    // userName: string;

    // @IsString()
    // profileImage: string;

    @IsString()
    role: string;


    @IsString()
    @Length(8)
    password: string;
}


export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(8)
  password: string;
}