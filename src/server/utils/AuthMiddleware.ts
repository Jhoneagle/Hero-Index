import {MiddlewareInterface, NextFn, ResolverData} from "type-graphql";
import {Service} from "typedi";
import {InjectRepository} from "typeorm-typedi-extensions";
import {Hero} from "../entities/hero";
import {Repository} from "typeorm";
import {HeroContext} from "../types/heroContext";

@Service()
export class AuthMiddleware implements MiddlewareInterface<HeroContext> {
    constructor(
        @InjectRepository(Hero) private readonly heroRepository: Repository<Hero>
    ) { }

    async use({ context, info }: ResolverData<HeroContext>, next: NextFn) {
        context.hero = await this.heroRepository.findOne(context.token)
        await next()
    }
}
