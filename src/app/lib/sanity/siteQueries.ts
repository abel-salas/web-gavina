import { groq } from 'next-sanity';

// Query for site configuration
export const siteConfigQuery = groq`
  *[_type == "siteConfig" && configType == $configType][0] {
    _id,
    configType,
    title,
    siteTitle,
    description,
    keywords,
    ogImage,
    // Navigation fields
    logoText,
    logoImage,
    // Contact fields
    address,
    phone,
    email,
    facebook,
    // Image fields
    heroBackgroundImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    heroImageUrl
  }
`;

// Specific query for site images
export const siteImagesQuery = groq`
  *[_type == "siteConfig" && configType == "site-images"][0] {
    heroBackgroundImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    heroImageUrl,
    historyBackgroundImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    historyImageUrl,
    locationBackgroundImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    locationImageUrl,
    // Specialty images
    arrocesImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    arrocesImageUrl,
    mariscosImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    mariscosImageUrl,
    pescadosImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    pescadosImageUrl,
    carnesImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
      alt
    },
    carnesImageUrl
  }
`;