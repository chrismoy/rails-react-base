import React, { Component } from 'react';
import './UserSettings.css';
import RangeTile from './RangeTile';
import ToggleTile from './ToggleTile';

class UserSettings extends Component {

  render() {

    const settings = [
      { inputType: "slider", title: "Search Radius", range: [0, 10], step: 0.1, labelType: "number", label: "mi" },
      { inputType: "slider", title: "Maximum Price", range: [1, 4], step: 1, labelType: "rangeUp", label: "$" },
      { inputType: "slider", title: "Minimum Rating", range: [0, 5], step: 0.5, labelType: "fraction", label: "" },
      { inputType: "switch", title: "Delivery Only" }
    ];

    return (

      <div className="user-settings">
        <div className="user-settings__header">
          <h2 className="user-settings__title">DISCOVERY SETTINGS</h2>
        </div>
        <div className="user-settings__settings">
          {
            settings.map((setting, index) => {
              if (setting.inputType === "slider") {
                return (
                  <RangeTile
                    id={index}
                    key={index}
                    label={setting.label}
                    labelType={setting.labelType}
                    range={setting.range}
                    step={setting.step}
                    title={setting.title} />
                );
              } else {
                return (
                  <ToggleTile
                    id={index}
                    key={index}
                    title={setting.title} />
                );
              }
            })
          }
        </div>
      </div>
    );
  }
}

export default UserSettings;
