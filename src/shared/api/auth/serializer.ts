import { SignUpPayload, SignUpRequest } from "./api";

export const serializeSignupPayload = ({
  firstName,
  lastName,
  email,
  password,
  username,
}: SignUpPayload): SignUpRequest => {
  return {
    firstName,
    lastName,
    email,
    password,
    username,
  };
};
