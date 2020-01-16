import * as React from 'react';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { BlockAttributes, Plan, ScaffoldPlan } from './block';
import edit from './edit';
import save from './save';

registerBlockType<BlockAttributes>( 'price-table-block/price-table-block', {
	attributes: {
		features: {
			type: 'array',
			default: []
		},
		plans: {
			type: 'array',
			default: [
				ScaffoldPlan,
			]
		},
	},
	title: __( 'Price Table', 'price-table-block' ),
	icon: 'universal-access-alt',
	category: 'layout',
	edit,
	save,
} );
