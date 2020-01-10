import * as React from 'react';
import { BlockEditProps } from '@wordpress/blocks';
import { BlockAttributes } from './block';
import { RichText } from '@wordpress/block-editor';

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

export default edit;
