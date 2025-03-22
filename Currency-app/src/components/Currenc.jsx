import React, { useState } from 'react'
import '../css/currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios'

// https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_R0GX2Tg8sgYOWk9iLPSJsVdyDNsr7hlrOcBcCb65&base_currency=EUR
const BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
const API_KEY = "fca_live_R0GX2Tg8sgYOWk9iLPSJsVdyDNsr7hlrOcBcCb65"


function Currenc() {

    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [ToCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState();



    const handleClick = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        const result = (response.data.data[ToCurrency] * amount).toFixed(2)
        setResult(result)
    };


    return (
        <div className='currency-div'>

            <div style={{ fontSize: "30px", fontFamily: "arial", backgroundColor: "black", color: "white", width: "100%", textAlign: "center" }}>
                <h3 >Döviz Kuru Uygulaması</h3>
            </div>

            <div style={{ marginTop: "20px" }}>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='amount' />
                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaRegArrowAltCircleRight style={{ fontSize: "35px", marginRight: "8px", paddingTop: "10px" }} />

                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
                <input type="number" value={result} onChange={(e) => setResult(e.target.value)} className='result' />
            </div>

            <div>
                <button onClick={handleClick} className='change-btn'>Çevir</button>
            </div>
        </div>
    )
}

export default Currenc