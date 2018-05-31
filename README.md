# react-native-placeholder-image

This component can be used to show a default placeholder image while loading images from network in React Native. It serves as a way to display default images on both Android and iOS similar to how React Native uses defaultSource for iOS.

<div style="display:flex;flex-direction:row">
  <img width="250px" height="450px" src="https://raw.githubusercontent.com/nkshah2/react-native-placeholder-image/master/docs/food.gif" alt="Example 1" />
  <img width="250px" height="450px" src="https://raw.githubusercontent.com/nkshah2/react-native-placeholder-image/master/docs/movies.gif" alt="Example 2" />
  <img width="250px" height="450px" src="https://raw.githubusercontent.com/nkshah2/react-native-placeholder-image/master/docs/profile.gif" alt="Example 3" />
</div>

In the above examples the images at the top of the preview are all animated and reveal on load with a fading effect, the ones at the bottom are not animated and simply replace the placeholder with the loaded image.

## Installation

Run the following command

`npm i react-native-animated-placeholder-image`

## Props

#### Required

###### imageURL

The url to be used to load the image.

###### placeholder

This needs to be a local image object ( do not pass the path to the image, import it and pass the reference ). This will be                 used as the placeholder for the netowrk image.

###### imageStyle

This will modify the main image ( and placeholder if a placeholder style is not passed ). Use this to pass a fixed width and height which is required for network images.

###### isAnimatedReveal

Boolean flag used to decide whether or not the fading animation is to be used when the image loads.

### Optional

###### containerStyle
You can additionally provide a separate style object for the container in case you need to provide separate styling. By default the container style is set to an empty object with flex: 1 appended to it. Note that any style you pass, flex: 1 will be appended to it.

###### isBackground
If you need to use this image component as an ImageBackground tag you have to set this prop to true otherwise any children passed will be ignored. Note this has not been fully tested so it might not work as intended, please use the issues section of the repository to report any fixes if needed.

###### resizeMode
By default the resizeMode for android is set to 'cover', if you need to change this use this prop to pass a valid resizeMode value. Refer to the react native documentation for a list of valid values and expected behaviours.

###### placeholderStyle
An optional style prop to be used in case you want to style your placeholder separately. By default the placeholder uses the same object passed for the imageStyle.

###### revealDuration
Value in milliseconds that is used for the fading animation. If isAnimatedReveal is set to false this value is ignored. If a value less than 300 milliseconds is provided, it will be replaced with 300. By default the reveal duration is set to 1000.

## Example

For example the two images displayed in the preview with the movie poster above is rendered using the follwoing code.

```javascript
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

```

This example along with the other two can be found in the examples folder in the repository.
