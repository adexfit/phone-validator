function telephoneCheck(str) {
  
    if(/((^[1])(\s|\-)?[(]\d{3}[)-\s](\s)?\d{3}(\s|-)\d{4})|((^[1])(\s|\-)?\d{3}[-\s](\s)?\d{3}(\s|-)\d{4})|(^[0-9]{3}(-|)[0-9]{3}(-|)\d{4}$)|(^[(]\d{3}[)]\d{3}[-]\d{4})/.test(str) ){
      return true;
    }else{
      return false;
    }
  }