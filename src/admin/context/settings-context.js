import { createContext } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { store as coreDataStore, useEntityProp } from '@wordpress/core-data';
import { store as noticesStore } from '@wordpress/notices';
import { __ } from '@wordpress/i18n';

export const SettingsContext = createContext();

function SettingsContextProvider( props ) {
	const [ settings ] = useEntityProp( 'root', 'site', 'pdf_embed' );

	const { saveEditedEntityRecord } = useDispatch( coreDataStore );
	const { createNotice } = useDispatch( noticesStore );

	const saveSettings = () => {
		return saveEditedEntityRecord( 'root', 'site', undefined, {
			throwOnError: true,
		} )
			.then( () => {
				createNotice(
					'info',
					'🎯 ' + __( 'Settings saved.', 'pdf-embed' ),
					{
						type: 'snackbar',
					}
				);
			} )
			.catch( ( error ) => {
				createNotice( 'error', '⚠️ ' + error.message, {
					type: 'snackbar',
					explicitDismiss: true,
				} );
			} );
	};

	const { isSaving, hasEdits, hasResolved } = useSelect(
		( select ) => ( {
			hasResolved: select( coreDataStore ).hasFinishedResolution(
				'getEntityRecord',
				[ 'root', 'site' ]
			),
			isSaving: select( coreDataStore ).isSavingEntityRecord(
				'root',
				'site'
			),
			hasEdits: select( coreDataStore ).hasEditsForEntityRecord(
				'root',
				'site',
				undefined,
				'pdf_embed'
			),
		} ),
		[]
	);

	return (
		<SettingsContext.Provider
			value={ {
				saveSettings,
				settings,
				hasEdits,
				isSaving,
				ready: hasResolved,
			} }
		>
			{ props.children }
		</SettingsContext.Provider>
	);
}

export default SettingsContextProvider;
