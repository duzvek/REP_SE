import { FlatList, Modal, Text, View, Image, TouchableOpacity, StatusBar, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Playlist_styles';
import { useState } from 'react';
import CreatePlaylist from './CreatePlaylist';
import { useNavigation } from '@react-navigation/native';

const data = [
    { key: '1', title: 'Item 1', privacy: 'Public' },
    { key: '22', title: 'Item 232', privacy: 'Public' },
    { key: '23', title: 'Item 23213', privacy: 'Private' },
    { key: '24', title: 'Item 21312', privacy: 'Public' },
    { key: '25', title: 'Item 231231', privacy: 'Private' },
    { key: '26', title: 'Item 231231', privacy: 'Private' },
    { key: '62', title: 'Item 2124', privacy: 'Public' },
    { key: '27', title: 'Item 2441', privacy: 'Public' },
    { key: '82', title: 'Item 224', privacy: 'Private' },
    { key: '29', title: 'Item 5152', privacy: 'Public' },
    { key: '221', title: 'Item 152', privacy: 'Public' },
    { key: '213', title: 'Item 225', privacy: 'Private' },
    { key: '241', title: 'Item 2612', privacy: 'Public' },
    // Add more items as needed
];

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};

const Item = ({ title, privacy }) => (
    <View style={{
        flex: 1,
        alignItems: 'center'
    }}>
        <TouchableOpacity style={styles.itemRenderer}>
            <Image source={require('../../assets/nega.jpg')} style={styles.imgStyle} />
            <Text style={styles.albumTitle}>{title}</Text>
            <Text style={styles.albumPrivacy}>{privacy}</Text>
        </TouchableOpacity>
    </View>
);


function Playlist() {
    const navigation = useNavigation();
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedButton, setSelectedButton] = useState('all');

    const [inputValue, setInputValue] = useState('');
    const handleSubmit = () => {
        console.warn('tanga')
        setInputValue('');
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#212829' />
            <View style={styles.playlistHeaderStyle}>
                <TouchableOpacity onPress={() => console.log('hello')}>
                    <Ionicons name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>
                <View>
                    <Text style={{ color: 'white', fontSize: 17, fontWeight: '700', marginRight: '40%' }}> Playlist </Text>
                </View>
            </View>

            <View style={styles.playlistInputStyle}>
                <TextInput style={styles.playlistInputLabelStyle} placeholder='Search in Playlist' placeholderTextColor={'#999B9C'} returnKeyType='go'
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                    onSubmitEditing={handleSubmit} />
            </View>

            <View style={[styles.flexDirectionRowSpaceBetween]}>
                <TouchableOpacity style={styles.dropdownButton} onPress={() => setShowDropdown(!showDropdown)}>
                    <View style={styles.flexDirectionRow}>
                        <Text style={styles.dropdownButtonText}>All</Text>
                        <Ionicons name="chevron-back-outline" size={24} color="white"
                            style={{ transform: [{ rotate: '270deg' }] }} />
                    </View>

                    <Modal visible={showDropdown} transparent={true}>
                        <TouchableWithoutFeedback onPress={() => setShowDropdown(false)}>
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContentContainer}>
                                    <Text style={styles.modalDropdownButtonTitle}>Playlist View</Text>
                                    <TouchableOpacity
                                        style={[styles.dropdownContainer, selectedButton === 'all' && { backgroundColor: '#333839' }]}
                                        onPress={() => setSelectedButton('all')}
                                    >
                                        <Text style={styles.allDropdownButtonText}>All</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.dropdownContainer, selectedButton === 'public' && { backgroundColor: '#333839' }]}
                                        onPress={() => setSelectedButton('public')}
                                    >
                                        <Text style={styles.privateDropdownButtonText}>Public</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.dropdownContainer, selectedButton === 'private' && { backgroundColor: '#333839' }]}
                                        onPress={() => setSelectedButton('private')}
                                    >
                                        <Text style={styles.publicDropdownButtonText}>Private</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>

                </TouchableOpacity>

                <TouchableOpacity style={styles.dropdownButton} onPress={() => navigation.navigate('CreatePlaylist')}>
                    <View style={styles.flexDirectionRow}>
                        <Text style={styles.createPlaylistStyle}>Create Playlist</Text>
                        <Ionicons name="add-outline" size={24} color="#00C2FF" />
                    </View>
                </TouchableOpacity>
            </View>

            <FlatList
                data={formatData(data, 2)}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    if (item.empty === true) {
                        return <View style={[styles.item, styles.itemInvisible]} />;
                    }
                    return <Item title={item.title} privacy={item.privacy} />
                }}
            />

        </View>
    )
}

export default Playlist;