import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const footerLinks = {
  services: [
    { id: 1, title: 'Pathology', path: '/pathology' },
    { id: 2, title: 'Ambulance', path: '/ambulance' },
    { id: 3, title: 'Radiology', path: '/radiology' },
    { id: 4, title: 'Pharmacy', path: '/pharmacy' },
  ],
  healthCheckup: [
    { id: 1, title: 'Women Health', path: '/women-health' },
    { id: 2, title: 'Cancer Screening', path: '/cancer-screening' },
    { id: 3, title: 'Cardiac Health', path: '/cardiac-health' },
    { id: 4, title: 'MRI Checkup', path: '/mri-checkup' },
  ],
  departments: [
    { id: 1, title: 'General', path: '/general' },
    { id: 2, title: 'Dermatology', path: '/dermatology' },
    { id: 3, title: 'Cardiology', path: '/cardiology' },
    { id: 4, title: 'Cancer', path: '/cancer' },
  ],
  quickLinks: [
    { id: 1, title: 'License', path: '/license' },
    { id: 2, title: 'Changelog', path: '/changelog' },
  ],
  socialLinks: [
    { id: 1, icon: <FaFacebook />, path: '#' },
    { id: 2, icon: <FaTwitter />, path: '#' },
    { id: 3, icon: <FaPinterest />, path: '#' },
    { id: 4, icon: <FaInstagram />, path: '#' },
  ],
};

export default footerLinks;
