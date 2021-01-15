// use custom map to limit callable methods of map. To prevent errors created by coworkers use private
import User from "./User";
import Company from "./Company";
// you can refer a class as type too

class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    // ctrl+left click on google shows documentation
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: { lat: user.location.latitude, lng: user.location.longitude },
    });
  }
}

export default CustomMap;
