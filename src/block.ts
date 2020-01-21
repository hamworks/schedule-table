type Cell = {
	alt: string;
	url: string;
}

type Row = Cell[];

export interface BlockAttributes {
	resourceTypes: Row[];
}
