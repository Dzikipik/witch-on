import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../dataBase/firebase";

export default function NameDay() {
    return (
        <div className="main-content">Imieniny</div>
    );
  }
