import { AuthToken } from "../@types/auth-token";

const jwtSecurityToken = "login.jwtSecurityToken";
const jwtRefreshToken = "login.jwtRefreshToken";

export function getAuthTokens(): AuthToken {
  const securityToken = localStorage.getItem(jwtSecurityToken);
  const refreshToken = localStorage.getItem(jwtRefreshToken);
  return { refreshToken, securityToken };
}

export function saveAuthToken(
  securityToken: string,
  refreshToken: string,
) {
  localStorage.setItem(jwtSecurityToken, securityToken);
  localStorage.setItem(jwtRefreshToken, refreshToken);
}

export function clearAuthToken() {
  localStorage.removeItem(jwtSecurityToken);
  localStorage.removeItem(jwtRefreshToken);
}
