const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { addFilter } = wp.hooks; 
import { __ } from '@wordpress/i18n';
import {
    InspectorControls,
    BlockControls,
} from '@wordpress/block-editor';
import {
    ToolbarButton,
    ToolbarGroup,
} from '@wordpress/components';

/**
 * Create HOC to add spacing control to inspector controls of block.
 */
const withSpacingControl = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        // Do nothing if it's another block than our defined ones.
        if ( ! [ 'core/button', 'generateblocks/button' ].includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { attributes, setAttributes } = props

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <BlockControls>
                    <ToolbarGroup>
                        <ToolbarButton
                            label={ __( 'Open pdf in lightbox', 'pdf-embed' ) }
                            icon={ 'pdf' }
                            onClick={ () => {
                                setAttributes( { embedPdf: !attributes.embedPdf } );
                            } }
                            isPressed={ attributes.embedPdf }
                        />
                    </ToolbarGroup>
                </BlockControls>
            </Fragment>
        );
    };
}, 'withSpacingControl' );

addFilter( 'editor.BlockEdit', 'extend-block-example/with-spacing-control', withSpacingControl );

const enableToolbarButtonOnBlocks = [
    'core/button'
];

/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes( settings, name ) {
    
    // Do nothing if it's another block than our defined ones.
    if ( ! enableToolbarButtonOnBlocks.includes( name ) ) {
        return settings;
    }

    //check if object exists for old Gutenberg version compatibility
    if( typeof settings.attributes !== 'undefined' ){
    
        settings.attributes = Object.assign( settings.attributes, {
            embedPdf:{ 
                type: 'boolean',
                default: false,
            }
        });
    
    }

    return settings;
}

addFilter(
    'blocks.registerBlockType',
    'tropicalista/pdf-embed',
    addAttributes
);