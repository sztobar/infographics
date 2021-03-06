var React = require('react-with-addons');
var TemplatePropertyMixin = require('../../mixins/TemplatePropertyMixin');
var FormGroup = require('../utils/FormGroup.react');


var ColorTemplateProperty = React.createClass({

  statics: {
    databaseKey: 'Color'
  },

  mixins: [TemplatePropertyMixin],

  render: function render() {
    return (
      <FormGroup label={this.props.label + "(color)"}>
        <input className="form-control" value={this.state.value} onChange={this._onChange} />
      </FormGroup>
    );
  }

});

module.exports = ColorTemplateProperty;