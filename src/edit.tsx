import * as React from 'react';
import { BlockEditProps } from '@wordpress/blocks';
import { BlockAttributes } from './block';
import { InspectorControls } from '@wordpress/block-editor';
import { Button, ButtonGroup, PanelBody, TextControl } from '@wordpress/components';
import ResourceControl from './components/ResourceControl';
import TableCell from './components/TableCell';
import { appendCol, appendRow } from './table';

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

			<ButtonGroup>
				<Button isDefault onClick={ (): void => {
					setAttributes( { resourceTypes: appendRow( resourceTypes ) } );
				} }>Add Row</Button>

				<Button isDefault onClick={ (): void => {
					setAttributes( { resourceTypes: appendCol( resourceTypes ) } );
				} }>Add Col</Button>
			</ButtonGroup>

		</>
	);
};

export default edit;
