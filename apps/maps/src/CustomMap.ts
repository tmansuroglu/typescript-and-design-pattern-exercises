// use custom map to limit callable methods of map. To prevent errors created by coworkers use private

class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    // ctrl+left click on google shows documentation
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }
}

export default CustomMap;
