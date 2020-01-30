import * as React from 'react';
type ResourceIconType = {
	value?: string | '○' | '△' | '×';
}

const ResourceIcon: React.FC<ResourceIconType> = ( { value } ) => {
	if ( value === '○' ) {
		return ( <span title={ 'ご相談お待ちしております。' }>○</span> );
	} else if ( value === '△' ) {
		return <span title={ '空きが少しあります、お問い合わせ下さい。' }>△</span>;
	} else if ( value === '×' ) {
		return <span title={ 'ありがとうございます。' }>×</span>;
	}
	return null;
};

export default ResourceIcon;
