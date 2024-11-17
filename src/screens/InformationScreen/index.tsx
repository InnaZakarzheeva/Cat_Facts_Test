import React from 'react';
import {Linking, Pressable, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const DONATE_URL =
  'https://www.paypal.com/donate/?cmd=_donations&business=NNVDER52DBWTY&currency_code=USD&source=url';
const OFFICIAL_WEBSITE = 'https://cat-fact.herokuapp.com/#/';
const DOCUMENTATION = 'https://alexwohlbruck.github.io/cat-facts/docs/';
const GIT_HUB = 'https://github.com/alexwohlbruck/cat-facts';

const InformationScreen = () => {
  const insents = useSafeAreaInsets();
  const navigation = useNavigation()
  const screenStyle = styles(insents.top, insents.bottom);

  const goBack = () => navigation.goBack();

  const onOpenURL = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={screenStyle.root}>
      <LinearGradient
        colors={['#155799', '#159957']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={screenStyle.header}>
        <Text style={screenStyle.title}>cat-facts</Text>
        <Text style={screenStyle.subTitle}>Daily cat facts! 🐱</Text>
        <Pressable onPress={goBack} style={screenStyle.backBtn}>
          <Text style={screenStyle.backText}>{'<- Back'}</Text>
        </Pressable>
      </LinearGradient>
      <ScrollView
        contentContainerStyle={screenStyle.contentWrapper}
        showsVerticalScrollIndicator={false}>
        <Text style={screenStyle.titleSection}>Features</Text>
        <Text>
          • Add and view your personal list of fact recipients
          {'\n'}• Send a cat fact via text message every day
          {'\n'}• Countdown clock until next fact is sent
          {'\n'}• Catbot that auto-replies when recipients text back
          {'\n'}• View the catversation between Catbot and your recipients
          {'\n'}• Submit your own interesting facts
          {'\n'}• Quick copy-and-paste-able cat facts with the “Get Fact” button
          {'\n'}• Add recipients by talking to the Catbot!
          {'\n'}• Import all of your Google contacts at once
          {'\n'}• Admin console panel for managing the app
          {'\n'}• Twitter bot
          {'\n'}• Developer API
        </Text>
        <Text>
          • Add and view your personal list of fact recipients
          {'\n'}• Send a cat fact via text message every day
          {'\n'}• Countdown clock until next fact is sent
          {'\n'}• Catbot that auto-replies when recipients text back
          {'\n'}• View the catversation between Catbot and your recipients
          {'\n'}• Submit your own interesting facts
          {'\n'}• Quick copy-and-paste-able cat facts with the “Get Fact” button
          {'\n'}• Add recipients by talking to the Catbot!
          {'\n'}• Import all of your Google contacts at once
          {'\n'}• Admin console panel for managing the app
          {'\n'}• Twitter bot
          {'\n'}• Developer API
        </Text>
        <Text style={screenStyle.titleSection}>Support Cat Facts</Text>
        <Text>
          Cat Facts is ad free and available to use without cost. Help me keep
          it running by{' '}
          <Text onPress={() => onOpenURL(DONATE_URL)} style={screenStyle.link}>
            donating here.
          </Text>
          {'\n:)'}
        </Text>
        <Text style={screenStyle.titleSection}>Official website</Text>
        <Text>
          <Text
            onPress={() => onOpenURL(OFFICIAL_WEBSITE)}
            style={screenStyle.link}>
            Visit
          </Text>{' '}
          the site and start messing with your friends!
        </Text>
        <Text style={screenStyle.titleSection}>API Documentation</Text>
        <Text onPress={() => onOpenURL(DOCUMENTATION)} style={screenStyle.link}>
          Start developing!{'\n'}
        </Text>
        <Text onPress={() => onOpenURL(GIT_HUB)} style={screenStyle.link}>
          GitHub
        </Text>
      </ScrollView>
    </View>
  );
};

export default InformationScreen;
