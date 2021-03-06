import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne } from 'typeorm'

import { Company } from './company.entity'
import { Designation } from './designation.entity'
import Template from './template.entity'
import { PayRoll } from './payroll/payroll.entity'

@Entity()
export class Department extends Template{
	@Column()
	departmentName: string

	@ManyToOne((type) => Company, (company) => company.departments, { eager: true })
	company: Company

	@OneToMany(type=>Designation,(designation)=>designation.department)
	designations:Department[]

	@OneToMany(type=>PayRoll,(pr)=>pr.department)
	payroll:PayRoll
}
