/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Image, ImageBackground, ScrollView, TouchableHighlight} from 'react-native';
import {s} from './src/styles/Style';
import ViewPager from '@react-native-community/viewpager';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
const stackOption = (props) => {
    return {
        headerStyle: {
            backgroundColor: '#6060db'
        },
        headerTitle: (
                <View style={s.header}>
                    <Text style={s.title}>My First App!</Text>
                </View>
                )
    }
}
// pages
import About from './pages/About';
function App(props) {
    return(
            <View style={s.wrapper}>
            
                <ScrollView>
                    <View>
                        <ViewPager showPageIndicator={true} style={s.viewPager} initialPage={0}>
                            <View key="1" style={s.viewPagerItem}>
                                <Image style={s.viewPagerImage} source={require('./src/images/banner-babastudio.webp')} />
                            </View>
                            <View key="2" style={s.viewPagerItem}>
                                <Image style={s.viewPagerImage} source={require('./src/images/banner-babastudio.webp')} />
                            </View>
                        </ViewPager>
                    </View>
                    <View style={[s.container, s.shadow]}>
                        <Text style={s.sectionTitle}>Popular Package</Text> 
                        <ScrollView horizontal={true}>
                            <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
                                             style={s.boxPaket}>
                                <Text style={s.boxTitle}>React.js</Text>
                            </ImageBackground>
                            <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
                                             style={s.boxPaket}>
                                <Text style={s.boxTitle}>Codeigniter4</Text>
                            </ImageBackground>
                            <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
                                             style={s.boxPaket}>
                                <Text style={s.boxTitle}>Laravel7</Text>
                            </ImageBackground>
                            <ImageBackground source={require('./src/images/paket-internet-marketing.webp')}
                                             style={s.boxPaket}>
                                <Text style={s.boxTitle}>React Native</Text>
                            </ImageBackground>
                        </ScrollView>
                    </View>
                    <View style={s.containerBlank}>
                        <Text style={s.sectionTitleCenter}>Framework Used</Text>
                        <View style={s.framework}>
                            <ImageBackground source={require('./src/images/ci4.png')}
                                             style={[s.frameworkImage, s.shadow]}>
                                <Text style={s.frameworkText}>Codeigniter 4</Text>
                            </ImageBackground>
                            <ImageBackground source={require('./src/images/laravel.png')}
                                             style={[s.frameworkImage, s.shadow]}>
                                <Text style={s.frameworkText}>Laravel 7</Text>
                            </ImageBackground>
                            <ImageBackground source={require('./src/images/react.png')}
                                             style={[s.frameworkImage, s.shadow]}>
                                <Text style={s.frameworkText}>React.js</Text>
                            </ImageBackground>
                            <ImageBackground source={require('./src/images/react.png')}
                                             style={[s.frameworkImage, s.shadow]}>
                                <Text style={s.frameworkText}>React Native</Text>
                            </ImageBackground>
                            <ImageBackground source={require('./src/images/gatsby.png')}
                                             style={[s.frameworkImage, s.shadow]}>
                                <Text style={s.frameworkText}>Gatsby.js</Text>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={[s.container, s.shadow]}>
                        <TouchableHighlight style={{backgroundColor: 'blue', padding: 10, justifyContent: 'center'}}
                                            onPress={() => props.navigation.navigate('About')}>
                            <Text>About Author</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={s.footer}>
                        <Text style={s.copyright}>&copy; 2020 Andhy Taslin</Text>
                    </View>
                </ScrollView>
            </View>
                );
    }
    ;
    const appNavigator = createStackNavigator({
        Home: {
            screen: App,
            navigationOptions:stackOption
        },
        About: {
            screen: About
        }
    });
    export default createAppContainer(appNavigator);
