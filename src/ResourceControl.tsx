import * as React from 'react';
import { SelectControl } from '@wordpress/components';

const ResourceControl: React.FC<{value: string; onChange: ( value: string ) => void}> = ( { value, onChange } ) => (
	<SelectControl<string>
		value={ value }
		onChange={ onChange }
		options={ [
			{ value: '', label: '-' },
			{ value: '○', label: '○' },
			{ value: '△', label: '△' },
			{ value: '×', label: '×' },
		] }
	/>
);
export default ResourceControl;
