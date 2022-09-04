import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import colors from '../constant/colors'
import Button from '../components/Button'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/CarouselCardItem'
import ION from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)
  const data = [
    {
      title: "Aenean leo",
      body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",
    },
    {
      title: "In turpis",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: "https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Lorem Ipsum",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl: "https://images.pexels.com/photos/6289030/pexels-photo-6289030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
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
              source={require('../assets/img/logo.png')}
          />
          <View>
            <Text style={{color:'#fff',fontFamily:'Poppins-Bold',fontSize:20}}>Welcome to the</Text>
            <Text style={{fontSize:19,color:'#fff',fontFamily:'Poppins-Regular'}}>Finedict</Text>
          </View>
          </View>
          <ION name="menu" color="#fff" size={30} onPress={()=>navigation.navigate('Menu')}></ION>
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
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={styles.stepcard}>
            <Image
              style={styles.logo}
              source={require('../assets/img/flexible_A.png')}
          />          
            <Text style={styles.stepText}>Flexible Amount</Text>
          </View>
          <View style={styles.stepcard}>
            <Image
              style={styles.logo}
              source={require('../assets/img/Qd-f.png')}
          />          
            <Text style={styles.stepText}>Quick Disbursal</Text>
          </View>
          <View style={styles.stepcard}>
            <Image
              style={styles.logo}
              source={require('../assets/img/cp.png')}
          />          
            <Text style={styles.stepText}>Convenient Process</Text>
          </View>
        </View>
        <Text style={styles.heading}>Quick Apply</Text>
          <Button  
          onPress={()=>navigation.navigate('Contact')} title="Apply Now"></Button>
          <Text style={[styles.heading,{marginTop:30}]}>Our Connected Banks</Text>
          <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
            <Image style={styles.banklogo} source={require('../assets/img/hdfc.jpg')}></Image>
            <Image style={styles.banklogo} source={require('../assets/img/sbi.png')}></Image>
            <Image style={styles.banklogo} source={require('../assets/img/ICICI.jpg')}></Image>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
            <Image style={styles.banklogo} source={require('../assets/img/kotak.jpg')}></Image>
            <Image style={styles.banklogo} source={require('../assets/img/tatacapital.jpg')}></Image>
            <Image style={styles.banklogo} source={require('../assets/img/axis.jpg')}></Image>
          </View>
       </View>
        </ScrollView>
          
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5'
      },
      linearGradient: {
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
        backgroundColor:colors.primary,

      },

      header:{
        flexDirection:'row',
        // backgroundColor:colors.primary,
        width:'100%',
        borderBottomEndRadius:35,
        borderBottomLeftRadius:35,
        padding:'6%',
        height:120,
        justifyContent:'space-between'
      },
      profile:{
        backgroundColor:'#000',
        width:65,
        height:65,
        borderWidth:1,
        borderRadius:65,
        color:'#fff',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:30,
        marginRight:10,
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
        elevation:5,
        // minHeight:150
        
      },
      logo:{
        width:40,
        height:40,
        marginRight:20,
        marginTop:5
      },
      stepText:{fontSize:15,
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
          height:100,
          resizeMode:'contain',
          borderRadius:15,
          elevation:3
        },
     
})