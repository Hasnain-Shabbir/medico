'use client';
import React, { useState } from 'react';
import { Button, LabelInput, SelectDropdown, TextArea } from '.';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="space-y-3 rounded-xl bg-white p-6 md:ml-auto md:max-w-[475px] lg:p-10">
      <LabelInput
        value={name}
        id="name"
        label="Name"
        placeholder="Name"
        type="text"
        onChange={setName}
        errorMessage="Please enter your name"
      />
      <LabelInput
        value={phone}
        id="phone"
        label="Phone"
        placeholder="Phone"
        type="tel"
        onChange={setPhone}
        errorMessage="Please enter your phone number"
      />
      <LabelInput
        value={email}
        id="email"
        label="Email"
        placeholder="Email"
        type="text"
        onChange={setEmail}
        errorMessage="Please enter your email"
      />
      <SelectDropdown
        options={[
          'Select appointment Type',
          'Cancer',
          'Diabetes',
          'Breast Cancer',
        ]}
      />
      <TextArea
        value={message}
        id="message"
        label="Message"
        placeholder="Message"
        height={160}
        onChange={setMessage}
      />
      <Button title="Submit Now" type="button" styles="w-full" />
    </div>
  );
};

export default AppointmentForm;
