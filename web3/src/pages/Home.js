// src/pages/Home.js
import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Home.css';
import {check_domain_availability}  from '../components/universal_function';  

export default function Home() {
  const [domain, setDomain] = useState('');
  const [message, setMessage] = useState('');

  const handleCheckDomain = async () => {
    try {
      const result = await check_domain_availability(domain); 
      setMessage(result); 
    } catch (error) {
      setMessage('error');
    }
  };


  //return HTML space
  return (
    <div className="home-container">
       <input 
        type="text"
        value={domain} 
        onChange={(e) => setDomain(e.target.value)} 
        placeholder="请输入 .sol 域名"
        className="domain-input" 
      />
      <button onClick={handleCheckDomain}>Send Message</button>
    </div>
  );
}

