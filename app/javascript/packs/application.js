import "../stylesheets/application.scss"

const componentRequireContext = require.context('../components', true);
const ReactRailsUJS = require('react_ujs');
ReactRailsUJS.useContext(componentRequireContext);