import { __ } from '@wordpress/i18n';
import {
	__experimentalVStack as VStack,
	__experimentalInputControl as InputControl,
	Button,
	ExternalLink,
	Spinner,
	Notice,
	TextControl,
} from '@wordpress/components';
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	Fragment,
	createInterpolateElement,
	useEffect,
	useState,
	useRef,
} from '@wordpress/element';
import Settings from './index.js';

export const SettingsModal = ( { onRequestClose } ) => {
	const [ settings ] = useEntityProp( 'root', 'site', 'pdf_embed' );
	const [ pdfKey ] = useEntityProp( 'root', 'site', 'pdf_embed_apiKey' );
	const [ siteUrl ] = useEntityProp( 'root', 'site', 'url' );

	const [message, setMessage] = useState();
	const [loading, setLoading] = useState();

	const { editEntityRecord, saveEditedEntityRecord } =
		useDispatch( coreStore );

	const inputRef = useRef();

	const { canUserEdit } = useSelect( ( select ) => {
		const { canUser } = select( coreStore );
		const canEdit = canUser( 'update', 'settings' );

		return {
			canUserEdit: canEdit,
		};
	}, [] );

	const { isSaving, hasEdits } = useSelect(
		( select ) => ( {
			isSaving: select( coreStore ).isSavingEntityRecord(
				'root',
				'site'
			),
			hasEdits: select( coreStore ).hasEditsForEntityRecord(
				'root',
				'site',
				undefined,
				'popper'
			),
		} ),
		[]
	);

	const onChange = ( key, val ) => {
		editEntityRecord( 'root', 'site', undefined, {
			pdf_embed: {
				...settings,
				[key]: val,
			}
		} );
	};

	const save = () => {
		validate()
			.then( () => {
				saveEditedEntityRecord( 'root', 'site' );
				onRequestClose();
			} )
			.catch( () => {
				inputRef.current.focus();
			} )
	};

	const validate = () => {
		setLoading( true );
		const url = 'https://viewlicense.adobe.io/viewsdklicense/jwt';

		const data = {
			client_id: settings.apiKey,
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
				'x-api-key': settings.apiKey,
			},
			body: JSON.stringify( data ),
		} );

		response
			.then( (a) => setMessage( 'success' ) )
			.catch( (s) => {
				setMessage( 'error' );
			} )
			.finally( () => {
				setLoading( false );				
			} )

		return response;
	};

	if ( ! canUserEdit ) {
		<p>
			{ __(
				'Only admin can manage PDF Embed api key',
				'pdf-embed'
			) }
		</p>
	}

	if ( ! settings ) {
		return <Spinner />;
	}

	return (
		<VStack spacing={ 4 }>
			<p>{ __( 'Here you can set the global settings that will be available for all Pdf Embed blocks sitewide.', 'pdf-embed' ) }</p>
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
				value={ settings.apiKey }
				ref={ inputRef }
				onChange={ ( val ) => onChange( 'apiKey', val ) }
				suffix={
					<Button
						text={ __( 'Test' ) } 
						onClick={ () => validate() } 
						variant="primary"
						isBusy={ loading }
						disabled={ loading }
						aria-disabled={ loading }
						__next40pxDefaultSize
					/>
				}
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
			{ message &&
				<Notice status={ message } isDismissible={ false }>
					{
						'error' === message && 
						<small>An error occurred: please check that you have enabled this domain for this key.</small>
					}
					{
						'success' === message && 
						<small>The key is valid.</small>
					}
				</Notice>
			}
			<Settings options={ settings } onChange={ onChange } />
			<div>
				<Button
					text={ __( 'Save' ) } 
					onClick={ () => save() } 
					variant="primary"
					isBusy={ isSaving || loading }
					disabled={ ! hasEdits || isSaving }
					aria-disabled={ ! hasEdits || isSaving }
				/>
			</div>
		</VStack>
	);
}
