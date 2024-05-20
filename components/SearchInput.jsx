import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'


const SearchInput = ({ value, handleChangeText, placeholder, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (

        <View className='w-full h-16 px-4 bg-black-100 border-2 rounded-2xl
             border-black-200 focus:border-secondary items-center flex-row space-x-4'>
            <TextInput
                className='flex-1 text-white font-pregular text-base mt-0.5'
                value={value}
                placeholder='Search for a video topic'
                placeholderTextColor='#7b7b8b'
                onChangeText={handleChangeText}
            />
            <TouchableOpacity>
                <Image 
                source={icons.search}
                className='w-5 h-5'
                resizeMode='contain'
                />
            </TouchableOpacity>
        </View>

    )
}

export default SearchInput