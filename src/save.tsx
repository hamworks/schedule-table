import * as React from 'react';
import { BlockSaveProps } from '@wordpress/blocks';
import { BlockAttributes } from './block';
import { RichText } from '@wordpress/block-editor';

const save: React.FC<BlockSaveProps<BlockAttributes>> = ( { attributes: { content } } ) => {
	return <RichText.Content tagName="p" value={ content } />;
};

export default save;
