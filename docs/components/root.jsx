
var React = require('react');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

var Html = require('react-html');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Home = require('./home.jsx');
//var About = require('./about.jsx');
//var NotFoundPage = require('./not-found-page.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <Html {...this.props}>
        <Header {...this.props} />
        <Locations path={this.props.path}>
          <Location path="/" handler={Home} />
        </Locations>
        <Footer {...this.props} />
      </Html>
    )
  }
});
