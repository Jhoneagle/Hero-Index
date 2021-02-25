import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {Authorized, Field, ID, ObjectType} from 'type-graphql';
import {AuthorityRole} from "../types/authorityRole";

@Entity()
@ObjectType()
export class Vault {
	@Field((type) => ID)
	@PrimaryGeneratedColumn()
	id!: number;


	@Authorized<AuthorityRole>(['admin', 'master', 'grandmaster'])
	@Field()
	@Column()
	treasures: string;
}
