// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
  async function domain_test() {
    const url = "";//test website
    const data = {

    };

    try {
      const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',  
        },
        body: JSON.stringify(data), 
      });

      if (response.ok){
        console.log("send success");
      }else{
        console.log('already send but failed:', response.statusText);
      }
    }catch(error){
      console.log("send domain info failed:", error);
    }
  }

  return (
    <div className="home-container">
      <button onClick={domain_test}>Send Message</button> 
    </div>
  );
}

