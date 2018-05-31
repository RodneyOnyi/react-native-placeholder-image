/**
@flow
 */
import React from 'react';
import { View } from 'react-native';
import ImageWithPlaceholder from '../../src';
import placeholder from './images/food-placeholder.png';

const FoodExample = () => {
    return (
        <View style={ { flex: 1, marginLeft: 5, marginTop: 50 } } >
            <View style={ { flex: 1 } }>
                <ImageWithPlaceholder
                    placeholder={ placeholder }
                    containerStyle={ {} }
                    imageStyle={ {
                        width: 400,
                        height: 200,
                    } }
                    isAnimatedReveal
                    imageURL={ 'https://images.unsplash.com/photo-1504185945330-7a3ca1380535?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f2d35c4ea30a81e428e66c653748f91&auto=format&fit=crop&w=500&q=60' }
                />
            </View>

            <View style={ { flex: 1 } }>
                <ImageWithPlaceholder
                    placeholder={ placeholder }
                    containerStyle={ {} }
                    imageStyle={ {
                        width: 400,
                        height: 200,
                    } }
                    isAnimatedReveal={ false }
                    imageURL={ 'https://images.unsplash.com/photo-1504185945330-7a3ca1380535?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f2d35c4ea30a81e428e66c653748f91&auto=format&fit=crop&w=500&q=60' }
                />
            </View>
        </View>
    );
};

export default FoodExample;
