export interface Place {
  place_id: string,
  name: string,
  geometry: {
    location: {
      lat: number,
      lng: number
    }
  },
  photos: [
    { photo_reference: string }
  ],
  reviews: [
    { rating: number }
  ]
}
