/**
@flow
 */
import React from 'react';
import { View } from 'react-native';
import ImageWithPlaceholder from '../../src';
import placeholder from './images/camera-placeholder.png';

const MovieExample = () => {
    return (
        <View style={ { flex: 1, marginLeft: 50, marginTop: 20 } } >
            <View style={ { flex: 1 } } >
                <ImageWithPlaceholder
                    placeholder={ placeholder }
                    containerStyle={ {} }
                    imageStyle={ {
                        width: 150,
                        height: 200,
                        borderRadius: 30,
                    } }
                    isAnimatedReveal
                    imageURL={ 'https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' }
                />
            </View>

            <View style={ { flex: 1 } } >
                <ImageWithPlaceholder
                    placeholder={ placeholder }
                    containerStyle={ {} }
                    imageStyle={ {
                        width: 150,
                        height: 200,
                        borderRadius: 30,
                    } }
                    isAnimatedReveal={ false }
                    imageURL={ 'https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' }
                />
            </View>
        </View>
    );
};

export default MovieExample;
