/**
 * Represents a travel destination with its details
 * @interface Destination
 * @property {string} id - Unique identifier for the destination
 * @property {string} name - Display name of the destination
 * @property {number} price - Price in IDR (Indonesian Rupiah)
 * @property {string} duration - Estimated travel duration
 * @property {string[]} departureTimes - Array of available departure times
 */
export interface Destination {
  id: string;
  name: string;
  price: number;
  duration: string;
  departureTimes: string[];
}

/**
 * Represents a transportation service provided by DAMRI
 * @interface ServiceItem
 * @property {string} id - Unique identifier for the service
 * @property {string} title - Name of the service
 * @property {string} url - URL to the service details page
 * @property {string} image - URL to the service image
 * @property {string} description - Short description of the service
 * @property {string} [longDescription] - Optional detailed description
 * @property {Destination[]} destinations - List of available destinations for this service
 */
export interface ServiceItem {
  id: string;
  title: string;
  url: string;
  image: string;
  description: string;
  longDescription?: string;
  destinations: Destination[];
}

/**
 * Possible views for the service modal
 * @typedef {'details' | 'booking' | 'confirmed'} ModalView
 * @description
 * - 'details': Shows service details and destination selection
 * - 'booking': Displays the booking form
 * - 'confirmed': Shows booking confirmation
 */
export type ModalView = 'details' | 'booking' | 'confirmed';

/**
 * Represents the booking information collected from the user
 * @interface BookingData
 * @property {string} name - Full name of the passenger
 * @property {string} email - Email address for booking confirmation
 * @property {string} phone - Contact phone number
 * @property {string} date - Selected travel date in YYYY-MM-DD format
 * @property {number} passengers - Number of passengers
 * @property {string} notes - Additional notes or special requests
 */
export interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  passengers: number;
  notes: string;
}
