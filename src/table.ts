import { range } from 'lodash';
export class Cell {
	content: string;

	constructor( content = '○' ) {
		this.content = content;
	}
}

export type Row = {
	cells: Cell[];
};

const createCells = ( contents = [ '' ] ): Cell[] => {
	return contents.map( ( content ) => new Cell( content ) );
};

export const createRow = ( contents = [ '' ] ): Row => {
	return {
		cells: createCells( contents ),
	};
};

export const appendCell = ( cells: Cell[] ): Cell[] => {
	return [ ...cells, ...createCells() ];
};

export const appendCol = ( rows: Row[] ): Row[] => {
	return rows.map( ( row ) => {
		return {
			...row,
			cells: appendCell( row.cells ),
		};
	} );
};

export const appendRow = ( rows: Row[] ): Row[] => {
	const colCount = rows[ 0 ]?.cells.length || 1;
	return [ ...rows, createRow( range( colCount ).map( () => '' ) ) ];
};

export const createInitialData = ( rows = [ [ '' ] ] ): Row[] => {
	return rows.map( ( cells ) => createRow( cells ) );
};
