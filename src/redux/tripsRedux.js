/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter((trip) => pattern.test(trip.name));
  }

  // TODO - filter by duration
  
  if (filters.duration) {
    const minDuration = filters.duration.from;
    const maxDuration = filters.duration.to;
    
    output=output.filter((trip)=>trip.days>= minDuration && trip.days <= maxDuration);
  }

  // TODO - filter by tags

  if (filters.tags.length>0){
    output=output.filter( trip=> filters.tags.every((tag) => trip.tags.includes(tag)));
  }

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  return trips.find((trip) => tripId == trip.id);
};

export const getTripsForCountry = ({trips}, countryCode) => {
  return trips.filter((trip) => trip.country.code == countryCode);
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
