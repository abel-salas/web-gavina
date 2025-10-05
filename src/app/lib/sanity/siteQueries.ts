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
    heroImageUrl
  }
`;