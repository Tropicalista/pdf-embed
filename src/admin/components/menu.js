import {
	useNavigator,
	Button,
	__experimentalVStack as VStack,
	__experimentalDivider as Divider,
	DropdownMenu,
} from '@wordpress/components';
import { cog, key, menu as menuIcon } from '@wordpress/icons';
import { Fragment } from '@wordpress/element';

const icons = {
	key,
	settings: cog,
};

const menu = {
	key: 'API Key',
	settings: 'Settings',
	//test: 'test',
};

export const Menu = () => {
	const navigator = useNavigator();

	return (
		<div className="sidebar-menu">
			<DropdownMenu
				icon={ menuIcon }
				label="Menu"
				className="menu-dropdown"
				controls={ Object.keys( menu ).map( ( m ) => {
					return [
						{
							title: menu[ m ],
							icon: icons[ m ],
							onClick: () =>
								navigator.goTo( `/${ m }`, {
									skipFocus: true,
								} ),
						},
					];
				} ) }
			/>
			<VStack>
				{ Object.keys( menu ).map( ( m, i ) => {
					return (
						<Fragment key={ i }>
							<Button
								onClick={ () =>
									navigator.goTo( `/${ m }`, {
										skipFocus: true,
									} )
								}
								icon={ icons[ m ] }
								text={ menu[ m ] }
								justify="center"
							/>
							{ 'test' === m && <Divider margin="5" /> }
						</Fragment>
					);
				} ) }
			</VStack>
		</div>
	);
};
