import { CONTACT_INFO } from './contact-info';

export function getContactInfo(locale: string = 'es') {
  return {
    ...CONTACT_INFO,
    hours: CONTACT_INFO.hours[locale as keyof typeof CONTACT_INFO.hours] || CONTACT_INFO.hours.es
  };
}