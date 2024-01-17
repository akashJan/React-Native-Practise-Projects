
import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

function App(): React.JSX.Element {
  const [randomColor, setRandomColor] = useState('#ffffff');

  const genrateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, { backgroundColor: randomColor }]}>
        <TouchableOpacity onPress={genrateColor}>
          <View style={[styles.actionBtn, { backgroundColor: randomColor }]}>
            <Text style={styles.actionBtnTxt} >Press me</Text>
          </View>
        </TouchableOpacity >
        {/* [styles.sqaure, {backgroundColor: randomColor }] [styles.circle, {backgroundColor: randomColor }] */}
        {/* <View style={styles.sqaure} />;
        <View style={styles.circle} />; */}
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  actionBtn: { borderRadius: 12, paddingVertical: 10, paddingHorizontal: 40, borderWidth: 2, borderColor: 'black' },
  actionBtnTxt: { fontSize: 24, color: 'white', textTransform: 'uppercase' },
  // sqaure: { width: 100, height: 100, backgroundColor: 'blue', borderWidth: 2, borderColor: 'black' },
  // circle: { width: 100, height: 100, backgroundColor: 'blue', borderRadius: 50, borderWidth: 2, borderColor: 'black' },
});

export default App;
