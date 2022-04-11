import L from "leaflet";
// import iconUrl from "../../../assets/img/logo-web-white.png";
import iconUrl from "../../assets/img/avatar.webp";

const iconEman = new L.Icon({
  iconUrl: iconUrl,
  iconSize: [69, 69],
  iconAnchor: [69, 69],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

export { iconEman };
