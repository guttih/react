import React, { Component } from 'react';
import { ListView, Text, View, Dimensions } from 'react-native';

class ListObjects extends Component {
  // Initialize the hardcoded data
	constructor (props) {
		super(props);
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			dataSource: ds.cloneWithRows(this.props.data)
		};
	}
	render () {
		return (
		<View style={styles.view}>
			<ListView
			dataSource={this.state.dataSource}
			renderRow={
				(rowData) =>
					<View style={styles.row.item}>
						<Text style={styles.row.key}>{rowData.key}</Text>
						<Text style={styles.row.value}>{rowData.value}</Text>
					</View>
			}
			/>
		</View>
		);
	}
}

const styles = {
	view:{ 
		flex: 1,
		paddingTop: 10,
		backgroundColor:'#f9f9f9'
	},
	row:{
		item: {
			flex: 1,
			width: (Dimensions.get('window').width * 0.9),
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			marginBottom:10,
			borderBottomWidth:0.4,
			borderBottomColor:'#e6e6e6'
		},
		key:{
			flex:0.35
		},
		value:{
			flex:0.65
		}
	}
};

export default ListObjects;
