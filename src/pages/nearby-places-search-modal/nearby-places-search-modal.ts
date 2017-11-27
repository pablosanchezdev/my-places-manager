import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nearby-places-search-modal',
  templateUrl: 'nearby-places-search-modal.html',
})
export class NearbyPlacesSearchModalPage {

  keyword: string = '';
  price: object = { lower: 0, upper: 4 };
  type: string = '';
  sortByDistance: boolean = false;
  language: string = 'es';
  openNow: boolean = false;

  selectOptions = {
    title: 'Seleccione tipo'
  };

  types: object[] = [
    { name: 'Aeropuerto', value: 'airport' },
    { name: 'Agencia de seguros', value: 'insurance_agency' },
    { name: 'Parque de atracciones', value: 'amusement_park' },
    { name: 'Joyería', value: 'jewelry_store' },
    { name: 'Acuario', value: 'aquarium' },
    { name: 'Lavandería', value: 'laundry' },
    { name: 'Galería de arte', value: 'art_gallery' },
    { name: 'Abogado', value: 'lawyer' },
    { name: 'Cajero automático', value: 'atm' },
    { name: 'Biblioteca', value: 'library' },
    { name: 'Panadería', value: 'bakery' },
    { name: 'Tienda de licores', value: 'liquor_store' },
    { name: 'Banco', value: 'bank' },
    { name: 'Bar', value: 'bar' },
    { name: 'Cerrajero', value: 'locksmith' },
    { name: 'Salón de belleza', value: 'beauty_salon' },
    { name: 'Alojamiento', value: 'lodging' },
    { name: 'Tienda de bicicletas', value: 'bicycle_store' },
    { name: 'Librería', value: 'book_store' },
    { name: 'Comida para llevar', value: 'meal_takeaway' },
    { name: 'Bolera', value: 'bowling_alley' },
    { name: 'Mezquita', value: 'mosque' },
    { name: 'Estación de autobuses', value: 'bus_station' },
    { name: 'Videoclub', value: 'movie_rental' },
    { name: 'Cine', value: 'movie_theater' },
    { name: 'Museo', value: 'museum' },
    { name: 'Alquiler de coches', value: 'car_rental' },
    { name: 'Discoteca', value: 'night_club' },
    { name: 'Reparación de coches', value: 'car_repair' },
    { name: 'Lavado de coches', value: 'car_wash' },
    { name: 'Parque', value: 'park' },
    { name: 'Casino', value: 'casino' },
    { name: 'Parking', value: 'parking' },
    { name: 'Cementerio', value: 'cemetery' },
    { name: 'Tienda de mascotas', value: 'pet_store' },
    { name: 'Iglesia', value: 'church' },
    { name: 'Farmacia', value: 'pharmacy' },
    { name: 'Tienda de ropa', value: 'clothing_store' },
    { name: 'Supermercado', value: 'food' },
    { name: 'Policía', value: 'police' },
    { name: 'Oficina de correos', value: 'post_office' },
    { name: 'Médico', value: 'doctor' },
    { name: 'Restaurante', value: 'restaurant' },
    { name: 'Tienda de electrónica', value: 'electronics_store' },
    { name: 'Realidad virtual', value: 'rv_park' },
    { name: 'Embajada', value: 'embassy' },
    { name: 'Colegio', value: 'school' },
    { name: 'Centro comercial', value: 'shopping_mall' },
    { name: 'Estación de bomberos', value: 'fire_station' },
    { name: 'Spa', value: 'spa' },
    { name: 'Floristería', value: 'florist' },
    { name: 'Estadio', value: 'stadium' },
    { name: 'Funeraria', value: 'funeral_home' },
    { name: 'Estación de metro', value: 'subway_station' },
    { name: 'Sinagoga', value: 'synagogue' },
    { name: 'Parada de taxis', value: 'taxi_stand' },
    { name: 'Estación de tren', value: 'train_station' },
    { name: 'Gimnasio', value: 'gym' },
    { name: 'Agencia de viajes', value: 'travel_agency' },
    { name: 'Universidad', value: 'university' },
    { name: 'Veterinario', value: 'veterinary_care' },
    { name: 'Zoo', value: 'zoo' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) { }

  ionViewWillEnter() {
    // Sort types alphabetically
    this.types.sort((a: object, b: object) => {
      if (a['name'] < b['name']) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  applyFilters() {
    let filters = { keyword: this.keyword, price: this.price, type: this.type, 
      sortByDistance: this.sortByDistance, language: this.language, openNow: this.openNow };
    this.viewCtrl.dismiss(filters);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  resetFilters() {
    this.keyword = '';
    this.price = { lower: 0, upper: 4 };
    this.type = '';
    this.sortByDistance = false;
    this.language = 'es';
    this.openNow = false;
  }
}
