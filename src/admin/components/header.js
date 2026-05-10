import { Icon } from '@wordpress/components';
import { ReactComponent as Logo } from '../../../assets/logo.svg';

export const Header = ( { text } ) => {
	return (
		<div className="header">
			<Icon icon={ Logo } />
			<b className="description">{ text }</b>
		</div>
	);
};
