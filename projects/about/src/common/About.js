import React, { Component } from 'react';
import { Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import KeyValues from './KeyValues';
class About extends Component {
	render () {
		let info = {
			AppVersion: DeviceInfo.getReadableVersion(),
			uniqueID : DeviceInfo.getUniqueID(),
			instanceID : DeviceInfo.getInstanceID(),
			deviceId : DeviceInfo.getDeviceId(),
			manufacturer : DeviceInfo.getManufacturer(),
			model : DeviceInfo.getModel(),
			brand : DeviceInfo.getBrand(),
			systemName : DeviceInfo.getSystemName(),
			systemVersion : DeviceInfo.getSystemVersion(),
			bundleId : DeviceInfo.getBundleId(),
			readableVersion : DeviceInfo.getReadableVersion(),
			deviceName : DeviceInfo.getDeviceName(),
			userAgent : DeviceInfo.getUserAgent(),
			deviceLocale : DeviceInfo.getDeviceLocale(),
			deviceCountry : DeviceInfo.getDeviceCountry(),
			timezone : DeviceInfo.getTimezone(),
			//isEmulator : DeviceInfo.isEmulator(),
			//isTablet : DeviceInfo.isTablet(),
			//buildNumber : DeviceInfo.getBuildNumber(), //last      number  in getReadableVersion
			//version : DeviceInfo.getVersion(),        // fyrst two numbers in getReadableVersion


		};
		if ( DeviceInfo.isEmulator() === true ) {
			info.isEmulator = 'true';
		}
		if ( DeviceInfo.isTablet() === true ) {
			info.isTablet = 'true';
		}
		const { title } = this.props;
		return (
			<View style={styles.aboutView}>
				<Text style={styles.aboutText}>
					{ title }
				</Text>
				<KeyValues keyStyle={{  fontStyle: 'italic' }} data={info}/>
				<Text style={styles.below}>
					below KeyValues
				</Text>
			</View>
		);
	}
}

const styles = {
	aboutView:{
		flex:1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	aboutText:{
		fontSize: 20,
		margin: 10,
		marginBottom: 30
	}, 
	below:{
		marginTop: 50
	}
};

export default About;
