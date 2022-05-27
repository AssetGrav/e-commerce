import React, { useContext, useEffect, useState } from "react";
import { auth, firebase } from "../../firebase";
import UserService from "../services/UserService";
import { Alert } from "react-native";

export const UserContext = React.createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export function UserProvider(props) {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [sign, setSign] = useState(false)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user)
                let uid = user.uid;
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [user])

    function getUser(email, password) {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                let userAdd = userCredentials.user
                setSign(true)
            })
            .catch(error => setError(error.message))
    }

    function signIn(email, password) {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const userIn = userCredentials.user
                console.log('Logged in with', userIn)
            })
            .catch(error => console.log(error))
    }
    
    function userUpgrade(changeName, text, text2) {
        const user = auth.currentUser;
        
        if(changeName === "displayName") {
            user.updateProfile({
                [changeName]: text,
            }).then((doc) => {
                console.log("doc", doc)
                // Update successful
                // ...
            }).catch((error) => {
                setError(error.message)
            });   
        } else if (changeName === "email") {
            user.updateEmail(text).then((doc) => {
                console.log("email", doc)
                // Update successful
                // ...
            }).catch((error) => {
                setError(error.message)
            });  
        } else if (changeName === "password") {
            const reauthenticate = (currentPassword) => {
                let user = auth.currentUser
                let cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword)
                return user.reauthenticateWithCredential(cred)
            }
            reauthenticate(text2).then(() => {
                user.updatePassword(text).then((doc) => {
                    console.log("doc", doc)
                    // Update successful
                    // ...
                }).catch((error) => {
                    setError(error.message)
                });  
            }).catch((error) => {
                Alert.alert(error.message)
            });  
            
        }
            
    }
    return (
        <UserContext.Provider value={{ user, getUser, userUpgrade, error, signIn }}>
           { props.children }
        </UserContext.Provider>
    )
}