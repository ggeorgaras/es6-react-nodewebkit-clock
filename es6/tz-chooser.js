import * as React from "react";
import * as moment from "moment-timezone";

import tz from "./tz";


class TZChooser {
  getDefaultProps() {
    return {name: "tzchooser"};
  }
  getInitialState() {
    return {zone: this.props.tz || tz()};
  }
  handleChange(event) {
    var zone = event.target.value;
    this.setState({zone});
    if (this.props.onChange) this.props.onChange(zone);
  }
  render() {
    var zones = moment.tz.names(),
        zoneTemplate = (zoneName) => {
          return <option key={zoneName} value={zoneName}>{zoneName}</option>
        };
    return <select className="tzchooser"
                   onChange={this.handleChange}
                   value={this.state.zone}
                   name={this.props.name}
                   id={this.props.name}>
             {zones.map(zoneTemplate)}
           </select>
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.zone !== nextState.zone
        || this.props.name !== nextProps.name;
  }
}

export default React.createClass(TZChooser.prototype);
