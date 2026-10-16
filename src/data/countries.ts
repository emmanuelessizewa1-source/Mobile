import { CountryInfo } from '../types';

export const COUNTRIES: CountryInfo[] = [
  {
    code: 'TG',
    name: 'Togo',
    flag: '🇹🇬',
    currency: 'Franc CFA (XOF)',
    currencyCode: 'FCFA',
    popularOperators: ['Togocom (T-Money)', 'Moov Africa Togo (Moov Money)'],
    mobileMoneyServices: ['T-Money (*145#)', 'Moov Money (*155#)'],
    emergencyContacts: {
      police: '117',
      cybercrime: 'Brigade Centrale de Cybercriminalité (BCCR) Lomé'
    }
  },
  {
    code: 'BJ',
    name: 'Bénin',
    flag: '🇧🇯',
    currency: 'Franc CFA (XOF)',
    currencyCode: 'FCFA',
    popularOperators: ['MTN Bénin (MoMo)', 'Moov Africa Bénin', 'Celtiis (Alodo)'],
    mobileMoneyServices: ['MTN MoMo (*880#)', 'Moov Money (*855#)', 'Celtiis Cash (*888#)'],
    emergencyContacts: {
      police: '166',
      cybercrime: 'OCRC (Office Central de Répression de la Cybercriminalité)'
    }
  },
  {
    code: 'CI',
    name: 'Côte d’Ivoire',
    flag: '🇨🇮',
    currency: 'Franc CFA (XOF)',
    currencyCode: 'FCFA',
    popularOperators: ['Orange CI', 'MTN CI', 'Moov Africa CI', 'Wave Côte d’Ivoire'],
    mobileMoneyServices: ['Orange Money (#144#)', 'MTN MoMo (*133#)', 'Moov Money (*155#)', 'Wave CI'],
    emergencyContacts: {
      police: '170',
      cybercrime: 'PLCC (Plateforme de Lutte Contre la Cybercriminalité - 27 20 22 75 75)'
    }
  },
  {
    code: 'SN',
    name: 'Sénégal',
    flag: '🇸🇳',
    currency: 'Franc CFA (XOF)',
    currencyCode: 'FCFA',
    popularOperators: ['Orange Sénégal', 'Free Sénégal', 'Expresso', 'Wave Sénégal'],
    mobileMoneyServices: ['Orange Money (#144#)', 'Free Money (*150#)', 'Wave Sénégal', 'E-Money'],
    emergencyContacts: {
      police: '17',
      cybercrime: 'DSC (Division Spéciale de Cybersécurité Police Nationale)'
    }
  },
  {
    code: 'CM',
    name: 'Cameroun',
    flag: '🇨🇲',
    currency: 'Franc CFA (XAF)',
    currencyCode: 'FCFA',
    popularOperators: ['MTN Cameroon', 'Orange Cameroun', 'Camtel (Blue)', 'Nexttel'],
    mobileMoneyServices: ['MTN MoMo (*126#)', 'Orange Money (#150#)', 'Blue Money'],
    emergencyContacts: {
      police: '117',
      cybercrime: 'ANTIC (Agence Nationale des TIC)'
    }
  },
  {
    code: 'CD',
    name: 'RDC (Congo)',
    flag: '🇨🇩',
    currency: 'Franc Congolais (CDF) & USD',
    currencyCode: 'CDF',
    popularOperators: ['Vodacom RDC (M-Pesa)', 'Airtel RDC (Airtel Money)', 'Orange RDC', 'Africell'],
    mobileMoneyServices: ['M-Pesa (*1122# / *1222#)', 'Airtel Money (*501#)', 'Orange Money (*144#)'],
    emergencyContacts: {
      police: '112',
      cybercrime: 'Coordination Nationale de Sécurité Numérique Kinshasa'
    }
  }
];
