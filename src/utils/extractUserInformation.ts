import jwtDecode from "jwt-decode";
import { TokenData } from "../@types/token-data";
import { UserData } from "../@types/user";

export default function extractInfoUserOfToken(token: string): UserData {
  const {
    wave_id: id,
    email,
    name,
    given_name: firstName,
    family_name: lastName,
  } = jwtDecode<TokenData>(token);
  return {
    id,
    email,
    firstName,
    lastName,
    avatar: "",
    userName: "",
    active: true,
    fullName: name,
  };
}
