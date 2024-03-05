import {
    IsEmail,
    IsString,
    Length,

  } from 'class-validator';

  export class SignupDto {
    @IsEmail()
    email: string;

    @IsString()
    name: string;

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