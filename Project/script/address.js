function address1(){
    return ` <div id="display">
            <input id="name" type="text" placeholder="Name*"/>
            <input id="phoneno" type="number" placeholder="Mobile No*"/>
            <input id="city" type="text" placeholder="City*"/>
            <input id="pin" type="number" placeholder="Pincode*"/>
            <input id="address" type="text" placeholder="Complete Address*"/>
            <br/>
            <input id ="home" name="exampleRadios" type="radio" placeholder="Home"/>
            <label id="hlabel" >Home</label>
            <input id="office" name="exampleRadios" type="radio" placeholder="Office"/>
            <label id="olabel">Office</label>
            <input id="others" name="exampleRadios" type="radio" placeholder="Others"/>
            <label id="oth">Others</label>
            <button id="cancel">Cancel</button>
            <button id="deliver">SAVE AND DELIVER HERE</button>
        </div>`
}
export default address1;