import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { BlockAttributes } from './block';
import edit from './edit';
import save from './save';
import { createInitialData } from './table';

registerBlockType<BlockAttributes>( 'schedule-table/schedule-table', {
	name: 'schedule-table/schedule-table',
	attributes: {
		resourceTypes: {
			type: 'array',
			default: createInitialData( 4, 4 ),
			source: 'query',
			selector: 'table tr',
			query: {
				cells: {
					type: 'array',
					default: [],
					source: 'query',
					selector: 'td,th',
					query: {
						content: {
							type: 'string',
							source: 'html',
						},
					},
				},
			},
		},
	},
	title: __( 'Schedule Table', 'schedule-table' ),
	icon: 'calendar',
	category: 'layout',
	edit,
	save,
} );
