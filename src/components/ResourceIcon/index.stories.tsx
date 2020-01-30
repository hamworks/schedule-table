import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ResourceIcon from '../ResourceIcon';

storiesOf( 'ResourceIcon', module )
	.add( '○', () => (
		<ResourceIcon value={ '○' } />
	) )
	.add( '△', () => (
		<ResourceIcon value={ '△' } />
	) )
	.add( '×', () => (
		<ResourceIcon value={ '×' } />
	) )
	.add( 'empty', () => (
		<ResourceIcon value={ '' } />
	) );
