import * as React from 'react';
import { BlockSaveProps } from '@wordpress/blocks';
import { BlockAttributes } from './block';
import ResourceIcon from './components/ResourceIcon';
import TableCell from './components/TableCell';

const save: React.FC<BlockSaveProps<BlockAttributes>> = ( { attributes: { resourceTypes } } ) => {
	return (
		<div>
			<table className={ 'schedule-table' }>
				<thead className={ 'schedule-table__head' }>
					{ resourceTypes.slice( 0, 1 ).map( ( { cells }, row ) => (
						<tr key={ row } className={ 'schedule-table__resources' }>
							{ cells.map( ( { content }, col ) => (
								<TableCell key={ col } head={ true } className={ 'schedule-table__resource' }>
									<span>{ content }</span>
								</TableCell>
							) ) }
						</tr>
					) ) }
				</thead>
				<tbody className={ 'schedule-table__body' }>
					{ resourceTypes.slice( 1 ).map( ( { cells }, row ) => (
						<tr key={ row } className={ 'schedule-table__resources' }>
							{ cells.map( ( { content }, col ) => (
								<TableCell key={ col } head={ ! ( col ) } className={ 'schedule-table__resource' }>
									{
										( col ) ? <ResourceIcon value={ content } /> : <span>{ content }</span>
									}
								</TableCell>
							) ) }
						</tr>
					) ) }
				</tbody>
			</table>
		</div>
	);
};

export default save;

