import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import { Link } from 'expo-router';

import Icon from './Icon';

const MemoListItem = () => {
	return (
		<Link href='/memo/detail' asChild>
			<TouchableOpacity style={styles.memoListItem}>
				<View>
					<Text style={styles.memoListItemTitle}>買い物リスト</Text>
					<Text style={styles.memoListItemDate}>2023年12月24日 10:00</Text>
				</View>
				<TouchableOpacity>
					<Icon name="delete" size={32} color="#b0b0b0" />
				</TouchableOpacity>
			</TouchableOpacity>
		</Link>
	);
};

const styles=StyleSheet.create({
	memoListItem:{
		backgroundColor:'#fff',
		flexDirection:'row',
		justifyContent:'space-between',
		paddingVertical:16,
		paddingHorizontal:19,
		alignItems:'center',
		borderBottomWidth:1,
		borderBottomColor:'rgba(0, 0, 0, 0.15)',
	},
	memoListItemTitle:{
		fontSize:16,
		lineHeight:32
	},
	memoListItemDate:{
		fontSize:12,
		lineHeight:16,
		color:'#848484'
	},
});
export default MemoListItem;