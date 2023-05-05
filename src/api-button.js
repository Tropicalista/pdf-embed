import { __ } from '@wordpress/i18n';

import {
	__experimentalInputControl as InputControl,
	Button,
	ExternalLink
} from '@wordpress/components';

import { Fragment, useState, useEffect, createInterpolateElement } from '@wordpress/element';
import api from '@wordpress/api';

export default function ApiButton( props ) {
	const { attributes, setAttributes } = props;
	const { apiKey } = attributes;

	const saveApi = ( val ) => {
		setLoading( true );
		const settings = new api.models.Settings( {
			pdf_embed_api_key: val,
		} );
		settings.save( null, {
			success: () => {
				setAttributes( { apiKey: val } );
				setLoading( false );
			},
		} );
	};

	const [ loading, setLoading ] = useState( false );
	const [ apiLocal, setApiLocal ] = useState( false );

	useEffect( () => {
		setApiLocal( apiKey );
	}, [] );

	return (
		<Fragment>
			<InputControl
				label={ __( 'API Key', 'pdf-embed' ) }
				help={ createInterpolateElement(
					__(
						'Get your free API key on <a>Adobe  Official site</a>.',
						'pdf-embed'
					),
					{
						a: (
							<ExternalLink // eslint-disable-line
								href="https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html"
								target="_blank"
								rel="noreferrer"
							/>
						),
					}
				) }
				value={ apiLocal || '' }
				onChange={ ( val ) => setApiLocal( val ) }
				suffix={
					<Button
						onClick={ () => saveApi( apiLocal ) }
						isPrimary
						aria-disabled={ loading }
						isBusy={ loading }
					>
						{ __( 'Save' ) }
					</Button>
				}
			/>
		</Fragment>
	);
}
