import axios from 'axios';
import React from 'react';
import { SafeAreaView, ActivityIndicator, Alert, FlatList, Text, RefreshControl, TouchableOpacity } from 'react-native';
import { Post } from '../components/post';


export const HomeScreen = ( {navigation} ) => {
  
  const[isLoading, setIsLoading] = React.useState(true);
  const[items, setItems] = React.useState();


  const fetchPosts = () => {
    setIsLoading(true);
    axios
    .get('https://664d905eede9a2b55653eae4.mockapi.io/Articles_0wn')
    .then(({ data }) => {
  setItems(data);
  })
    .catch(err => {
      console.log(err);
      Alert.alert('Помилка', 'Не вдалось отримати дані')
  }).finally(()=> {
    setIsLoading(false);
  });
};
  
React.useEffect(fetchPosts, []);

  if (isLoading) {
    return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
     <ActivityIndicator size="large" />
    <Text style={{marginTop: 15}}>Завантаження...</Text>

    </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <FlatList 
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
        data={items}
        renderItem={({ item }) => (
        <TouchableOpacity onPress={()=> navigation.navigate('FullPost', {id: item.id, title: item.title })}>
          <Post title={item.title} ImageUrl={item.ImageUrl} createdAt={item.createdAt}/>
        </TouchableOpacity>
      )}
      />
    </SafeAreaView>
  );
}