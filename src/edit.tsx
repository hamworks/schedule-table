import * as React from 'react';
import { BlockEditProps } from '@wordpress/blocks';
import { BlockAttributes } from './block';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, Button } from '@wordpress/components';

const ResourceControl: React.FC<{value: string; onChange: ( value: string ) => void}> = ( { value, onChange } ) => (
	<SelectControl<string>
		label={ 'select' }
		value={ value }
		onChange={ onChange }
		options={ [
			{ value: '○', label: '○' },
			{ value: '△', label: '△' },
			{ value: '×', label: '×' },
		] }
	/>
);

const edit: React.FC<BlockEditProps<BlockAttributes>> = ( { attributes: { resourceTypes }, setAttributes, className } ) => {
	const updateCell = ( { row, col, value }: {row: number; col: number; value: string} ) => {
		const newResourceTypes = resourceTypes;
		newResourceTypes[ row ][ col ].content = value;
		setAttributes( { resourceTypes: newResourceTypes } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ 'Price Table Option' }>
				</PanelBody>
			</InspectorControls>
			<div>
				<table className={ 'schedule-table' }>
					<tbody className={ 'schedule-table__body' }>
						{ resourceTypes.map( ( resourceType, i ) => (
							<tr key={ i } className={ 'schedule-table__resources' }>
								{ resourceType.map( ( resource, j ) => (
									<td key={ j } className={ 'schedule-table__resource' }>
										<ResourceControl value="○" onChange={ ( value ) => {
											updateCell( { row: i, col: j, value } );
										} } />
									</td>
								) ) }
							</tr>
						) ) }
					</tbody>
				</table>
			</div>

			<Button onClick={ () => {
				setAttributes( { resourceTypes: [ [ { content: '' } ], ...resourceTypes ] } );
			} }>Add Row</Button>
		</>
	);
};

export default edit;
