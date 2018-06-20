let loc = window.location.toString();

if(loc.includes("&customFacets=&") 
  && localStorage["sdp-custom-fields"] !== undefined 
  && localStorage["sdp-custom-fields"] !== "") {
  // if there are customFacets in local storage and they are empty in the 
  // GET param replace the empty parameter value
  window.location = loc.replace("&customFacets=&", "&customFacets=" + localStorage["sdp-custom-fields"] + "&");
} else if(!loc.includes("customFacets")) {
  // on the initial page load if no customFacets GET param is present at all just add it to the end.
  window.location = loc + "&customFacets=" + localStorage["sdp-custom-fields"];
}

// searches for the "OK" button and the input of the customFacets save dialog
// and saves the facets to local storage if the "OK" button exists and is clicked
function interceptCustomFieldsSave() {
  let subButs = document.getElementsByName("submit");
  if (subButs.length == 0)
    return;
  let subBut = subButs[0];
  let inputs = document.getElementsByName("name");
  if (inputs.length == 0)
    return;
  let input = inputs[0];
  subBut.onclick = () => {
    console.log("Saving new custom fields: \"" + input.value + "\"");
    localStorage["sdp-custom-fields"] = input.value;
  }
}

setInterval(interceptCustomFieldsSave, 500);
