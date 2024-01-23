'use client';
import React, { useState } from 'react';
import { Container, Button, Divider, CheckupTabSelector } from '..';
import { tabs } from '@/data/tabsData';
import Image from 'next/image';

const CheckupPlansSection = () => {
  const [tabsData, setTabsData] = useState(tabs);

  const handleActiveTab = (tabId) => {
    const updatedTabs = tabsData.map((tab) => ({
      ...tab,
      active: tab.id === tabId,
    }));
    setTabsData(updatedTabs);
  };

  const activeTabContent = tabsData.find((tab) => tab.active)?.content;

  return (
    <section>
      <Container>
        <div>
          <div className="text-center lg:px-24">
            <div className="mb-8 md:mx-auto md:w-3/5">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-[40px]">
                Health Checkup Plans
              </h2>
              <p className="text-lg md:text-xl">
                They live in Bookmarks grove right at the coast of the
                Semantics, a large language ocean named flows.
              </p>
            </div>
            <CheckupTabSelector
              tabsData={tabsData}
              handleActiveTab={handleActiveTab}
            >
              <div className="relative mt-10 text-left md:mt-8">
                {activeTabContent && (
                  <div className="flex flex-col md:flex-row md:justify-between md:gap-10">
                    <div className="md:w-1/2">
                      <span className="w-15 h-15 flex items-center justify-center rounded-full bg-primary-500 p-3">
                        <Image
                          src="/logo-white.png"
                          width={50}
                          height={50}
                          className=""
                        />
                      </span>
                      <h2 className="mb-6 mt-4 text-2xl font-bold md:text-3xl">
                        {activeTabContent.title}
                      </h2>
                      <p className="mb-4 text-lg font-medium">
                        {activeTabContent.description}
                      </p>
                      <ul className="mb-8 mt-8 space-y-6 md:mb-14">
                        {activeTabContent.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <span className="min-h-5 flex h-5 w-5 min-w-[20px] items-center justify-center rounded-full bg-black">
                              <Image
                                src="/white-tick.svg"
                                width={12}
                                height={12}
                              />
                            </span>
                            <p className="text-xl font-medium">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <Button
                        title="Take An Appointment"
                        styles="md:w-max hidden md:block"
                      />
                    </div>
                    <div className="relative flex justify-center md:w-1/2 md:max-w-[385px]">
                      <Image
                        src={activeTabContent.image.path}
                        alt={activeTabContent.image.alt}
                        width={264}
                        height={200}
                        className="relative z-[3] w-full object-cover md:overflow-visible"
                      />
                      <div className="absolute bottom-0 h-[128px] w-full rounded-2.5xl bg-secondary "></div>
                    </div>
                    <Button
                      title="Take An Appointment"
                      styles="md:w-max mt-14 md:hidden"
                    />
                  </div>
                )}
              </div>
            </CheckupTabSelector>
          </div>
        </div>
      </Container>
      <Divider paddingVertical="py-8" />
    </section>
  );
};

export default CheckupPlansSection;
