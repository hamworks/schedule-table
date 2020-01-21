import { AttributeSource } from '@wordpress/blocks';

export type Cell = {
	content: string;
}

export type Row = {
	cells: Cell[];
};

export type BlockAttributes = {
	resourceTypes: Row[];
}
