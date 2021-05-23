// import React, { useEffect, useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, ActivityIndicator, Alert } from 'react-native';
// import { TextInput } from 'react-native-paper';
// import { connect } from 'react-redux';
// import itinerariesActions from '../redux/actions/ItinerariesAction'

// const BoxComment = ({ comment, userLogged, idItinerary }) => {
//     const [visible, setVisible] = useState(false)
//     const [updatedComment, setUpdatedComment] = useState('')
//     return (
//         <View>
//             <View >
//                 <Text>foto</Text>
//             </View>
//             {visible ?
//                 <>
//                     <View>
//                         <TextInput />
//                     </View>
//                     <View >
//                         {/* <i className="fas fa-times-circle red icon-up" onClick={() => setVisible(!visible)}></i> */}
//                     </View>
//                 </>
//                 : <View >
//                     <Text>{comment.firstName}</Text>
//                     <Text>{comment.comment}</Text>
//                     {userLogged &&
//                         userLogged.firstName === comment.firstName &&
//                         <View >
//                             {/* <i className="fas fa-edit one icon-up" onClick={editComment}></i>
//                             <i className="fas fa-trash-alt icon-up"  onClick={deleteComment}></i> */}
//                         </View>
//                     }
//                 </View>
//             }
//         </View>
//     );
// }

// export default BoxComment;