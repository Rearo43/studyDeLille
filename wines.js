import React, {useState} from 'react';
import {Autocomplete, Text} from '@ui-kitten/components';
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  Alert,
  Modal,
  Dimensions,
} from 'react-native';
import {Card, ListItem, Button, Divider} from 'react-native-elements';

function Wines({x}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [moreInfo, setMoreInfo] = useState('ERROR!');
  return (
    <View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View>
            <View style={styles.modalView}>
              <Text>Wine Summary</Text>
              {/* If I want to switch to using button to go back move open Pressable tag down above Text Back "button" */}
              <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text>Columbia Valley AVA</Text>
                <Divider inset={true} insetType='middle'/>
                <Text>
                  Pairings: Seafood, grilled salmon, fried calamari, shellfish,
                  seared tuna
                </Text>
                <Text>
                  Tasting Notes: Watermelon, jolly rancher, passion fruit,
                  nectarine, orange blossom
                </Text>
                <Text>{moreInfo}</Text>
                <Text></Text>
                <Text style={styles.buttonClose}>Back</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>

      <View>
        {x.map(y => (
          <View style={styles.centeredView}>
            <Card key={y.name}>
              <Card.Title>{y.name}</Card.Title>
              <Card.Divider />
              <Text>{y.qs}</Text>
              <Pressable
                onPress={() => {
                    setMoreInfo(y.name);
                    setModalVisible(true);
                }}
                style={styles.try}>
                <Text style={[styles.buttonOpen, styles.boxShadow]}>
                  More Info
                </Text>
                {/* If I can get linear gradient to work this is the button I would like to use */}
                {/* <View style={[styles.iconParent, styles.shadowProp]}>
                <Text style={styles.icon}>+</Text>
              </View> */}
              </Pressable>
            </Card>
          </View>
        ))}
      </View>
    </View>
  );
}

function Cards({x}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      {x.map(y => (
        <View style={styles.centeredView}>
          <Card key={y.name}>
            <Card.Title>{y.name}</Card.Title>
            <Card.Divider />
            <Text>{y.qs}</Text>
            <Pressable onPress={() => setModalVisible(true)} style={styles.try}>
              <Text
                style={[styles.buttonOpen, styles.boxShadow]}>
                More Info
              </Text>
              {/* If I can get linear gradient to work this is the button I would like to use */}
              {/* <View style={[styles.iconParent, styles.shadowProp]}>
                <Text style={styles.icon}>+</Text>
              </View> */}
            </Pressable>
          </Card>
        </View>
      ))}
    </View>
  );
}

export const Final = () => {
  return (
    <ScrollView>
      <Wines x={data} />
    </ScrollView>
  );
};
const height = Dimensions.get('window').height * 0.5;
const styles = StyleSheet.create({
  iconParent: {
    marginLeft: '85%',
    width: 50,
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 50,
    // shadowColor: 'black',
    // shadowOffset: {width: 17, height: 17},
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  icon: {
    fontWeight: '200',
    fontSize: 50,
    lineHeight: 50,
    textAlign: 'center',
  },

  //   background: linear-gradient(145deg, #FFFFFF, #C4C6C7);
  // border-radius: 100%;
  // box-shadow: inset 17.42px 17.42px 24px #D6D8DA, inset -17.42px -17.42px 24px #FFFFFF;
  button: {
    borderRadius: 50,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    width: 100,
    backgroundColor: '#566f72',
    color: '#edf9f8',
  },
  centeredView: {
    marginTop: 22,
  },
  modalView: {
    marginTop: height,
    backgroundColor: 'green',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    height: height,
    // borderTopLeftRadius: 0,
  },
  button: {
    padding: 10,
  },
  buttonOpen: {
    backgroundColor: '#ffffff',
    textAlign: 'center',
    marginTop: 15,
  },
  boxShadow: {
    shadowOffset: {width: 5, height: 2},
    shadowOpacity: 0.5,
    width: '50%',
    marginLeft: '25%',
    height: 35,
    lineHeight: 35,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
});

const data = [
  {
    name: 'Rosé - 2020',
    qs: "Our 2021 Rosé was just released during our 30th anniversary weekend. With this Rosé you're going to get vibrant notes of Watermelon and nectarine. That light salmon pink color comes from our wine making team keeping the grape skins on for just about 20hrs.",
  },
  {
    name: 'Le Dessein - 2020',
    qs: "Le Dessein is going to be a Mourvèdre dominant SMG blend. This is actually the lightest red blend DeLille carries. With this wine you're going to get notes of cranberry and cherry. We sold a lot around Thanksgiving and Christmas so that gives you a good idea of what pairs well, light proteins like chicken and turkey.",
  },
  {
    name: 'Roussanne - 2021',
    qs: "So with this wine our director of wine making Jason Gorski wanted to create a wine to pair with mild to spicy Asian dishes. You're going to get notes of lemongrass with a nice blend of acidity and savory with the back ended notes",
  },
  {
    name: 'Doyenne - 2019',
    qs: "Does anyone know the nickname for our Doyenne? We actually call it our 'Wedding Wine'. Our winemaker was making a wine for his wedding and his now wife likes Syrah and he likes Cabs so the wine is 60 - 40 in favor of her. Definitely a great way to start off the marriage. You're going to get notes of plum with almost a smoked brisket type of aspect. With that being said pairs great with grilled meat and red or chili peppers.",
  },
  {
    name: 'D2 - 2019',
    qs: "Here we have our most popular wine, if you've heard the name DeLille you've most likely hear of D2. D2 quite literally stands for DeLille Two. It's also the name of a road that runs through Bordeaux. D2's going to give you dark chocolate coffee notes with spurts of cranberry and even a little nutmeg. We also source from 15 wineries in the Columbia Valley area. So the saying, \"French inspired Washington grown\" fits here and that is because CV and Bordeaux are of the same line of longitude.",
  },
  {
    name: 'Roofline Chardonnay - 2020',
    qs: "We've added another wine to our Roofline series. This is our first time producing a Chardonnay and it has really been a hit. This is going to be a little different than Chardonnays you may be used to especially from California but I think that is why we've had so much success.You're going to get very very light oaky notes that comes from the wine being partially aged in oak and then stainless steel. And then unlike other Chardonnays this wine is sharp crisp making grilled seafood and especially cheese a great pairing.",
  },
  {
    name: 'Harrison Hill - 2019',
    qs: "Harrison Hill is a crowd favorite here. Harrison Hill Vineyard is actually on Snipes Mountain the second smallest AVA in Washington in front of Red Mountain. They have some of the oldest Cab vines in Washington planted in '62. Having access to these particular grapes gives this wine elegance with such a smooth almost silky finish.",
  },
];

// ------------- .json layout
    // {
    //   "name": "",
    //   "qs": "",
    //   "ava": "",
    //   "varietal": "",
    //   "vineyard": "",
    //   "pairings": "",
    //   "rating": "",
    //   "tastingNotes": ""

    // },

