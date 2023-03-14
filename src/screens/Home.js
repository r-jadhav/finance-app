import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import colors from '../constant/colors'
import Button from '../components/Button'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/CarouselCardItem'
import CarouselBankLogo from '../components/CarouselBankLogo'
import ION from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import i18n from '../i18n'
import FormModal from '../components/FormsModal'

const Home = ({navigation}) => {

  const [modalLogin, setModalLogin] = React.useState(false);
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)
  const data = [
    {
      title: "Aenean leo",
      body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl:require('../assets/img/1.png')
    },
    {
      title: "In turpis",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: require('../assets/img/2.png')
    },
    {
      title: "Lorem Ipsum",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl: require('../assets/img/3.png')
    },
  ];
  const LOGO = [
    { imgUrl:require('../assets/img/bajaj.jpg') },
    { imgUrl: require('../assets/img/sbi.png') },
    { imgUrl: require('../assets/img/ICICI.jpg') },
    { imgUrl: require('../assets/img/capri.jpg') },
    { imgUrl: require('../assets/img/axis.jpg') },
  ];

  return (

    <View style={{flex:1,backgroundColor:'#fff',}}>

          <LinearGradient
              colors={['#6a32a1','#ce49bfad'] }
              start={{x: 0.3, y: 0.25}} end={{x: 0.5, y: 1.0}}
              style={styles.linearGradient}>

       <View style={styles.header}>
          <View style={{flexDirection:'row'}}>
          <Image
              style={styles.profile}
              source={require('../assets/img/faviconwh.png')}
          />
          <View style={{alignSelf:'center'}}>
            <Text style={{color:'#fff',fontFamily:'Poppins-Bold',fontSize:24}}>{i18n.t('Welcome_to_the')}</Text>
            {/* <Text style={{fontSize:19,color:'#fff',fontFamily:'Poppins-Regular'}}>{i18n.t('Finedict')}</Text> */}
          </View>
          </View>
          <ION name="menu" color="#fff" size={30} onPress={()=>navigation.navigate('Menu')} style={{alignSelf:'center',paddingVertical:'6%'}}></ION>
        </View>

        </LinearGradient>

        <ScrollView>
       
        {/* <ION onPress={()=>navigation.navigate('Menu')} name="menu" size={30} color="#fff"></ION> */}

       <View style={{padding:10}}>
       <View style={{ backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 50,paddingBottom:0,paddingTop:10}}>
        <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor:colors.primary
        }}
        
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
        
      />

        </View>
        {/* <Text style={[styles.heading,{marginTop:'-2%'}]}>Our Motto</Text> */}
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'-3%',marginBottom:20}}>
          <View style={styles.stepcard}>
            <Image
              style={styles.logo}
              source={require('../assets/img/flexible_Am.png')}
          />          
            <Text style={styles.stepText}>{i18n.t('Flexible_Amount')}</Text>
          </View>
          <View style={styles.stepcard}>
            <Image
              style={styles.logo}
              source={require('../assets/img/quick.png')}
          />          
            <Text style={styles.stepText}>{i18n.t('Quick_Disbursal')}</Text>
          </View>
          <View style={styles.stepcard}>
            <Image
              style={styles.logo}
              source={require('../assets/img/conveProcess.png')}
          />          
            <Text style={styles.stepText}>{i18n.t('Convenient_Process')}</Text>
          </View>
        </View>
        {/* <Text style={styles.heading}>{i18n.t('Quick_Apply')}</Text> */}
          <Button  
          onPress={()=>{setModalLogin(true)}} title={i18n.t('Apply_Now')}></Button>
          <Text style={[styles.heading,{marginTop:20}]}>{i18n.t('Our_Connected_Banks')}</Text>
          <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
          {/* <Carousel
                layout="default"
                layoutCardOffset={9}
                ref={isCarousel}
                data={LOGO}
                renderItem={CarouselBankLogo}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
              /> */}

            <Image style={styles.banklogo} source={require('../assets/img/bajaj.jpg')}></Image>
            <Image style={styles.banklogo} source={require('../assets/img/sbi.png')}></Image>
            <Image style={styles.banklogo} source={require('../assets/img/ICICI.jpg')}></Image>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
            <Image style={styles.banklogo} source={require('../assets/img/capri.jpg')}></Image>
            <Image style={styles.banklogo} source={require('../assets/img/axis.jpg')}></Image>
          </View>
       </View>
        </ScrollView>
        <FormModal modalLogin={modalLogin} setModalLogin={setModalLogin} navigation={navigation}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
      },
      linearGradient: {
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
        backgroundColor:colors.primary,
      },
      header:{
        flexDirection:'row',
        width:'100%',
        borderBottomEndRadius:35,
        borderBottomLeftRadius:35,
        paddingHorizontal:'6%',
        justifyContent:'space-between',
      },
      profile:{
        width:80,
        height:80,
        marginRight:10,
        alignSelf:'center'
      },
      bankcards:{
        width:320,
        height:120,
        marginTop:20,
        borderRadius:7,
      },
      stepcard:{
        width:'30%',
        padding:10,
        borderWidth:1,
        marginHorizontal:5,
        alignSelf:'center',
        alignItems:'center',
        borderRadius:7,
        shadowColor: "#f5f5f5",
        shadowOffset: {
        // width: 0,
        // height: 1
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        // elevation:3,
        // minHeight:150
        
      },
      logo:{
        width:30,
        height:30,
        marginRight:20,
        marginTop:5
      },
      stepText:{fontSize:14,
        color:'#000',fontFamily:'Poppins-SemiBold',marginTop:10
      },
        heading:{
        fontSize:20,
        color:'#000',fontFamily:'Poppins-SemiBold',marginTop:20,
        // textDecorationLine:'underline',
        textAlign:'center',
        marginBottom:10
        },
        banklogo:{
          width:'30%',
          height:80,
          resizeMode:'contain',
          borderRadius:15,
          elevation:3
        },
     
})