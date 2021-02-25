import * as jwt from 'jsonwebtoken';
import {JWT_SIGNING_SECRET} from "../utils/config";

const generateJwtForUserId = (userId: string) => jwt.sign({ userId }, JWT_SIGNING_SECRET);

export const AuthService = () => ({
	generateJwtForUserId,
});
