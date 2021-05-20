import * as React from 'react';
import { Text, View, SafeAreaView, ImageBackground } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class Carrusel extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    src: 'https://i.imgur.com/ANeRHjn.jpg',
                    header: 'Ushuaia',
                    id: 1
                },
                {
                    src: 'https://i.imgur.com/9YcioRD.jpg',
                    header: 'London',
                    id: 3
                },
                {
                    src: 'https://i.imgur.com/4ZmTscD.jpg',
                    header: 'New York',
                    id: 5
                  },
                  {
                    src: 'https://i.imgur.com/7CqFq5Z.jpg',
                    header: 'Sydney',
                    id: 6
                  },
                  {
                    src: 'https://i.imgur.com/7CApOUG.jpg',
                    header: 'Shanghai',
                    id: 8
                  },
                  {
                    src: 'https://i.imgur.com/sBrjv2i.jpg',
                    header: 'Seattle',
                    id: 7
                  }
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <ImageBackground source={{uri:(item.src)}} style={{
                borderRadius: 5,
                height: 350,
                marginLeft: 15,
            }}>
                <Text style={{ fontSize: 30, backgroundColor:'rgba(0, 0, 0, 0.2)', color: 'white', textAlign:'center'}}>{item.header}</Text>
                <Text>{item.text}</Text>
            </ImageBackground>

        )
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, paddingTop: 50, paddingBottom:50 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={300}
                        itemWidth={350}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>
            </SafeAreaView>
        );
    }
}