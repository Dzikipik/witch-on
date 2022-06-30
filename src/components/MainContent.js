import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../dataBase/firebase";

export default function MainContent() {
    const [userName, setUserName] = useState("");
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUserName(user.email);
          } else {
            setUserName("Brak zalogowanego użytkownika");
          }
        });
    
        return unsubscribe;
      }, []);
  
    return (
        <div>Witaj {userName}</div>
    );
  }


