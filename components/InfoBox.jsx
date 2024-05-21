import { View, Text } from 'react-native'
import React from 'react'

const InfoBox = ({ title, subtitle, containerStyles, textStyles }) => {
    return (
        <View className={containerStyles}>
            <Text className={`text-white text-center font-psemibold ${textStyles}`}>{title}</Text>
            <Text className={`text-center text-gray-100 text-sm font-pregular ${textStyles}`}>{subtitle}</Text>
        </View>
    )
}

export default InfoBox