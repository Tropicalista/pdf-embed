import { __ } from '@wordpress/i18n';

import { 
	__experimentalInputControl as InputControl,
	Button,
} from '@wordpress/components';

import { Fragment, RawHTML, useState, useEffect } from '@wordpress/element';
import api from '@wordpress/api';

export default function ApiButton( props ) {

	const { attributes, setAttributes } = props;
	const { apiKey } = attributes;

	const saveApi = (val) => {
        const settings = new api.models.Settings( {
            [ 'pdf_embed_api_key' ]: val,
        } );	
        settings.save( null, {
        	success: () => setAttributes( { apiKey: val } )
        })
	}

	const [ loading, setLoading ] = useState( false )
	const [ apiLocal, setApiLocal ] = useState( false )

	useEffect(() => {

		setApiLocal( apiKey )

	}, [] );

	return (
		<Fragment>
	        <InputControl
				label={ __( 'API Key', 'pdf-embed' ) }
				value={ apiLocal || '' }
	            onChange={ ( val ) => setApiLocal( val ) }
	            suffix={
					<Button
						onClick={ () => saveApi( apiLocal ) }
						isPrimary
						aria-disabled={ loading }
						isBusy={ loading }
					>
						{ __( 'Save', 'formello' ) }
					</Button>
	            }
	        />
		</Fragment>
	);
}
