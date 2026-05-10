const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = [
	{
		...defaultConfig,
		entry: {
			...defaultConfig.entry(),
			'admin-script': path.resolve( __dirname, 'src/admin/index.js' ),
		},
	},
];
