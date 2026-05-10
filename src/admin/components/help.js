import {
	Card,
	CardHeader,
	CardBody,
	ExternalLink,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

export default function Help() {
	return (
		<div className="ads-container">
			<Card>
				<CardHeader>
					<b>{ __( 'Need help?', 'pdf-embed' ) }</b>
				</CardHeader>

				<CardBody>
					<p>
						{ __(
							'Detailed documentation is available on the plugin website.',
							'pdf-embed'
						) }
					</p>

					<ExternalLink href="https://docs.formello.net">
						{ __( 'Documentation', 'pdf-embed' ) }
					</ExternalLink>
					<p>
						{ __(
							'We would love to help you out if you need any help.',
							'pdf-embed'
						) }
					</p>

					<ExternalLink href="https://wordpress.org/support/plugin/pdf-embed/">
						{ __( 'Ask a question', 'pdf-embed' ) }
					</ExternalLink>
				</CardBody>
			</Card>
			<Card className="ads-container__reviews">
				<CardHeader>
					<b>{ __( 'Do you like the plugin?', 'pdf-embed' ) }</b>
				</CardHeader>

				<CardBody>
					<p>
						{ __(
							'If you like PDF Embed plugin you can share a review to help us and spread some love!',
							'pdf-embed'
						) }
					</p>
					<ExternalLink href="https://wordpress.org/support/plugin/pdf-embed/reviews/#new-post">
						{ __( 'Rate 5 stars!', 'pdf-embed' ) }
					</ExternalLink>
				</CardBody>
			</Card>
		</div>
	);
}
