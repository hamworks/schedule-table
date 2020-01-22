import * as React from 'react';
import { BlockSaveProps } from '@wordpress/blocks';
import { BlockAttributes } from './block';

const save: React.FC<BlockSaveProps<BlockAttributes>> = ( { attributes: { resourceTypes } } ) => {
	return (
		<div>
			<table className={ 'schedule-table' }>
				<tbody className={ 'schedule-table__body' }>
					{ resourceTypes.map( ( { cells }, row ) => (

						<tr key={ row } className={ 'schedule-table__resources' }>
							{ cells.map( ( { content }, col ) => (
								<td key={ col } className={ 'schedule-table__resource' }>
									{ content }
								</td>
							) ) }
						</tr>

					) ) }
				</tbody>
			</table>
		</div>
	);
};

export default save;
