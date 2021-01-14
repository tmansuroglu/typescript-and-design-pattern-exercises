import User from "./User";
import Company from "./Company";
//although googlemaps is connected with script, it still needs type definitions. install @types/googlemaps

const user = new User();
const company = new Company();

new google.maps.Map(document.getElementById("map"));
