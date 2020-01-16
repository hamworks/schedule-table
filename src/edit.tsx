import * as React from 'react';
import { BlockEditProps } from '@wordpress/blocks';
import { BlockAttributes, ScaffoldPlan } from './block';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';

const edit: React.FC<BlockEditProps<BlockAttributes>> = ( { attributes: { features, plans }, setAttributes, className } ) => {




	return (
		<>
			<InspectorControls>
				<PanelBody title={ 'Price Table Option' }>
					{
						features.map( ( feature, index ) =>
							<TextControl
								key={ index }
								value={ feature }
								onChange={ ( value ) => {
									const newFeatures: string[] = features;
									newFeatures[ index ] = value;
									if ( ! value ) {
									}
									setAttributes( { features: newFeatures } );
								} } />
						)
					}
				</PanelBody>
			</InspectorControls>
			<div className={ 'price-table-block' }>
				<div className={ 'price-table-block__plans' }>
					{ plans.map( ( plan, i ) => (
						<div key={ i } className={ 'price-table-block__plan' }>
							<h3>{ plan.label }</h3>
							<p>{ plan.price }</p>
						</div>
					) ) }
					<Button isPrimary onClick={ () => {
						setAttributes( { plans: [ ...plans, ScaffoldPlan ] } );
					} }>Add</Button>
				</div>
			</div>
		</>
	);
};

export default edit;
