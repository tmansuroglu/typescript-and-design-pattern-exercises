import User from "./User";
import Company from "./Company";
//although googlemaps is connected with script, it still needs type definitions. install @types/googlemaps
import CustomMap from "./CustomMap";

const customMap = new CustomMap("map");
const user = new User();
const company = new Company();

customMap.addUserMarker(user);
