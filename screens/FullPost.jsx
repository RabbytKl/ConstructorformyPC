import React from "react";
import { View, ScrollView} from "react-native";
import styled from "styled-components/native";
import axios from 'axios';
import { Loading } from "../components/Loading";


const PostImage = styled.Image`
    border-radius: 10px;
    width: 100%;
    height: 240px;
    margin-bottom: 20px;
`;

const PostImage1 = styled.Image`
    border-radius: 10px;
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    margin-top: 10px;
`;

const PostText = styled.Text`
    font-size: 18px;
    line-height: 24px;

`;

const PostText1 = styled.Text`
    font-size: 18px;
    line-height: 24px;
    margin-top: 10px;

`;
const PostText2 = styled.Text`
    font-size: 18px;
    line-height: 24px;
    margin-top: 10px;

`;

const PostText3 = styled.Text`
    font-size: 18px;
    line-height: 24px;
    margin-top: 10px;

`;


const PostText4 = styled.Text`
    font-size: 18px;
    line-height: 24px;
    margin-top: 10px;

`;

const PostText5 = styled.Text`
    font-size: 18px;
    line-height: 24px;
    margin-top: 10px;

`;
export const FullPostScreen = ({ route, navigation }) => {
    const[isLoading, setIsLoading] = React.useState(true);
    const[data, setData] = React.useState();
    const { id, title } = route.params;
    


    React.useEffect(() => {
        navigation.setOptions({
            title,
        });

        axios
        .get('https://664d905eede9a2b55653eae4.mockapi.io/Articles_0wn/' + id)
        .then(({ data }) => {
      setData(data);
      })
        .catch(err => {
          console.log(err);
          Alert.alert('Помилка', 'Не вдалось отримати дані про статтю')
      }).finally(()=> {
        setIsLoading(false);
      });    

    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Loading />
            </View>
        );
      }

    return (

        <View style={{padding: 17}}>
            <ScrollView>
            <PostImage source= {{ uri: data.postImage}}/>
            <PostText>{data.text}</PostText>
            <PostText1>{data.text1}</PostText1>
            <PostText2>{data.text2}</PostText2>
            <PostText3>{data.text3}</PostText3>
            <PostText4>{data.text4}</PostText4>
            <PostImage1 source= {{ uri: data.ImageUrl2}}/>
            <PostText5>{data.conclusion}</PostText5>
            </ScrollView>
        </View>

    );
};