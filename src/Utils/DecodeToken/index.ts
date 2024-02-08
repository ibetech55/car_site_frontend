import { jwtDecode } from 'jwt-decode';

export const decodeToken = <T>(token:string):T => {
    const tokenData:T = jwtDecode(token);
    return tokenData;
}