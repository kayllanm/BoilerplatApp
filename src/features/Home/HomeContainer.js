import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native'
import * as RNFS from 'react-native-fs';

const HomeContainer = () => {
    const [directories, setDirectories] = useState([]);
    useEffect(() => {
        // get a list of files and directories in the main bundle
        RNFS.readDir(RNFS.MainBundlePath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
        .then((result) => {
            console.log('GOT RESULT', result);
        // setDirectories(result);

        // stat the first file
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
        })
        .then((statResult) => {
        if (statResult[0].isFile()) {
            // if we have a file, read it
            return RNFS.readFile(statResult[1], 'utf8');
        }

        return 'no file';
        })
        .then((contents) => {
            // log the file contents
            console.log(contents);
        })
        .catch((err) => {
            console.log(err.message, err.code);
        });
    }, []);
    return (
        <View style={{paddingTop: 80}}>
            <Text style={{color: 'black'}}>Hello Home page</Text>
        </View>
    )
};

export default HomeContainer;