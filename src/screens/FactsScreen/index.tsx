import React from 'react';
import {ActivityIndicator, FlatList, Pressable, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {getRandomFacts} from '../../services';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';

const FactsScreen = () => {
  const insents = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  const screenStyle = styles(insents.top, insents.bottom);
  const {data, isLoading, isRefetching, refetch} = useQuery('facts', () =>
    getRandomFacts(),
  );

  const onNavigateToInfo = () => navigation.navigate('Details');

  return (
    <View style={screenStyle.root}>
      <LinearGradient
        colors={['#155799', '#159957']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={screenStyle.header}>
        <Text style={screenStyle.title}>Daily cat facts! 🐱</Text>
        <Pressable style={screenStyle.btnWrapper} onPress={onNavigateToInfo}>
          <Text style={screenStyle.btnText}>cat-facts</Text>
        </Pressable>
      </LinearGradient>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <LinearGradient
            colors={['#155799', '#159957']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={screenStyle.itemOuter}>
            <View style={screenStyle.itemInner}>
              <Text>{item.text}</Text>
            </View>
          </LinearGradient>
        )}
        keyExtractor={item => item._id}
        contentContainerStyle={screenStyle.flatList}
        showsVerticalScrollIndicator={false}
        refreshing={isRefetching}
        onRefresh={refetch}
      />
      {isLoading && (
        <ActivityIndicator size={'large'} style={screenStyle.loader} />
      )}
    </View>
  );
};

export default FactsScreen;
