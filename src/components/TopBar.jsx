import React from 'react';
import { MdLocationOn, MdOutlineMail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

import { ListItem, Container } from '.';

const TopBar = () => {
  return (
    <div className="bg-primary-500 py-3">
      <Container>
        <div className="flex w-full flex-col gap-2 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-10 md:justify-between lg:gap-12">
            <ListItem
              color="white"
              title="90919 Madie run Apt. 790"
              icon={<MdLocationOn size={22} />}
            />
            <ListItem
              color="white"
              title="medico@health.care"
              icon={<MdOutlineMail size={22} />}
            />
          </div>
          <ListItem
            styles=""
            color="white"
            title="Connect on Whatsapp"
            icon={<FaWhatsapp size={22} />}
          />
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
