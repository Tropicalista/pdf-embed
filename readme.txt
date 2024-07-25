=== Pdf Embed ===
Contributors:      tropicalista
Tags:              pdf embedder, embed pdf, pdf embed api, pdf block, block
Tested up to:      6.6
Stable tag:        0.4.9
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html
Requires at least: 5.6.0
Requires PHP:      5.6

PDF embedder with official Adobe Embed API.

== Description ==

A simple, responsive and 100% free Gutenberg Block to display PDF on your website using the official [Adobe PDF Embed API](https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html).

[youtube https://youtu.be/mcKJXWmyre4?si=XlU45a0dhiFESriH]

== Features ==
- Embed or inline PDF
- Fully responsive
- Works fine on Chrome, Firefox, Opera, Edge and IE11
- Show download button
- Show print button
- Show full screen
- 📈Track Pdf events in Google Analytics ([docs](https://developer.adobe.com/document-services/docs/overview/pdf-embed-api/howtodata/#google-analytics))
- 🔥Show PDF in Lightbox on button click

== Supported Browsers ==

PDF Embed API is supported on the latest versions of the following browsers:

- Windows - Microsoft Edge, Google Chrome, Mozilla Firefox.
- macOS - Safari, Google Chrome, Microsoft Edge, Mozilla Firefox.
- Android - Google Chrome.
- iOS - Safari, Google Chrome.

== WHAT’S NEXT ==

If you like this plugin, then consider checking out our other projects:

* [Formello](https://wordpress.org/plugins/formello): a form builder to collect leads, newsletter signup, contact form and more.
* [Popper](https://wordpress.org/plugins/popper): a popup builder to increase leads with exit intent.
* [Mortgage Calculator](https://wordpress.org/plugins/mortgage): a mortgage calculator block for Gutenberg.
* [Search Console](https://wordpress.org/plugins/search-console): view all your search console data inside WordPress admin.

## Privacy Policy 
Pdf Embed uses [Appsero](https://appsero.com) SDK to collect some telemetry data upon user's confirmation. This helps us to troubleshoot problems faster & make product improvements.

Appsero SDK **does not gather any data by default.** The SDK only starts gathering basic telemetry data **when a user allows it via the admin notice**. We collect the data to ensure a great user experience for all our users. 

Integrating Appsero SDK **DOES NOT IMMEDIATELY** start gathering data, **without confirmation from users in any case.**

Learn more about how [Appsero collects and uses this data](https://appsero.com/privacy-policy/).

== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload the plugin files to the `/wp-content/plugins/adobe-pdf` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

= Do I need an API key to use this block? =

Yes you will need a free [Adobe PDF Embed API](https://developer.adobe.com/document-services/apis/pdf-embed/).

== Screenshots ==

1. Insert key
2. Choose PDF
3. View PDF
4. Open PDF in Lightbox
5. Pdf block controls

== Changelog ==

= 0.4.9 =
* Compatitbility wp 6.6

= 0.4.8 =
* Added Analytics tracking.
* Added option to disable text selection

= 0.4.7 =
* Fix tracker.

= 0.4.6 =
* Fix missing tracker.

= 0.4.5 =
* Allow users other than admin to use the block.

= 0.4.4 =
* Fix download settings not showing
* Added Continuous and Single page option

= 0.4.3 =
* Small fix

= 0.4.2 =
* Small fix

= 0.4.1 =
* Added help messages
* Fixed WP version

= 0.4.0 =
* Added assets and readme
* Added min height(500px) to default

= 0.3.9 =
* FIx migration error (temporary)

= 0.3.8 =
* Better api key handling
* Added view mode options
* Added control to fit page
* Always include the api key stored in DB

= 0.3.7 =
* Fix Inline embed mode responsive issue

= 0.3.6 =
* Fix error on WP 6.4

= 0.3.5 =
* Address WP 6.3

= 0.3.4 =
* Added filter to show pdf on Lightbox on button click. Only for ('core/button', 'generateblocks/button')

= 0.3.3 =
* Added better help message.
* Fiz height control showing on inline option.

= 0.3.2 =
* Added full window options to enable form filling.

= 0.3.1 =
* Code linting
* Fix error on inserting

= 0.3.0 =
* Fix new iframe loading in Gutenberg
* Code linting

= 0.2.9 =
* Fix height on editor
* Fix api button

= 0.2.8 =
* Fix new api url
* Fix editor rendering same as frontend

= 0.2.7 =
* Fix correct file to embed due to Adobe migration

= 0.2.6 =
* Fix link on button

= 0.2.5 =
* Fix wrong selector on links again

= 0.2.4 =
* Fix wrong selector on links

= 0.2.3 =
* Better handling of save api key
* Added input on placeholder
* Added light mode to buttons

= 0.2.2 =
* Added comment to function

= 0.2.1 =
* Allow more than one pdf displayed on a page/post

= 0.2.0 =
* Fix missing fileName on upload

= 0.1.9 =
* Fix contributors
* Fix height resizing

= 0.1.8 =
* Fix hardcoded pdf

= 0.1.7 =
* Fix missing assets

= 0.1.6 =
* Fix missing frontend js

= 0.1.3 =
* Better handling of frontend js
* Code optimization

= 0.1.2 =
* Fix missing assets

= 0.1.0 =
* Release

