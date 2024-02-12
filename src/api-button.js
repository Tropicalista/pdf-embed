import { __ } from '@wordpress/i18n';

import {
	__experimentalInputControl as InputControl,
	Button,
	ExternalLink,
} from '@wordpress/components';
import {
	useEntityRecord,
	useEntityProp,
	store as coreStore,
} from '@wordpress/core-data';
import { useDispatch } from '@wordpress/data';
import {
	Fragment,
	useState,
	useEffect,
	createInterpolateElement,
} from '@wordpress/element';
import api from '@wordpress/api';

export default function ApiButton( props ) {
	const { attributes, setAttributes } = props;
	const { apiKey } = attributes;

	const { record, isResolving, hasResolved } = useEntityRecord(
		'root',
		'site'
	);

	const [ exampleSetting, setExampleSetting ] = useEntityProp(
		'root',
		'site',
		'pdf_embed_api_key'
	);

	const { saveEntityRecord, saveEditedEntityRecord } =
		useDispatch( coreStore );

	const onSettingChanged = ( value ) => {
		setExampleSetting( value );
	};

	const t = () => {
		saveEditedEntityRecord( 'root', 'site', undefined, {
			pdf_embed_api_key: exampleSetting,
		} );
	};

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
				value={ exampleSetting || '' }
				onChange={ ( val ) => onSettingChanged( val ) }
				suffix={
					<Button
						onClick={ () => t() }
						isPrimary
						aria-disabled={ isResolving }
						isBusy={ isResolving }
					>
						{ __( 'Save' ) }
					</Button>
				}
			/>
		</Fragment>
	);
}
