import { baseData, countryData } from "./data";

type Country = keyof typeof countryData;

export function getData(country: Country = "nepal") {
  const override = countryData[country];

  return {
    ...baseData,
    contact: {
      ...baseData.contact,
      ...override.contact
    },
    services: [
      ...baseData.services,
      ...(override.extraServices || [])
    ]
  };
}