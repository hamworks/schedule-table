import * as React from 'react';
import { storiesOf } from '@storybook/react';
import TableCell from './index';

storiesOf( 'TableCell', module )
	.add( 'th', () => (
		<table>
			<tbody>
				<tr>
					<TableCell head={ true }>th</TableCell>
				</tr>
			</tbody>
		</table>

	) )
	.add( 'td', () => (
		<table>
			<tbody>
				<tr>
					<TableCell head={ false }>td</TableCell>
				</tr>
			</tbody>
		</table>

	) );
