# Pdf Embed

![Social Sharing](https://github.com/tropicalista/pdf-embed/blob/main/_wordpress-org/banner-1544x500.png)

[![Active Installs](https://img.shields.io/wordpress/plugin/installs/pdf-embed?logo=wordpress&logoColor=%23fff&label=Active%20Installs&labelColor=%230F172A&color=%230F172A)](https://wordpress.org/plugins/social-sharing-block/) [![Playground Demo Link](https://img.shields.io/wordpress/plugin/v/pdf-embed?logo=wordpress&logoColor=%23fff&label=Playground%20Demo&labelColor=%233858e9&color=%233858e9)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/ndiego/social-sharing-block/main/_playground/blueprint.json)

A simple little WordPress block that allows you to embed PDF to your website using official [Adobe Pdf Embed API](https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html). This block requires you to create a **free** api key on Adobe. [Download on WordPress.org](https://wordpress.org/plugins/pdf-embed/)

### Supported Browsers

PDF Embed API is supported on the latest versions of the following browsers:

- Windows - Microsoft Edge, Google Chrome, Mozilla Firefox.
- macOS - Safari, Google Chrome, Microsoft Edge, Mozilla Firefox.
- Android - Google Chrome.
- iOS - Safari, Google Chrome.

## Support for print pdf

PDF printing is currently not supported in Firefox browser. Clicking on the print PDF button will show a popup asking users to download the file and print using Adobe Acrobat Reader.

### Mobile support

Much of what the PDF Embed API delivers is supported in the mobile devices. However, there are some limitations:

- Annotation tools are not supported on phones in Full Window embed mode. These tools are supported on tablets (both Android and iOS).
- Print functionality is unsupported.
- PDF download is unsupported on iOS devices, but it is supported on Android.

##

| Embed mode                 | Description                                                                                                                         | Example                      |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
| Full window (default mode) | Renders the PDF viewer into the full height and width of the parent element. Best suited for storage and productivity applications. | ![Full Window](https://developer.adobe.com/document-services/docs/static/38e444fffa8fc0f335e8464d4ee70420/f1bd9/embedfull.webp) |
| Sized container            | The sized container mode displays PDFs in a boxed container with landscape orientation. Best suited for presentations.              | ![Sized Container](https://developer.adobe.com/document-services/docs/static/ac789460629aad711a093856dfe0f690/f1bd9/embedsized.webp) |
| In-Line                    | All PDF pages rendered in line within a web page. Best suited for reading applications.                                             | ![In-line](https://developer.adobe.com/document-services/docs/static/9e248d1adb940e7f8f9c14dab8023415/f1bd9/embedinline.webp) |
| Lightbox                   | Displays PDFs in a focused view. Best suited for content websites, content portals, and email.                                      | ![Lightbox](https://developer.adobe.com/document-services/docs/static/3b9567cd27b371b4fbeecf5b2c17648a/c28f2/lightbox.webp) |


## Requirements

- WordPress 6.0+
- PHP 5.6+

## Development

1. Set up a local WordPress development environment.
2. Clone / download this repository into the `wp-content/plugins` folder.
3. Navigate to the `wp-content/plugins/social-sharing-block` folder in the command line.
4. Run `npm install` to install the plugin's dependencies within a `/node_modules/` folder.
5. Run `composer install` to install the additional WordPress composer tools within a `/vendor/` folder.
6. Run `npm run start` to compile and watch source files for changes while developing.

Refer to `package.json` and `composer.json` for additional commands.