export class Cell {
	content: string;

	constructor() {
		this.content = '';
	}
}

export type Row = {
	cells: Cell[];
};

const createCells = ( count = 1 ): Cell[] => {
	return Array.from( Array( count ), () => new Cell() );
};

export const createRow = ( count = 1 ): Row => {
	return {
		cells: createCells( count ),
	};
};

export const appendCell = ( cells: Cell[] ): Cell[] => {
	return [ ...cells, new Cell() ];
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
	return [ ...rows, createRow( colCount ) ];
};

export const createInitialData = ( rows: number, col: number ): Row[] => {
	return Array.from( Array( rows ), () => createRow( col ) );
};
