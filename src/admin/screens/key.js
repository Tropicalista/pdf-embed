import {
	Card,
	CardHeader,
	CardBody,
	Button,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { SettingsContext } from '../context/settings-context';
import { useContext, useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { DataForm, useFormValidity } from '@wordpress/dataviews/wp';
import { fields } from './constants';
import Help from '../components/help';

const form = {
	fields: [ 'apiKey' ],
	layout: {
		labelPosition: undefined,
		type: 'regular',
	},
};

export const Key = () => {
	const { isSaving, hasEdits, saveSettings, settings } =
		useContext( SettingsContext );
	const { editEntityRecord } = useDispatch( coreDataStore );

	const { validity, isValid } = useFormValidity( settings, fields, form );
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

	const handleChange = ( edits ) => {
		editEntityRecord( 'root', 'site', undefined, {
			pdf_embed: {
				...settings,
				...edits,
			},
		} );
	};

	const save = ( e ) => {
		e.preventDefault();
		saveSettings();
	};

	return (
		<form onSubmit={ save } ref={ containerRef }>
			<HStack
				id="key-screen"
				align={ 'flex-start' }
				justify={ 'flex-start' }
				spacing={ 4 }
			>
				<Card>
					<CardHeader>
						<b>{ __( 'API Key', 'pdf-embed' ) }</b>
					</CardHeader>
					<CardBody>
						<VStack spacing={ 4 }>
							<DataForm
								data={ settings }
								fields={ fields }
								form={ form }
								validity={ validity }
								onChange={ ( edits ) => handleChange( edits ) }
							/>
							<div>
								<Button
									text={ __( 'Save settings', 'pdf-embed' ) }
									type="submit"
									variant="primary"
									isBusy={ isSaving }
									disabled={
										! hasEdits || isSaving || ! isValid
									}
								/>
							</div>
						</VStack>
					</CardBody>
				</Card>
				<Help />
			</HStack>
		</form>
	);
};
