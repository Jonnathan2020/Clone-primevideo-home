import {Text, View, StyleSheet, Image, TouchableHighlight, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import ButtonPlay from "../../assets/play.png"
import MovieTheWheel from "../../assets/movies/the_wheel_of_time.png";
import { MoviesCard } from '../../components/MoviesCard';
import {MOVIESWATCHING} from "../../utils/moviesWatching";
import {MOVIESCRIME} from "../../utils/moviesCrimes";
import {MOVIESWATCH} from "../../utils/moviesWatch";


export const Home = () =>{
   return(
    <View style={styles.container}>
        <View style={styles.header}> 
            <Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
            <Image style={styles.amazonLogoImg} source={AmazonLogo}/>
        </View>


        <View style={styles.category}>
            <TouchableHighlight>
                <Text style={styles.categoryTxt}>Home</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={styles.categoryTxt}>Tv Shows</Text>
            </TouchableHighlight>
            
            <TouchableHighlight>
                <Text style={styles.categoryTxt}>Movies</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={styles.categoryTxt}>Kids</Text>
            </TouchableHighlight>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
            <TouchableOpacity style={styles.movieImgHeader}>
                <Image style={styles.movieImgHome} source={MovieTheWheel}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.playHeader}>
                <Image style={styles.btnPlay} source={ButtonPlay} />
                <Text>PLAY</Text>
            </TouchableOpacity>

            <Text style={styles.movieTxt}>Continue Watching</Text>
            <FlatList
                data={MOVIESWATCHING}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard movieURL = {item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.movieTxt}>Crime Movies</Text>
            <FlatList
                data={MOVIESCRIME}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard movieURL = {item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={true}
            />  
            
            <Text style={styles.movieTxt}>Watch in your language</Text>
            <FlatList
                data={MOVIESWATCH} 
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard movieURL = {item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={true}
            />

        </ScrollView>    
    </View>
   );    
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#232F3E",
        alignItems: "flex-start",
    },
    header:{
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    amazonLogoImg:{
        marginTop: -30,
        marginLeft: 25,
    },
    category:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15,

    },
    categoryTxt:{
        fontSize: 14,
        fontWeight: "500",
        color: "#fff",
    },
    movieImgHeader:{
        width: "100%",
        alignItems:"center",
    },
    contentList:{
        paddingLeft: 18,
        paddingRight:30,
        marginBottom: 10,

    },
    movieTxt:{
        color: "#fff",
        fontSize:18,
        fontWeight: "500",
        padding: 15,
    },
    
    playHeader:{
        position: 'relative',
        width: 50,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        marginLeft: 220,
        marginTop: -20,
        marginBottom: -10,
        flexDirection: 'collumn',
    },
    btnPlay:{
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },
});