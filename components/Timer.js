import React, { useState, useEffect } from 'react';
import { View, Button, Text, Animated, StyleSheet } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { Audio } from 'expo-av';

const main_time = 25*60
const break_time = 5*60

const Timer = () => {
    const [session, setSession] = useState(main_time);
    const [key, setKey] = useState(0)
    const [play, setPlay] = useState(false);
    const [sound, setSound] = useState();


    const stopTimer = () => {
        setPlay(false);
        setSession(main_time);
        setKey(prev => prev + 1);  
    }

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
           require('../assets/timer.mp3')
        );
        setSound(sound);
        await sound.playAsync(); }
    
    useEffect(() => {
        return sound
          ? () => {
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);
    
    return (
        <View style={styles.container}>
            <View style={styles.button}><Button 
                title="START TIMER"
                color="#15f3ff"
                onPress={() => setPlay(true)}
            /></View>
            <View style={styles.timer}><CountdownCircleTimer
                onComplete={() => {
                    playSound();
                    if (session == main_time){
                        setSession(break_time);
                    } else{
                        setSession(main_time);
                    }
                    setKey(prev => prev + 1);
                    return [true, 2500] // repeat animation in 2.5 seconds
                }}
                key={key}
                isPlaying={play}
                duration={session}
                colors={[
                ['#61ffb8', 0.2],
                ['#61f7ff', 0.2],
                ['#61a8ff', 0.2],
                ['#ff61a8', 0.2],
                ['#ff6961', 0.2],
                
                ]}
                
            >
                {({ remainingTime, animatedColor }) => {
                    let minutes = Math.floor(remainingTime / 60)
                    let seconds = remainingTime % 60
                    if (seconds.toString().length == 1){
                        seconds = "0" + seconds.toString()
                    }
                    if (minutes.toString().length == 1) {
                        minutes = "0" + minutes.toString()
                    }
                    return (
                        <Animated.Text style={{ color: animatedColor, fontSize: 50 }}>
                            {`${minutes}:${seconds}`}
                        </Animated.Text>
                    )
                }}
            </CountdownCircleTimer></View>
            <View style={styles.button}><Button 
                title="STOP AND RESET TIMER"
                color="#ff61a8"
                onPress={stopTimer}
            /></View>
        </View>
    );
};

const styles = StyleSheet.create({
    timer: {
        alignItems: 'center'
    },
    button: {
        marginVertical: 10
    },
    container: {
        paddingHorizontal: 50
    }
});


export default Timer;