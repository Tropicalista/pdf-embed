import {
	Card,
	CardHeader,
	CardBody,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	Notice,
	Button,
} from '@wordpress/components';
import { SettingsContext } from '../context/settings-context';
import { useContext, Fragment, useRef, useEffect, useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import ResetButton from '../components/reset-button';
import { DataForm, useFormValidity } from '@wordpress/dataviews/wp';
import { fields, embedModeHelp } from './constants';
import Help from '../components/help';

const form = {
	fields: [
		'embedMode',
		'showZoomControl',
		'showAnnotationTools',
		'showFullScreen',
		'defaultViewMode',
		'height',
		'enableFormFilling',
		'showDownloadPDF',
		'showPrintPDF',
		'exitPDFViewerType',
		'showThumbnails',
		'showBookmarks',
		'enableLinearization',
		'enableAnnotationAPIs',
		'includePDFAnnotations',
		'enableSearchAPIs',
		'enableTextSelection',
		'showDisabledSaveButton',
		'focusOnRendering',
		'showFullScreenViewButton',
		'dockPageControls',
		'measurementId',
	],
	layout: {
		labelPosition: undefined,
		type: 'regular',
	},
};

export const Settings = () => {
	const { isSaving, hasEdits, saveSettings, settings } =
		useContext( SettingsContext );
	const { editEntityRecord } = useDispatch( coreDataStore );

	const handleChange = ( edits ) => {
		editEntityRecord( 'root', 'site', undefined, {
			pdf_embed: {
				...settings,
				...edits,
			},
		} );
	};

	const { validity } = useFormValidity( settings, fields, form );
	const containerRef = useRef();

	// Show validation messages on load without focusing
	useEffect( () => {
		if ( validity && containerRef.current ) {
			const inputs = containerRef.current.querySelectorAll( 'input' );
			inputs.forEach( ( input ) => {
				// Dispatch 'invalid' event to trigger the validation message display
				input.dispatchEvent(
					new Event( 'invalid', { bubbles: false } )
				);
			} );
		}
	}, [ validity ] );
console.log(validity)
	const save = ( e ) => {
		e.preventDefault();
		saveSettings();
	};

	return (
		<form onSubmit={ save } ref={ containerRef }>
			<HStack
				id="settings-screen"
				align={ 'flex-start' }
				justify={ 'flex-start' }
				spacing={ 4 }
			>
				<Card>
					<CardHeader size="small">
						<b>{ __( 'Settings', 'pdf-embed' ) }</b>
					</CardHeader>
					<CardBody>
						<VStack spacing={ 4 }>
							<Notice status="warning" isDismissible={ false }>
								{ __(
									'Here you can set the global settings that will be available for all Pdf Embed blocks sitewide. This settings are also valid for lightbox.',
									'pdf-embed'
								) }
							</Notice>
							<DataForm
								data={ settings }
								fields={ fields }
								form={ form }
								validity={ validity }
								onChange={ ( edits ) => handleChange( edits ) }
							/>
							<HStack>
								<Button
									text={ __( 'Save settings', 'pdf-embed' ) }
									type="submit"
									variant="primary"
									isBusy={ isSaving }
									disabled={ isSaving }
								/>
								<ResetButton />
							</HStack>
						</VStack>
					</CardBody>
				</Card>
				<Help />
			</HStack>
		</form>
	);
};
