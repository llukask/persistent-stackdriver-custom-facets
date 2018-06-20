let loc = window.location.toString();
if(loc.includes("&customFacets=&") 
  && localStorage["sdp-custom-fields"] !== undefined 
  && localStorage["sdp-custom-fields"] !== "") {
  console.log("setting new location with facets!");
  window.location = loc.replace("&customFacets=&", "&customFacets=" + localStorage["sdp-custom-fields"] + "&");
} else if(!loc.includes("customFacets")) {
  console.log("initial load!");
  window.location = loc + "&customFacets=" + localStorage["sdp-custom-fields"];
}

setTimeout(() => { document.body.style.border = ""; }, 5000);

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
