import React, { useState } from "react";
import Flag from "react-world-flags";
import InputMask from "react-input-mask";
import './phone.css'

const Format = [
{
id: 1,
name: "Беларусь",
code: "+375",
form: "(XX) XXX-XX-XX",
operator: ["МТС", "A1", "life:)"],
},
{
id: 2,
name: "Россия",
code: "+7",
form: "(XXX) XXX-XX-XX",
operator: ["Билайн", "Мегафон", "МТС", "Tele2"],
},
{
id: 3,
name: "Украина",
code: "+380",
form: "(XX) XXX-XX-XX",
operator: ["Lifecell", "Vodafone", "Київстар"],
},
{
id: 4,
name: "Польша",
code: "+48",
form: "XXX-XXX-XXX",
operator: ["Orange", "Play", "Plus", "T-mobile"],
},
{
id: 5,
name: "Литва",
code: "+370",
form: "(XX) XXX-XX-XX",
operator: ["Telia", "Bite", "Tele2"],
},
{
id: 6,
name: "Латвия",
code: "+371",
form: "XXXX-XXXX",
operator: ["LMT", "Tele2", "Bite"],
},
];

const Flags = {
Беларусь: "BY",
Россия: "RU",
Украина: "UA",
Польша: "PL",
Литва: "LT",
Латвия: "LV",
};




function PhoneInput() {
const [value, setValue] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");

let tab = [<option>...</option>];

for (let phone of Format) {
tab.push(
<option value={phone.name} key={phone.id}>
{phone.name}
</option>
);
}


let inp = [];

if(value === "Беларусь"){
  inp.push(
    <InputMask
    mask="(99) 999-99-99"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
  />
  )
}
else if(value === "Россия"){
  inp.push(
    <InputMask
    mask="(999) 999-99-99"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
  />
  )
}
else if(value === "Украина"){
  inp.push(
    <InputMask
    mask="(99) 999-99-99"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
  />
  )
}
else if(value === "Польша"){
  inp.push(
    <InputMask
    mask="999-999-999"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
  />
  )
}
else if(value === "Литва"){
  inp.push(
    <InputMask
    mask="(99) 999-99-99"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
  />
  )
}
else if(value === "Латвия"){
  inp.push(
    <InputMask
    mask="9999-9999"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
  />
  )
}






let pnumber = [];

if (value !== "") {
const country = Format.find((phone) => phone.name === value);
pnumber.push(
<div id={country.id}>
<input
       type="text"
       value={country.code}
       className="ph-code"
       readOnly
     />
{/*<input
       type="text"
       placeholder={country.form}
       
       className="ph-put"
/>*/}
{inp}
<div>
{country.operator.map((oper) => (
    <label key={oper}>
      <input type="radio" value={oper} name="ops" />  {console.log(oper)}{oper}
    </label>
))}

</div>
</div>
);
}






let flag = [];

if (value !== "") {
flag.push(<Flag code={Flags[value]} height={20} alt=" " />);
}

return (
<div className="phones">
<select value={value} onChange={(e) => setValue(e.target.value)}>
{tab}
</select>
{pnumber}
{flag}
</div>
);
}

export default PhoneInput;