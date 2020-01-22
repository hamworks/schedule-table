import * as React from 'react';
import { SelectControl } from '@wordpress/components';

type ResourceControlProp = {
	value: string;
	onChange: ( value: string ) => void;
}

export const ResourceControl: React.FC<ResourceControlProp> = ( { value, onChange } ) => (
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

type ResouceIconType = {
	value?: string | '○' | '△' | '×';
}

export const ResouceIcon: React.FC<ResouceIconType> = ( { value } ) => {
	if ( value === '○' ) {
		return ( <span title={ 'ご相談お待ちしております。' }>○</span> );
	} else if ( value === '△' ) {
		return <span title={ '空きが少しあります、お問い合わせ下さい。' }>△</span>;
	} else if ( value === '×' ) {
		return <span title={ 'ありがとうございます。' }>×</span>;
	}
	return null;
};

