import React from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {observer} from 'mobx-react-lite';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {User} from 'revolt.js';

import {app} from '../../Generic';
import {currentTheme, styles} from '../../Theme';
import {ContextButton, CopyIDButton, Text} from '../common/atoms';

export const UserMenuSheet = observer(
  ({state, user}: {state: any; user: User}) => {
    return (
      <>
        <ScrollView style={{flex: 1, padding: 3}}>
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}
            onPress={() => {
              state(false);
            }}>
            <MaterialCommunityIcon
              name="close-circle"
              size={20}
              color={currentTheme.foregroundSecondary}
            />
            <Text
              style={{
                color: currentTheme.foregroundSecondary,
                fontSize: 16,
                marginLeft: 5,
              }}>
              Close
            </Text>
          </Pressable>
          {app.settings.get('ui.showDeveloperFeatures') ? (
            <CopyIDButton id={user._id} />
          ) : null}
          {user.relationship !== 'User' ? (
            <ContextButton
              onPress={() => {
                app.openReportMenu(user, 'User');
                state(false);
              }}>
              <View style={styles.iconContainer}>
                <MaterialIcon
                  name="flag"
                  size={20}
                  color={currentTheme.error}
                />
              </View>
              <Text colour={currentTheme.error}>Report User</Text>
            </ContextButton>
          ) : null}
          <View style={{marginTop: 7}} />
        </ScrollView>
      </>
    );
  },
);
