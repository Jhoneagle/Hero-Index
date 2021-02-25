import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {Lazy} from '../helpers';
import {Skill} from './skill';
import {Attribute} from './attribute';
import {AuthorityRole} from "../types/authorityRole";

@Entity()
@ObjectType()
export class Hero {
	@Field((type) => ID)
	@PrimaryGeneratedColumn()
	id!: number;

	@Field()
	@Column()
	role: AuthorityRole;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column()
	imgUrl: string;

	@Field()
	@Column()
	description: string;

	@Field()
	@Column()
	backStory: string;

	@Field((type) => [Skill])
	@ManyToMany((type) => Skill, { lazy: true, cascade: ['insert'] })
	@JoinTable()
	skills: Lazy<Skill[]>;

	@Field((type) => Attribute)
	@OneToOne((type) => Attribute, { lazy: true, cascade: ['insert'] })
	@JoinColumn()
	attributes: Lazy<Attribute>;
}
