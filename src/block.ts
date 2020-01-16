export type Plan = {
	label: string
	price: string
	link: string
	features: Features
}

export const ScaffoldPlan: Plan = {
	features: [],
	label: 'Sample',
	link: 'https://google.com',
	price: '$100'
}

type Features = Object

export interface BlockAttributes {
	features: string[];
	plans: Plan[];
}
