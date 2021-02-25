import {HeroContext} from "../types/heroContext";
import {AuthChecker} from "type-graphql";

export const customAuthChecker: AuthChecker<HeroContext> = ({ context: { hero } }, roles) => {
    if (roles.length === 0) {
        // if `@Authorized()`, check only if user exists
        return hero !== undefined;
    }

    if (!hero) {
        // and if no user, restrict access
        return false;
    }

    if (roles.includes(hero.role)) {
        // grant access if the roles overlap
        return true;
    }

    // no roles matched, restrict access
    return false;
};
