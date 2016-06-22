const APP_DIR = 'app';
const TEMP_DIR = 'tmp';
const DEST_DIR = 'dist';
const DOCS_DIR = 'docs';
const REPORTS_DIR = 'reports';
const APP_SPEC_SRC = `${APP_DIR}/**/*.spec.js`;
const E2E_SPEC_SRC = 'e2e-tests/**/*.spec.js';
const BUILD_SCRIPT = 'gulpfile.babel.js';
const SASS_SRC = `${APP_DIR}/**/*.scss`;
const HTML_SRC = `${APP_DIR}/**/*.html`;
const ANGULAR_PARTIALS = `${APP_DIR}/views/**/*.html`;
const FONTS_SRC = `${APP_DIR}/fonts/**/*!(.txt)`;
const IMAGES_SRC = `${APP_DIR}/images/**/*`;
const ENTRY = `${APP_DIR}/app.js`;
const APP_JS = `${APP_DIR}/**/*.js`;

const JS_SRC = [
    `${APP_DIR}/**/*.js`,
    `!${APP_DIR}/**/*.spec.js`
];

const ALL_JS = [
    `${APP_DIR}/**/*.js`,
    `${E2E_SPEC_SRC}`
];

const SIZE_SRC = [
    `${DEST_DIR}/**/*`,
    `!${DEST_DIR}/images/favicon/**/*`, // ignore favicons
    `!${DEST_DIR}/views/**/*`, // ignore views since they are bundled with app.js
    `!${DEST_DIR}/**/*.map`, // ignore map files
    `!${DEST_DIR}/**/app.js`, // ignore unminified assets
    `!${DEST_DIR}/**/app.css`, // ignore unminified assets
    `!${DEST_DIR}/fonts/**/*`, // ignore; only a small subset of fonts will be pulled in
];

const SASS_IGNORE_RESET = [
    `${SASS_SRC}`,
    `!${APP_DIR}/**/*normalize.scss`
];

export default {
    src: {
        dir: APP_DIR,
        js: JS_SRC,
        partials: ANGULAR_PARTIALS,
        images: IMAGES_SRC,
        fonts: FONTS_SRC,
        html: HTML_SRC,
        e2e: E2E_SPEC_SRC,
        sass: SASS_SRC,
        unitTests: APP_SPEC_SRC,
        size: SIZE_SRC,
        allJs: ALL_JS,
        entry: ENTRY,
        sassIgnoreReset: SASS_IGNORE_RESET,
        appJs: APP_JS
    },
    dest: {
        dir: DEST_DIR,
        images: `${DEST_DIR}/images`,
        fonts: `${DEST_DIR}/fonts`,
        html: `${DEST_DIR}`,
        css: `${DEST_DIR}/css`,
        tmp: `${TEMP_DIR}`,
        js: `${DEST_DIR}/js`,
        docs: `${DOCS_DIR}`,
        plato: `${REPORTS_DIR}/plato`
    },
    configs: {
        scssLint: '.scsslint.yml'
    },
    buildScript: BUILD_SCRIPT
};