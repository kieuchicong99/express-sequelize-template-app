
import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from "@react-native-material/core";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Stack, Avatar } from "@react-native-material/core";
function ProfileScreen() {
    return (
        <View>
            <View style={{alignItems:'center', paddingBottom : 50}}>
                <View >
                    <Avatar size={72} image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
                </View>
                <View>
                    <Text style={{fontSize: 30}}>Kieu chi cong </Text>
                </View>
            </View>
            <View>
            <ListItem
                title="Edit Profile"
                leading={<Icon name="account-box-multiple" size={24} />}
                trailing={props => <Icon name="chevron-right" {...props} />}
            />
            <ListItem
                title="My Stat"
                leading={<Icon name="apple-safari" size={24} />}
                trailing={props => <Icon name="chevron-right" {...props} />}
            />
            <ListItem
                title="Setting"
                leading={<Icon name="cookie-settings-outline" size={24} />}
                trailing={props => <Icon name="chevron-right" {...props} />}
            />
            <ListItem
                title="Invite a friend"
                leading={<Icon name="inbox" size={24} />}
                trailing={props => <Icon name="chevron-right" {...props} />}
            />
            <ListItem
                title="Help"
                leading={<Icon name="inbox" size={24} />}
                trailing={props => <Icon name="chevron-right" {...props} />}
            />
            </View>

           
        </View>
    )
}

export default ProfileScreen