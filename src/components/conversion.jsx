import React, { useState } from "react";
import "../App.css";
import Alert from "./Alert";

function Conversion(props) {
  const [input_num, setinput_num] = useState(0);
  const [binary, setbinary] = useState("");
  const [octal, setoctal] = useState("");
  const [hexa, sethexa] = useState("");
  const [alert, setalert] = useState(false);
  let remainder_array = [];
  const decimal_conversion=(val, base_digit)=> {
    if (base_digit === 16) {
      let hexa_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let remainder = hexa_array[val % base_digit];
      remainder_array.unshift(remainder);
    } else {
      remainder_array.unshift(val % base_digit);
    }
    if (parseInt(val / base_digit) === 0) {
      if (base_digit === 2) {
        let temp_val = remainder_array.join("")
        remainder_array = []
        return temp_val
      } else if (base_digit === 8) {
        let temp_val = remainder_array.join("")
        remainder_array = []
        return temp_val
      } else if (base_digit === 16) {
        let temp_val = remainder_array.join("")
        remainder_array = []
        return temp_val
      }
    } else {
      return decimal_conversion(parseInt(val / base_digit), base_digit);
    }
  }
  const binary_to_decimal_only = (val, base_digit = 2) => {
    let binary_arr = val.toString().split("")
    let result = 0
    for (let i = 0; i < binary_arr.length; i++) {
      result = result + parseInt(binary_arr[i] * (base_digit ** (binary_arr.length - i - 1)))
    }
    return result
  }
  const binary_conversion = (val, base_digit = 2) => {
    const binaryRegex = /^[01]+$/;
    if (binaryRegex.test(val) === false) {
      setalert(true)
      setTimeout(() => { setalert(false) }, 2000)
      return 0
    };
    if (base_digit === 2) {
      let binary_arr = val.toString().split("")
      let result = 0
      for (let i = 0; i < binary_arr.length; i++) {
        result = result + parseInt(binary_arr[i] * (base_digit ** (binary_arr.length - i - 1)))
      }
      return result
    }
    else if (base_digit === 8) {
      let binary_arr = val.toString().split("")
      let temp_array = []
      let temp_num = 0
      let result_arr = []
      for (let j = 0; j < (parseInt((binary_arr.length) / 3) + 1); j++) {
        for (let i = 0; i < 3; i++) {
          temp_array.unshift(binary_arr[(binary_arr.length) - 1 - i + (-3 * j)])
          temp_num = temp_array.join("")
        }
        result_arr.unshift(binary_to_decimal_only(temp_num))
        temp_array = []
        temp_num = 0
      }
      return parseInt(result_arr.join(""));
    }
    else if (base_digit === 16) {
      let binary_arr = val.toString().split("")
      let temp_array = []
      let temp_num = 0
      let result_arr = []
      if (binary_arr.length <= 4){
        for (let j = 0; j < (parseInt((binary_arr.length) / 4)); j++) {
          for (let i = 0; i < 4; i++) {
            temp_array.unshift(binary_arr[(binary_arr.length) - 1 - i + (-4 * j)])
            temp_num = temp_array.join("")
          }
          let hexa_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
          result_arr.unshift(hexa_array[binary_to_decimal_only(temp_num)])
          temp_array = []
          temp_num = 0
        }
        return result_arr.join("")
      }
      else{
        for (let j = 0; j < (parseInt((binary_arr.length) / 4)+1); j++) {
          for (let i = 0; i < 4; i++) {
            temp_array.unshift(binary_arr[(binary_arr.length) - 1 - i + (-4 * j)])
            temp_num = temp_array.join("")
          }
          let hexa_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
          result_arr.unshift(hexa_array[binary_to_decimal_only(temp_num)])
          temp_array = []
          temp_num = 0
        }
        return result_arr.join("")
      }
    }
  };
  const octal_conversion = (val, base_digit = 8) => {
    if (base_digit === 8) {
      let octal_arr = val.toString().split("")
      let result = 0
      for (let i = 0; i < octal_arr.length; i++) {
        console.log(`result(${result}) = result(${result}) + parseInt(octal_arr[i](${octal_arr[i]}))( x (base_digit${base_digit}) ** (octal_arr.length(${octal_arr.length}) - i(${i}) - 1))`)
        result = result + parseInt(octal_arr[i] * (base_digit ** (octal_arr.length - i - 1)))
      }
      return result
    }
    else if (base_digit === 2) {
      let octal_arr = val.toString().split("")
      let result = ""
      let zero = "0"
      for (let i = 0; i < octal_arr.length; i++) {
        let binary_num = (decimal_conversion(octal_arr[i], 2)).toString()
        if(binary_num.length === 2){
          binary_num = zero+binary_num
        }
        else if(binary_num.length === 1){
          binary_num = zero+zero+binary_num
        }
        result = result+binary_num
      }
      return parseInt(result)
    }
    else if(base_digit === 16){
      let octal_arr = val.toString().split("")
      let result = ""
      for (let i = 0; i < octal_arr.length; i++) {
        let binary_num = (decimal_conversion(octal_arr[i], 2)).toString()
        if(binary_num.length === 2){
          binary_num = "0"+binary_num
        }
        else if(binary_num.length === 1){
          binary_num = "0"+"0"+binary_num
        }
        result = parseInt(result+binary_num)
      }
      return binary_conversion(result, 16)
    }
  };
  const hexa_conversion = (val = String, base_digit = 16) =>{
    if(base_digit === 16){
      let hexa_arr = val.toUpperCase().split("") 
      let hexa_digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
      let result = 0
      if (base_digit === 16) {
        console.log(hexa_arr)
        for (let i = 0; i < hexa_arr.length; i++) {
          if (hexa_digits.includes(hexa_arr[i])){
            hexa_arr[i] = hexa_digits.indexOf(hexa_arr[i])
          }
        }
      }
      for (let i = 0; i < hexa_arr.length; i++) {
        result = result + parseInt(hexa_arr[i] * (base_digit ** (hexa_arr.length - i - 1)))
      }
      return result
    }
    else if(base_digit === 2){
      let hexa_arr = val.toUpperCase().split("") 
      let hexa_digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
      let result = 0
      for (let i = 0; i < hexa_arr.length; i++) {
        if (hexa_digits.includes(hexa_arr[i])){
          hexa_arr[i] = hexa_digits.indexOf(hexa_arr[i])
        }
      }
      for (let i = 0; i < hexa_arr.length; i++) {
        result = result + parseInt(hexa_arr[i] * (16 ** (hexa_arr.length - i - 1)))
      }
      console.log(result)
      let binary_num = decimal_conversion(parseInt(result), 2)
      return binary_num
    }
    else if(base_digit === 8){
      let hexa_arr = val.toUpperCase().split("") 
      let hexa_digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
      let result = 0
      for (let i = 0; i < hexa_arr.length; i++) {
        if (hexa_digits.includes(hexa_arr[i])){
          hexa_arr[i] = hexa_digits.indexOf(hexa_arr[i])
        }
      }
      for (let i = 0; i < hexa_arr.length; i++) {
        result = result + parseInt(hexa_arr[i] * (16 ** (hexa_arr.length - i - 1)))
      }
      console.log(result)
      let binary_num = decimal_conversion(parseInt(result), 8)
      return binary_num
    }
  }
  return (
    <>
      {alert && <Alert alert type="danger" msg="Please enter a valid Binary number" />}
      <div className="card_flex">
        <div className="card transparent"></div>
        <div className="card bg-info border border-black  border-4">
          <div className="card-body">
            <h5 className="card-title text-black">Enter your number in {props.type}</h5>
            <hr style={{ color: "black" }} />
            <div className="input-group mb-3 border border-black rounded border-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter the number..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onKeyUp={(e) => {
                  e.preventDefault();
                  setinput_num(e.target.value);
                }}
              />
              <button
                className="input-group-text btn btn-dark"
                onClick={() => {
                  if (props.type === "Decimal") {
                    setbinary(decimal_conversion(input_num, 2))
                    setoctal(decimal_conversion(input_num, 8))
                    sethexa(decimal_conversion(input_num, 16))
                  }
                  else if (props.type === "Binary") {
                    setbinary(binary_conversion(input_num, 2));
                    setoctal(binary_conversion(input_num, 8));
                    sethexa(binary_conversion(input_num, 16));
                  }
                  else if (props.type === "Octal") {
                    setoctal(octal_conversion(input_num, 8))
                    setbinary(octal_conversion(input_num, 2))
                    sethexa(octal_conversion(input_num, 16))
                  }
                  else if (props.type === "HexaDecimal") {
                    setbinary(hexa_conversion(input_num, 2));
                    setoctal(hexa_conversion(input_num, 8));
                    sethexa(hexa_conversion(input_num, 16));
                  }
                }}
                id="basic-addon2"
              >
                Enter
              </button>
            </div>
          </div>
        </div>
        <div className="card transparent"></div>
      </div>
      <div className="cardflex">
        <div className="card bg-info border border-black  border-4">
          <div className="card-body">
            <h5 className="card-title text-black">{props.type} to {props.type === "Binary" ? "Decimal" : "Binary"}</h5>
            <hr style={{ color: "black" }} />
            <p className="card-text text-black fs-5">Output: {binary}</p>
          </div>
        </div>
        <div className="card bg-info border border-black  border-4">
          <div className="card-body">
            <h5 className="card-title text-black">{props.type} to {props.type === "Octal" ? "Decimal" : "Octal"}</h5>
            <hr style={{ color: "black" }} />
            <p className="card-text text-black fs-5">Output: {octal}</p>
          </div>
        </div>
        <div className="card bg-info border border-black  border-4">
          <div className="card-body">
            <h5 className="card-title text-black">{props.type} to {props.type === "HexaDecimal" ? "Decimal" : "HexaDecimal"}</h5>
            <hr style={{ color: "black" }} />
            <p className="card-text text-black fs-5">Output: {hexa}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conversion;
