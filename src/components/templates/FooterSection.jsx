import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { PiTelegramLogo } from 'react-icons/pi';
import FooterLinks from '../FooterLinks';
import { Container, Divider, IconButton, Logo } from '..';
import footerLinks from '@/data/footerLinks';

const FooterSection = () => {
  return (
    <footer className="bg-primary-500 text-white">
      <Divider paddingVertical="py-10" />
      <Container>
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row">
            <div className="space-y-12">
              <Logo color="white" />
              <div className="space-y-5">
                <IconButton icon={<FaWhatsapp />} title="Take an Appointment" />
                <IconButton
                  icon={<PiTelegramLogo />}
                  title="Take an Appointment"
                />
              </div>
            </div>
            <FooterLinks linksData={footerLinks.services} title="Services" />
            <FooterLinks
              linksData={footerLinks.healthCheckup}
              title="health checkup"
            />
            <FooterLinks
              linksData={footerLinks.departments}
              title="departments"
            />
            <FooterLinks
              linksData={footerLinks.quickLinks}
              title="quick links"
            />
          </div>
          <ul className="ml-auto flex gap-5">
            {footerLinks.socialLinks.map((data) => (
              <li key={data.id}>
                <Link
                  href={data.path}
                  className="text-3xl transition-all hover:opacity-80"
                >
                  {data.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Divider paddingVertical="py-8" />
    </footer>
  );
};

export default FooterSection;
