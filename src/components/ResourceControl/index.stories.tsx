import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ResourceControl from './index';

storiesOf( 'ResourceControl', module )
	.add( 'ResourceControl', () => (
		<ResourceControl value={ '○' } onChange={ action( 'button-click' ) } />
	) );
