import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground} from 'react-native';
import {ProfileCircle, Location, AddCircle, Notification} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';
import { clorot, getuk, klepon, kue_lumpur, putu_mayang, putu } from '../../assets/images';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ProfileCircle color={colors.white()} variant="Linear" size={40} />
        <Text style={styles.title}>JAPAS</Text>
        <Notification color={colors.white()} variant="Linear" size={30} />
      </View>
      <View style={styles.alamat}>
        <Location color={colors.blue()} variant="Linear" size={20} />
        <Text style={styles.alamat}>Malang, Nov 15, 2023</Text>
      </View>
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category1.item, marginBottom: 20}}>
            <Text style={category1.title}>Menu</Text>
          </View>
          <View style={{...category1.item, marginBottom: 20}}>
            <Text style={category1.title}>Gerai</Text>
          </View>
          <View style={{...category1.item, marginRight: 20, marginBottom: 20}}>
            <Text style={category1.title}>Promo</Text>
          </View>
        </ScrollView>
      </View>
      <ScrollView>
      <Dashboard />
      </ScrollView>
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{...category.item, marginLeft: 20, marginBottom: 20}}>
            <Text style={{...category.title, color: colors.blue()}}>
              Beranda
            </Text>
          </View>
          <View style={styles.container}> 
          </View>
          <View style={{...category.item, marginBottom: 20}}>
            <Text style={category.title}>Keranjang</Text>
          </View>
          <View style={{...category.item, marginBottom: 20}}>
            <Text style={category.title}>Riwayat</Text>
          </View>
          <View style={{...category.item, marginBottom: 20}}>
            <Text style={category.title}>Dompet</Text>
          </View>
          <View style={{...category.item, marginBottom: 20}}>
            <Text style={category.title}>Kotak Masuk</Text>
          </View>
          <View style={{...category.item, marginRight: 20, marginBottom: 20}}>
            <Text style={category.title}>Akun</Text>
          </View>
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: 'column',
    backgroundColor: colors.white(0.7),
    paddingTop:10,
  },
  header: {
    fontSize: 25,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:70,
    elevation: 8,
    paddingTop:10,
    backgroundColor: colors.grey(),
    paddingBottom:10
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  alamat: {
    fontSize: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    color: colors.grey(),
    paddingTop:10,
    paddingBottom:1
  },
  listCategory: {
    paddingVertical: 40,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 200,
    alignItems: 'center',
    backgroundColor: colors.grey(),
    marginHorizontal:5
  },
  title: {
    fontFamily: fontType['Pjs-ExtraBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.white(0.7),
  },
})

const category1 = StyleSheet.create({
  item: {
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 200,
    alignItems: 'center',
    backgroundColor: colors.grey(),
    marginHorizontal:5
  },
  title: {
    fontFamily: fontType['Pjs-ExtraBold'],
    fontSize: 15,
    lineHeight: 18,
    color: colors.white(0.7),
    alignItems: 'center',
  },
})

const Dashboard = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 15}}>
          <View style={{...item.cardItem, marginLeft: 24}}>
            <ImageBackground
              style={item.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 10}}
              source={{
                uri: 'https://static.uc.ac.id/fikom/2020/12/Pic-1.jpeg',
              }}>
              <View style={item.cardContent}>
                <View style={item.cardInfo}>
                  <Text style={item.cardTitle}>
                    Klepon
                  </Text>
                </View>
                <View>
                  <View style={item.cardIcon}>
                  <AddCircle color={colors.grey()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={item.cardItem}>
            <ImageBackground
              style={item.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://static.promediateknologi.id/crop/213x309:762x674/750x500/webp/photo/2023/01/10/3898363264.png',
              }}>
              <View style={item.cardContent}>
                <View style={item.cardInfo}>
                  <Text style={item.cardTitle}>
                    Putu Mayang
                  </Text>
                </View>
                <View>
                  <View style={item.cardIcon}>
                    <AddCircle color={colors.grey()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={item.cardItem}>
            <ImageBackground
              style={item.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://cdn0-production-images-kly.akamaized.net/1xgLUhBpJDG0NYoHK9qcHowEjhg=/0x1869:3399x3785/680x383/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3553153/original/046489900_1630055222-shutterstock_1752501980.jpg',
              }}>
              <View style={item.cardContent}>
                <View style={item.cardInfo}>
                  <Text style={item.cardTitle}>
                    Kue Lumpur
                  </Text>
                </View>
                <View>
                  <View style={item.cardIcon}>
                  <AddCircle color={colors.grey()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={item.cardItem}>
            <ImageBackground
              style={item.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://cdn.rri.co.id/berita/90/images/1676791039080-IMG_20230219_141115/1676791039080-IMG_20230219_141115.jpg',
              }}>
              <View style={item.cardContent}>
                <View style={item.cardInfo}>
                  <Text style={item.cardTitle}>
                    Kue Putu
                  </Text>
                </View>
                <View>
                  <View style={item.cardIcon}>
                  <AddCircle color={colors.grey()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{...item.cardItem, marginRight: 24}}>
            <ImageBackground
              style={item.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://cdn0-production-images-kly.akamaized.net/ApDzprdPcQ9kGMNNpFOy_Oi-e-s=/1x85:1000x648/680x383/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3910231/original/096750300_1642729627-shutterstock_2043564920.jpg',
              }}>
              <View style={item.cardContent}>
                <View style={item.cardInfo}>
                  <Text style={item.cardTitle}>
                    Clorot
                  </Text>
                </View>
                <View>
                  <View style={item.cardIcon}>
                  <AddCircle color={colors.grey()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{...item.cardItem, marginRight: 24}}>
            <ImageBackground
              style={item.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://cdn.idntimes.com/content-images/community/2020/11/fromandroid-a3a5b11f20bee41a2706a405f86c0c38_600x400.jpg',
              }}>
              <View style={item.cardContent}>
                <View style={item.cardInfo}>
                  <Text style={item.cardTitle}>
                    Getuk
                  </Text>
                </View>
                <View>
                  <View style={item.cardIcon}>
                  <AddCircle color={colors.grey()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
       
      </View>
    </ScrollView>
  );
};

const item = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: '100%',
    height: 350,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 290,
    maxWidth: '60%',
  },
  cardTitle: {
      fontSize: 15,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
      elevation: 8,
      paddingTop:10,
      backgroundColor: colors.grey(),
      paddingBottom:10,
      borderRadius: 10,
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
