import * as React from 'react';
import { BlockEditProps } from '@wordpress/blocks';
import { BlockAttributes, Cell as CellType, Row } from './block';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';
import ResourceControl from './ResourceControl';

class Cell implements CellType {
	content: string;

	constructor() {
		this.content = '';
	}
}

const createCells = ( count = 1 ): Cell[] => {
	return Array.from( Array( count ), () => new Cell() );
};

const appendCell = ( cells: Cell[] ): Cell[] => {
	return [ ...cells, new Cell() ];
};

const createNewRow = ( count = 1 ): Row => {
	return {
		cells: createCells( count ),
	};
};

const TableCell: React.FC<{head?: boolean} & React.HTMLAttributes<HTMLElement>> = ( { head, children, ...props } ) => {
	if ( head ) {
		return <th { ...props }>{ children }</th>;
	}
	return <td { ...props }>{ children }</td>;
};

const addCol = ( rows: Row[] ): Row[] => {
	return rows.map( ( row ) => {
		return {
			...row,
			cells: appendCell( row.cells ),
		};
	} );
};

const edit: React.FC<BlockEditProps<BlockAttributes>> = ( { attributes: { resourceTypes }, setAttributes } ) => {
	const updateCell = ( { row, col, value }: {row: number; col: number; value: string} ): void => {
		const newResourceTypes = [ ...resourceTypes ];
		newResourceTypes[ row ].cells[ col ].content = value;
		setAttributes( { resourceTypes: newResourceTypes } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ 'Price Table Option' } >
					<p>Options.</p>
				</PanelBody>
			</InspectorControls>
			<div>
				<table className={ 'schedule-table' }>
					<tbody className={ 'schedule-table__body' }>
						{ resourceTypes.map( ( { cells }, row ) => (
							<tr key={ row } className={ 'schedule-table__resources' }>
								{ cells.map( ( { content }, col ) => (
									<TableCell key={ col } head={ ! ( col && row ) } className={ 'schedule-table__resource' }>
										{
											( col && row ) ?
												<ResourceControl value={ content } onChange={ ( value ): void => {
													updateCell( { row, col, value } );
												} } /> :
												<TextControl value={ content } onChange={ ( value ): void => {
													updateCell( { row, col, value } );
												} } />
										}

									</TableCell>
								) ) }
							</tr>
						) ) }
					</tbody>
				</table>
			</div>

			<Button isPrimary={ true } onClick={ (): void => {
				const colCount = resourceTypes[ 0 ]?.cells.length || 1;
				setAttributes( { resourceTypes: [ ...resourceTypes, createNewRow( colCount ) ] } );
			} }>Add Row</Button>

			<Button isPrimary={ true } onClick={ (): void => {
				setAttributes( { resourceTypes: addCol( resourceTypes ) } );
			} }>Add Col</Button>
		</>
	);
};

export default edit;
