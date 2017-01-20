import React, { Component } from 'react';
import { Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import KeyValues from './KeyValues';
class About extends Component {
	render () {
		let info = {
			version: DeviceInfo.getReadableVersion() + '.' + DeviceInfo.getBuildNumber()
		/*	DeviceInfo.

  getUniqueID()
  getInstanceID()
  getDeviceId()
  getManufacturer()
  getModel()
  getBrand()
  getSystemName: function () {
    return RNDeviceInfo.systemName;
  },
  getSystemVersion: function () {
    return RNDeviceInfo.systemVersion;
  },
  getBundleId: function() {
    return RNDeviceInfo.bundleId;
  },
  getBuildNumber: function() {
    return RNDeviceInfo.buildNumber;
  },
  getVersion: function() {
    return RNDeviceInfo.appVersion;
  },
  getReadableVersion: function() {
    return RNDeviceInfo.appVersion + "." + RNDeviceInfo.buildNumber;
  },
  getDeviceName: function() {
    return RNDeviceInfo.deviceName;
  },
  getUserAgent: function() {
    return RNDeviceInfo.userAgent;
  },
  getDeviceLocale: function() {
    return RNDeviceInfo.deviceLocale;
  },
  getDeviceCountry: function() {
    return RNDeviceInfo.deviceCountry;
  },
  getTimezone: function() {
    return RNDeviceInfo.timezone;
  },
  isEmulator: function() {
    return RNDeviceInfo.isEmulator;
  },
  isTablet: function() {
    return RNDeviceInfo.isTablet;
*/














		};
		const { title } = this.props;
		return (
			<View>
				<Text>
					{ title }
				</Text>
				<KeyValues data={info}/>
			</View>
		);
	}
}

export default About;
