/* 
 * *************************************************
 * Copyright (C) 2020 Earworks.                    *
 * Codeigniter Project Template Modification       *
 * Please contact our email for more information : *
 * contact@earworks.co.id                          *
 * *************************************************
 */

import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {s} from '../src/styles/Style';
function About(props) {
    return(
            <View style={s.wrapper}>
                <ScrollView>
                    <View style={[s.container, s.shadow]}>
                        <Text style={s.sectionTitleCenter}>About Author</Text>
                        <Text>
                        This is my first project for mobile application (Android) with React Native.
                        Sorry if this Application is nothing inside. Hehe.
                        </Text>
            
                    </View>
                </ScrollView>
            </View>
            );
}
export default About;