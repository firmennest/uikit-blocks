// THE DEFAULT/STANDARD UIKIT BLOCK
// Duplicate this code and make your new block
// Doesn't come with any styles

//  Import CSS.
import './style.scss';
import './editor.scss';

// Import icon
import icon from '../icon';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, InnerBlocks } = wp.editor;
const {
	SelectControl,
    PanelBody,
    PanelRow,
	RadioControl
} = wp.components;


registerBlockType( 'cgb/fn-uikit-container', {

	title: __( 'uikit-container' ), // Block title.
	icon, 								// Block icon
	category: 'common', 				// Block category
	keywords: [ 						// Search by these keywords
		__( 'uk', 'UK', 'uikit', 'container' ),
	],

	attributes: {
		visibility_verb: {
			default: '',
			visibility_verb: ''
		},
	},

	edit: function( props ) {
		return [


			<InspectorControls>
				{/* ##########DEFAULT CONTROLS########## */}

				{/* CONTAINER */}
				<PanelBody
					title={ __( 'Set visibility?', 'fn-uikit-gutenberg' ) }
				>
					<h4>uk-container</h4>
					<PanelRow>
						<SelectControl
							label='Choose visibility type:'
							options={[
									{ label: 'None', value: '' },
									{ label: 'Hidden', value: 'hidden' },
									{ label: 'Visible', value: 'visible' },
								]}
							onChange={( value ) => {
								props.setAttributes( { visibility_verb: value } );
								if(value != '' && visibility_size != '') {
									props.setAttributes( { visibility_class: `uk-${value}@${props.attributes.visibility_size}` } );
								} else if(value == '' || props.attributes.visibility_size == '') {
									props.setAttributes( { visibility_class: '' } );
								}
							}}

							value={props.attributes.visibility_verb}
						/>
					</PanelRow>
					<h4>@</h4>
					<PanelRow>
						<SelectControl
							label='at'
							options={[
									{ label: 'None', value: '' },
									{ label: 'Small', value: 's' },
									{ label: 'Medium', value: 'm' },
									{ label: 'Large', value: 'l' },
									{ label: 'XLarge', value: 'xl' },
								]}
							onChange={( value ) => {
								props.setAttributes( { visibility_size: value } );
								if(value != '' && props.attributes.visibility_verb != '') {
									props.setAttributes( { visibility_class: `uk-${props.attributes.visibility_verb}@${value}` } );
								} else if(value == '' || props.attributes.visibility_verb == '') {
									props.setAttributes( { visibility_class: '' } );
								}
							}}

							value={props.attributes.visibility_size}
						/>
					</PanelRow>
				</PanelBody>
				{/* ################################### */}
			</InspectorControls>
			,
			<div className={`uk-container`}>
			<InnerBlocks />
			</div>
		];
	},

	save: function( props ) {
		return (
			<div className={`uk-container`}><InnerBlocks.Content /></div>
		);
	},
} );
