import * as React from 'react';
import { SelectControl } from '@wordpress/components';

type ResourceControlProp = {
	value: string;
	onChange: ( value: string ) => void;
}

const ResourceControl: React.FC<ResourceControlProp> = ( { value, onChange } ) => (
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
