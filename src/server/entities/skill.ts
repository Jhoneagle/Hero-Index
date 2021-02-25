import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {Lazy} from '../helpers';
import {Hero} from './hero';
import {TElement} from '../types/element';

@Entity()
@ObjectType()
export class Skill {
	@Field((type) => ID)
	@PrimaryGeneratedColumn()
	id!: number;

	@ManyToMany((type) => Hero, { lazy: true })
	heroes: Lazy<Hero[]>;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column()
	description: string;

	@Field()
	@Column()
	damage: number;

	@Field()
	@Column()
	element: TElement;
}
