import {ValidationMessage} from '../types';

export const emptyStringValidator = (string: string): ValidationMessage => {
  return !string.trim()
    ? { error: true, message: "no empty strings are allowed" }
    : { error: false, message: "valid string" };
}


