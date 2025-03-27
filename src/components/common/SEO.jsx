import { Helmet } from 'react-helmet'
import MainImage from '../../assets/images/MainImage.png'

function SEO({ title, description, image, url }) {
  const fullTitle = title ? `${title} | My Awesome Shop` : 'My Awesome Shop'
  const fullUrl = url || window.location.href
  const ogImage = image || MainImage

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}

export default SEO
