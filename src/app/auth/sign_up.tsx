import {JSX} from 'react'
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
import { Link,router } from 'expo-router'

import Button from '../../components/Button'

const handlePress=():void=>{
	// LOGIN
	router.push('/memo/list');
}

const SignUp=():JSX.Element=>{
	return (
		<View style={styles.container}>
			<View style={styles.inner}>
				<Text style={styles.title}>Sign Up</Text>
				<TextInput style={styles.input} value='Email Address' />
				<TextInput style={styles.input} value='Password' />
				<Button label='Submit' onPress={handlePress} />
				<View style={styles.footer}>
					<Text style={styles.footerText}>Already registerd?</Text>
					<Link href='/auth/log_in' asChild>
						<TouchableOpacity>
							<Text style={styles.footerLink}>Log In.</Text>
						</TouchableOpacity>
					</Link>
				</View>
			</View>
		</View>
	)
}

const styles=StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:"#f0f4f8"
	},
	inner:{
		paddingVertical:24,
		paddingHorizontal:27
	},
	title:{
		fontSize:24,
		lineHeight:32,
		fontWeight:'bold',
		marginBottom:24
	},
	input:{
		borderWidth:1,
		borderColor:"#ddd",
		backgroundColor:"#fff",
		height:48,
		padding:8,
		fontSize:16,
		marginBottom:16
	},
	footer:{
		flexDirection:'row'
	},
	footerText:{
		fontSize:14,
		lineHeight:24,
		marginRight:8,
		color:"#000"
	},
	footerLink:{
		fontSize:14,
		lineHeight:24,
		color:"#467fd3"
	}
})

export default SignUp;