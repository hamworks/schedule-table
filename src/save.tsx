import * as React from 'react';
import { BlockSaveProps } from '@wordpress/blocks';
import { BlockAttributes } from './block';
import { RichText } from '@wordpress/block-editor';

const save: React.FC<BlockSaveProps<BlockAttributes>> = ( { attributes: { resourceTypes } } ) => {
	return (
		<div>
			<table className={ 'schedule-table' }>
				<tbody className={ 'schedule-table__body' }>
					{ resourceTypes.map( ( resourceType, i ) => (

						<tr key={ i } className={ 'schedule-table__resources' }>
							{ console.log(resourceType) }
							{ resourceType.cells.map( ( resource, j ) => (
								<td key={ j } className={ 'schedule-table__resource' }></td>
							) ) }
						</tr>
					) ) }
				</tbody>
			</table>
		</div>
	);
};

export default save;
