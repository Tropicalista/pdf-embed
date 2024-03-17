import { __ } from '@wordpress/i18n';

import {
	__experimentalInputControl as InputControl,
	Button,
	ExternalLink,
} from '@wordpress/components';
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import { useDispatch } from '@wordpress/data';
import {
	Fragment,
	createInterpolateElement,
	useEffect,
} from '@wordpress/element';

export default function KeyInput( { setAttributes } ) {
	const [ pdfKey ] = useEntityProp( 'root', 'site', 'pdf_embed_api_key' );
	const [ siteUrl ] = useEntityProp( 'root', 'site', 'url' );

	const { editEntityRecord, saveEditedEntityRecord } =
		useDispatch( coreStore );

	const save = () => {
		setAttributes( { apiKey: pdfKey } );
		saveEditedEntityRecord( 'root', 'site', undefined, {
			pdf_embed_api_key: pdfKey,
		} );
	};

	const validate = () => {
		const url = 'https://viewlicense.adobe.io/viewsdklicense/jwt';

		const data = {
			client_id: pdfKey,
			client_device_time: Date.now(),
			domain: siteUrl,
		};

		const response = fetch( url, {
			method: 'POST',
			mode: 'cors',
			redirect: 'follow',
			headers: {
				'X-Key-Pair-Version': 'v1',
				'Content-Type': 'application/json',
				'x-api-key': pdfKey,
			},
			body: JSON.stringify( data ),
		} );

		return response;
	};

	return (
		<Fragment>
			<InputControl
				label={ __( 'API Key', 'pdf-embed' ) }
				help={ createInterpolateElement(
					__(
						'Get your free API key on <a>Adobe Official site</a>.',
						'pdf-embed'
					),
					{
						a: (
							<ExternalLink
								href="https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html"
								target="_blank"
								rel="noreferrer"
							/>
						),
					}
				) }
				value={ pdfKey }
				onChange={ ( val ) => {
					editEntityRecord( 'root', 'site', undefined, {
						pdf_embed_api_key: val,
					} );
				} }
				suffix={
					<Button onClick={ () => save() } isPrimary>
						{ __( 'Save' ) }
					</Button>
				}
			/>
		</Fragment>
	);
}
