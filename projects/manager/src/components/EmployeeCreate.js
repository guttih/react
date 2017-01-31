import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
	render () {
		return (
			<Card>
				<CardSection>
					<Input
						label="Name"
						placeholder="Jane"
						value={this.props.name}
						onChangeText={value => this.props.employeeUpdate({ prop:'name', value })}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Phone"
						placeholder="555-55555"
						value={this.props.phone}
						onChangeText={value => this.props.employeeUpdate({ prop:'phone', value })}
					/>
				</CardSection>

				<CardSection style={{ flexDirection: 'column', height:80 }}>
					<Text style={styles.pickerLabel}>Shift</Text>
					<Picker style={styles.picker}
						selectedValue={this.props.shift}
						onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
					>
						<Picker.Item label="Monday"    value="Monday" />
						<Picker.Item label="Tuesday"   value="Tuesday" />
						<Picker.Item label="Wednesday" value="Wednesday" />
						<Picker.Item label="Thursday"  value="Thursday" />
						<Picker.Item label="Friday"    value="Friday" />
						<Picker.Item label="Saturday"  value="Saturday" />
						<Picker.Item label="Sunday"    value="Sunday" />
					</Picker>
				</CardSection>

				<CardSection>
					<Button>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	pickerLabel:{
		fontSize: 18,
		paddingLeft: 20,
	},
	picker: {
		flex: 1,
		marginLeft: 10,
		
	}

};

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
