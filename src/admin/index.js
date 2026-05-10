import { createRoot } from '@wordpress/element';
import { getQueryArg } from '@wordpress/url';
import {
	Card,
	CardHeader,
	CardBody,
	Navigator,
	SnackbarList,
	Button,
	useNavigator,
} from '@wordpress/components';
import './style.scss';
import { Settings, Key, Test } from './screens';
import SettingsContextProvider from './context/settings-context';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { store as noticesStore } from '@wordpress/notices';
import { Menu } from './components/menu';
import { Header } from './components/header';
import { useEntityProp } from '@wordpress/core-data';
import { LoadingSpinner } from './components/loading-spinner';

function Notifications() {
	const notices = useSelect(
		( select ) => select( noticesStore ).getNotices(),
		[]
	);
	const { removeNotice } = useDispatch( noticesStore );
	const snackbarNotices = notices.filter(
		( { type } ) => type === 'snackbar'
	);

	return (
		<SnackbarList notices={ snackbarNotices } onRemove={ removeNotice } />
	);
}

const App = () => {
	const [ settings ] = useEntityProp( 'root', 'site', 'pdf_embed' );
	if ( ! settings ) {
		return <LoadingSpinner text={ __( 'Loading…', 'pdf-embed' ) } />;
	}
	const tab = getQueryArg( window.location.href, 'subpage' );

	return (
		<SettingsContextProvider>
			<Navigator
				initialPath={ tab ? `/${ tab }` : '/settings' }
				className="container"
			>
				<div className="sidebar">
					<Header text="PDF Embed" />
					<Menu />
				</div>
				<Navigator.Screen path={ '/key' } className="content">
					<Key />
				</Navigator.Screen>
				<Navigator.Screen path={ '/settings' } className="content">
					<Settings />
				</Navigator.Screen>
				<Navigator.Screen path={ '/test' } className="content">
					<Test />
				</Navigator.Screen>
			</Navigator>
			<Notifications />
		</SettingsContextProvider>
	);
};

window.addEventListener( 'DOMContentLoaded', () => {
	const domNode = document.getElementById( 'pdf-embed' );
	const root = createRoot( domNode );

	root.render( <App /> );
} );
