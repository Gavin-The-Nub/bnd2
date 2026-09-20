import test from 'node:test';
import assert from 'node:assert/strict';
import { servicesData, servicesContactInfo } from '../app/services/data.ts';

test('servicesData contains exactly 8 verified services', () => {
  assert.equal(servicesData.length, 8);
  const titles = servicesData.map(s => s.title);
  assert.deepEqual(titles, [
    'Hotel Booking',
    'Local and International Tour',
    'Local and International Ticketing',
    'Van Rental',
    'Educational Tour',
    'Team Building',
    'Insurance',
    'Visa Assistance',
  ]);
});

test('servicesData has accurate descriptions and quotes matching source document', () => {
  const hotel = servicesData.find(s => s.title === 'Hotel Booking');
  assert.equal(hotel.description, 'Book Your Stay and Wake up to Waves and Sunshine.');
  assert.equal(hotel.quote, "Looking for a place to stay when you travel. Don't worry We got you!");

  const van = servicesData.find(s => s.title === 'Van Rental');
  assert.equal(van.description, 'Your adventure is just a key turn away. Reliable van rental for your next getaway!');
  assert.equal(van.quote, 'Dependable like a friend! Reliable service for your travels');
});

test('servicesContactInfo matches official contact details', () => {
  assert.equal(servicesContactInfo.phone, '043 702 8516');
  assert.equal(servicesContactInfo.email, 'Bndtravels01@gmail.com');
  assert.equal(servicesContactInfo.facebook, 'BND Travel and Tours');
  assert.equal(servicesContactInfo.instagram, 'byahe_ni_drew_travel_and_tours');
});
