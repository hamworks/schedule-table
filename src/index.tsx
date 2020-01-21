import * as React from 'react';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { BlockAttributes } from './block';
import edit from './edit';
import save from './save';

registerBlockType<BlockAttributes>( 'schedule-table/schedule-table', {
	attributes: {
		resourceTypes: {
			type: 'array',
			default: [],
			source: 'query',
			selector: 'tbody tr',
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
