import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";

export function IsDateString(
  format: string,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isDateString",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [format],
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (typeof value !== "string") return false;

          const [year, month, day] = value.split("-").map(Number);
          const date = new Date(year, month - 1, day);

          return (
            date.getFullYear() === year &&
            date.getMonth() === month - 1 &&
            date.getDate() === day
          );
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a valid date in the format ${args.constraints[0]}`;
        },
      },
    });
  };
}
