import {
	Card,
	CardHeader,
	CardBody,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { store as coreDataStore, useEntityRecords } from '@wordpress/core-data';
import { useDispatch, useSelect } from '@wordpress/data';
import Help from '../components/help';

export const Test = () => {
	//const data = useEntityRecords( 'root', 'comment', { per_page: 20 } );

	const { saveEntityRecord } = useDispatch( coreDataStore );

	const onSave = () => {
		saveEntityRecord( 'root', 'comment', {
			post: 106,
			author: 1,
			content: 'stocazzo',
		} );
	};

	return (
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
					<Button text="Save" onClick={ onSave } />
				</CardBody>
			</Card>
			<Help />
		</HStack>
	);
};
