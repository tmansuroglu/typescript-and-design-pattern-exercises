// use custom map to limit callable methods of map. To prevent errors created by coworkers use private
import User from "./User";
import Company from "./Company";
// you can refer a class as type too

// instructions to every other class on how they can be an argument to "addMarker"
interface Mappable {
  location: { latitude: number; longitude: number };
  markerContent(): string;
}

class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    // ctrl+left click on google shows documentation
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.latitude,
        lng: mappable.location.longitude,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}

export default CustomMap;
