import {JSX} from 'react';
import {View,Text,ScrollView, StyleSheet} from 'react-native';
import { router } from 'expo-router';

import Icon from '../../components/Icon';

import CircleButton from '../../components/CircleButton';

const handlePress=():void=>{
	router.push('/memo/edit')
}

const Detail=():JSX.Element=>{
		return (
				<View style={styles.container}>
					<View style={styles.memoHeader}>
						<Text style={styles.memoTitle}>買い物リスト</Text>
						<Text style={styles.memoDate}>2024年12月24日 10:00</Text>
					</View>
					<ScrollView style={styles.memoBody}>
						<Text style={styles.memoBodyText}>
							買い物リスト
							3日に肺炎のため、89歳で死去した巨人元監督、長嶋茂雄さんの葬儀・告別式が8日、東京・品川区の桐ヶ谷斎場「雲」で非公開で営まれた。斎場を出てきた参列者は、前を向いて「また明日から頑張ろう」と明るい表情になっていた。長嶋さんがそうさせた。
						</Text>
					</ScrollView>
					<CircleButton onPress={handlePress} style={{top:60,bottom:'auto'}}>
						<Icon name='pencil' size={40} color='#fff' />
					</CircleButton>
				</View>
		);
}

const styles=StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#fff'
	},
	memoHeader:{
		backgroundColor:"#467fd3",
		height:96,
		justifyContent:'center',
		paddingVertical:24,
		paddingHorizontal:19
	},
	memoTitle:{
		color:"#fff",
		fontSize:20,
		lineHeight:32,
		fontWeight:'bold',
	},
	memoDate:{
		color:"#fff",
		fontSize:12,
		lineHeight:16,
	},
	memoBody:{
		paddingHorizontal:32,
		paddingVertical:27,
	},
	memoBodyText:{
		fontSize:16,
		lineHeight:24,
		color:"#000"
	}
});

export default Detail;