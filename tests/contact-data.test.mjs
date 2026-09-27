import test from 'node:test';
import assert from 'node:assert/strict';
import { contactData } from '../app/contact/data.ts';

test('contactData contains verified headers and callouts from contact.md', () => {
  assert.equal(contactData.header, 'Contact Us');
  assert.equal(contactData.tagline, 'Get To Know Us!');
  assert.equal(contactData.callout, 'Check our Social Media to get Information About Us!');
  assert.equal(contactData.motto, "LET'S GO AND TRAVEL WITH US");
});

test('contactData contains exact emails from contact.md', () => {
  assert.deepEqual(contactData.emails, [
    'Bndtravelsales@gmail.com',
    'Bndtravels01@gmail.com',
  ]);
});

test('contactData contains exact phone numbers from contact.md without mockups', () => {
  const phoneNumbers = contactData.phones.map(p => p.number);
  assert.deepEqual(phoneNumbers, [
    '0970 206 5826',
    '043 702 8516',
  ]);
});

test('contactData contains all 3 official social channels from contact.md', () => {
  assert.equal(contactData.socials.length, 3);

  const fb = contactData.socials.find(s => s.platform === 'facebook');
  assert.equal(fb.handle, 'BND Travel and Tours');

  const ig = contactData.socials.find(s => s.platform === 'instagram');
  assert.equal(ig.handle, 'BND Travel and Tours');

  const tiktok = contactData.socials.find(s => s.platform === 'tiktok');
  assert.equal(tiktok.handle, 'Byahe_ni_Drew Travel and Tours');
});

test('contactData contains official Enterprise and DOT Accreditation details from contact.md', () => {
  assert.equal(contactData.businessDetails.enterprise, 'BND TRAVEL AND TOURS OPC');
  assert.equal(contactData.businessDetails.dotAccreditation, 'DOT- R4A- TTA- 03110-2026');
});
