=== pally ===

Contributors: pointsgmbh
Tags: accessibility-ready, one-column, custom-colors, custom-header, custom-logo, custom-menu, featured-images, sticky-post, theme-options, threaded-comments, translation-ready, blog

Requires at least: 4.7
Tested up to: 6.2.2
Requires PHP: 5.6
Stable tag: 1.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

### Hello

Hi. I'm a theme called pally. I'm a theme meant for hacking so don't use me as a Parent Theme. Use me to create your own theme.
I'm an accessible-ready and accessible-optimized theme.

Here are some things I am capable of.

* Code that is as accessible as possible
* A custom header implementation
* Custom template tags in `inc/template-tags.php` that keep your templates clean and neat and prevent code duplication.
* Some small tweaks in `inc/template-functions.php` that can improve your theming experience.
* A script at `assets/js/nav.js` that makes your menu a toggled dropdown on small screens (like your phone), ready for CSS artistry. It's enqueued in assets/js/main.js
* Licensed under GPLv2 or later. :) Use it to make something cool.
* CSS Overview in `style.css`


== Description ==

pally is an accessibility-ready theme that helps you setting up an accessible blog.
The name of this theme is a combination of the words pal and a11y, the short form for accessibility, the 11
representing the 11 letters in between a and y.
It's your pal for building a blog that is accessible for as many people as possible.

== Installation ==

1. In your admin panel, go to Appearance > Themes and click the Add New button.
2. Click Upload Theme and Choose File, then select the theme's .zip file. Click Install Now.
3. Click Activate to use your new theme right away.
4. Import Starter Content by entering the Customizer and click "Publish".
5. Make sure to read pally Setup Help (Design - pally Setup Help) and About & A11y Tips (left sidebar) in the backend.

We have a blog post helping with the installation in our blog (German):
https://www.barrierefreiesblog.de/theme-pally/pally-dokumentation/

== Accessibility topics / issues / updates / won't fixes ==

Nothing atm.

== Changelog ==

= 1.0 - 2023 =
* Initial release

== Credits ==

* Partly based on Underscores https://underscores.me/, (C) 2012-2020 Automattic, Inc., [GPLv2 or later](https://www.gnu.org/licenses/gpl-2.0.html)
* normalize.css https://necolas.github.io/normalize.css/, (C) 2012-2018 Nicolas Gallagher and Jonathan Neal, [MIT](https://opensource.org/licenses/MIT)


Installation
---------------

### Requirements

`ally` requires the following dependencies:

- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)

### Setup

To start using all the tools that come with `_pally`  you need to install the necessary Node.js and Composer dependencies :

```sh
$ composer install
$ npm install
```

### Available CLI commands

`_ally` comes packed with CLI commands tailored for WordPress theme development :

- `composer make-pot` : generates a .pot file in the `language/` directory.
- `npm start` : watches all SASS files and recompiles them to css when they change.


