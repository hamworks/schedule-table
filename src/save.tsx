import * as React from 'react';
import { BlockSaveProps } from '@wordpress/blocks';
import { BlockAttributes } from './block';
import { ResouceIcon } from './ResourceControl';

const save: React.FC<BlockSaveProps<BlockAttributes>> = ( { attributes: { resourceTypes } } ) => {
	return (
		<div>
			<table className={ 'schedule-table' }>
				<tbody className={ 'schedule-table__body' }>
					{ resourceTypes.map( ( { cells }, row ) => (

						<tr key={ row } className={ 'schedule-table__resources' }>
							{ cells.map( ( { content }, col ) => (
								<td key={ col } className={ 'schedule-table__resource' }>
									<ResouceIcon value={ content } />
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
