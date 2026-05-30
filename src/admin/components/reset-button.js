/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Button,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalConfirmDialog as ConfirmDialog,
} from '@wordpress/components';
import { useState, Fragment, useContext } from '@wordpress/element';
import { SettingsContext } from '../context/settings-context';
import { useDispatch } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';

/**
 * Renders the update settings buttons and animation
 *
 * @since 2.1.0
 * @param {Object} props All the props passed to this function
 * @return {string}		 Return the rendered JSX
 */
export default function ResetButton( props ) {
	const {
		text = __( 'Reset settings', 'popper' ),
		variant = 'tertiary',
		isDestructive = true,
		confirmMessage = __( 'Are you sure?', 'pdf-embed' ),
	} = props;

	const [ showConfirmDialog, setShowConfirmDialog ] = useState( false );
	const { saveSettings, hasEdits } = useContext( SettingsContext );

	const { editEntityRecord } = useDispatch( coreDataStore );

	const handleChange = () => {
		editEntityRecord( 'root', 'site', undefined, {
			pdf_embed: {
				apiKey: '',
				measurementId: '',
				embedMode: 'FULL_WINDOW',
				showZoomControl: true,
				showAnnotationTools: true,
				showFullScreen: true,
				defaultViewMode: 'FIT_PAGE',
				enableFormFilling: false,
				showDownloadPDF: true,
				showPrintPDF: true,
				exitPDFViewerType: 'CLOSE',
				showThumbnails: true,
				showBookmarks: true,
				enableLinearization: false,
				enableAnnotationAPIs: false,
				includePDFAnnotations: false,
				enableSearchAPIs: true,
				showDisabledSaveButton: true,
				focusOnRendering: true,
				showFullScreenViewButton: true,
				dockPageControls: true,
				enableTextSelection: false,
			},
		} );
		saveSettings().then( () => setShowConfirmDialog( false ) );
	};

	return (
		<Fragment>
			<Button
				onClick={ () => setShowConfirmDialog( true ) }
				variant={ variant }
				isDestructive={ isDestructive }
				disabled={ ! hasEdits }
			>
				{ text }
			</Button>
			<ConfirmDialog
				isOpen={ showConfirmDialog }
				onConfirm={ handleChange }
				onCancel={ () => setShowConfirmDialog( false ) }
			>
				{ confirmMessage }
			</ConfirmDialog>
		</Fragment>
	);
}
