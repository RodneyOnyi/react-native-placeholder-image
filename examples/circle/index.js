/**
@flow
 */
import React from 'react';
import { View } from 'react-native';
import ImageWithPlaceholder from '../../src';
import placeholder from './images/profile-placeholder.png';

const ProfileExample = () => {
    return (
        <View style={ { flex: 1, marginLeft: 40 } } >
            <View style={ { flex: 1 } } >
                <ImageWithPlaceholder
                    placeholder={ placeholder }
                    containerStyle={ {} }
                    imageStyle={ {
                        width: 180,
                        height: 180,
                        borderRadius: 90,
                    } }
                    isAnimatedReveal
                    imageURL={ 'https://images.unsplash.com/uploads/14128324071271c853818/3765c625?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb9fdc80e4e0172a831d11c76aa1782a&auto=format&fit=crop&w=500&q=60' }
                />
            </View>

            <View style={ { flex: 1 } } >
                <ImageWithPlaceholder
                    placeholder={ placeholder }
                    containerStyle={ {} }
                    imageStyle={ {
                        width: 180,
                        height: 180,
                        borderRadius: 90,
                    } }
                    isAnimatedReveal={ false }
                    imageURL={ 'https://images.unsplash.com/uploads/14128324071271c853818/3765c625?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb9fdc80e4e0172a831d11c76aa1782a&auto=format&fit=crop&w=500&q=60' }
                />
            </View>
        </View>
    );
};

export default ProfileExample;
