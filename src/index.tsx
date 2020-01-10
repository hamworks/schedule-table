import * as React from 'react';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { BlockAttributes } from './block';
import edit from './edit';
import save from './save';

registerBlockType<BlockAttributes>( 'price-table-block/price-table-block', {
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},
	title: __( 'Price Table', 'price-table-block' ),
	icon: 'universal-access-alt',
	category: 'layout',
	edit,
	save,
} );
