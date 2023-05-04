import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react-lite';

import {Message} from 'revolt.js';

import {Avatar, Username} from '../Profile';
import {currentTheme} from '../Theme';
import {Text} from './common/atoms';
import {MarkdownView} from './common/MarkdownView';
import {parseRevoltNodes} from '../lib/utils';

export const Notification = observer(
  ({message, setState}: {message: Message | null; setState: any}) => {
    if (message) {
      return (
        <TouchableOpacity onPress={() => setState()}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: 4,
                minHeight: 40,
                backgroundColor: currentTheme.background,
                padding: 8,
              }}>
              <Avatar user={message.author} />
              <View style={{marginHorizontal: 8}}>
                <View style={{flexDirection: 'row'}}>
                  <Username
                    user={message.author}
                    server={message.channel?.server}
                  />
                  <Text style={{fontWeight: 'bold'}}>
                    {' '}
                    ({message.channel?.name ?? message.channel?._id})
                  </Text>
                </View>
                {message.content ? (
                  <MarkdownView>
                    {parseRevoltNodes(message.content)}
                  </MarkdownView>
                ) : (
                  <Text colour={currentTheme.foregroundSecondary}>
                    Tap to view message
                  </Text>
                )}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
    return <></>;
  },
);
