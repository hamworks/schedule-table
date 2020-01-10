import * as React from 'react';
import { __ } from '@wordpress/i18n';
import { registerBlockType, BlockEditProps, BlockSaveProps } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

interface BlockAttributes {
	content: string;
}

const edit: React.FC<BlockEditProps<BlockAttributes>> = ( { attributes: { content }, setAttributes, className } ) => {
	const onChangeContent = ( newContent: string ) => {
		setAttributes( { content: newContent } );
	};
	return (
		<RichText
			tagName="p"
			className={ className }
			onChange={ onChangeContent }
			value={ content }
		/>
	);
};
const save: React.FC<BlockSaveProps<BlockAttributes>> = ( { attributes: { content } } ) => {
	return <RichText.Content tagName="p" value={ content } />;
};

registerBlockType<BlockAttributes>( 'price-table-block/price-table-block', {
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},
	title: __( 'Example: Basic (ESNext)', 'price-table-block' ),
	icon: 'universal-access-alt',
	category: 'layout',
	edit,
	save,
} );
