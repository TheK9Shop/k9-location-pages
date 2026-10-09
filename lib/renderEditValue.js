/**
 * renderEditValue(fieldName, newValueStr)
 * Parses and renders different field types as HTML components
 * Used in approvals dashboard to show what's being edited
 */

const renderStaffCard = (staff, idx) => `
  <div style="${staffCardStyle}">
    ${staff.photo ? `<img src="${staff.photo}" alt="${staff.name}" style="${staffPhotoStyle}" />` : ''}
    <div style="${staffInfoStyle}">
      <p style="${staffNameStyle}"><strong>${staff.name}</strong></p>
      <p style="${staffTitleStyle}">${staff.title}</p>
    </div>
  </div>
`

const renderEventCard = (event, idx) => `
  <div style="${eventCardStyle}">
    ${event.image ? `<img src="${event.image}" alt="${event.title}" style="${eventImageStyle}" />` : ''}
    <div style="${eventInfoStyle}">
      <p style="${eventDateStyle}"><strong>${new Date(event.date).toLocaleDateString()}</strong></p>
      <p style="${eventTitleStyle}"><strong>${event.title}</strong></p>
      <p style="${eventDescStyle}">${event.description}</p>
    </div>
  </div>
`

const renderReviewCard = (review, idx) => `
  <div style="${reviewCardStyle}">
    <div style="${reviewHeaderStyle}">
      <p style="${reviewNameStyle}"><strong>${review.name}</strong></p>
      <p style="${reviewRatingStyle}">★ ${review.rating}/5</p>
    </div>
    <p style="${reviewTextStyle}">${review.text}</p>
    <p style="${reviewDateStyle}">${new Date(review.date).toLocaleDateString()}</p>
  </div>
`

const renderProductCard = (product, idx) => `
  <div style="${productCardStyle}">
    ${product.image ? `<img src="${product.image}" alt="${product.name}" style="${productImageStyle}" />` : ''}
    <div style="${productInfoStyle}">
      <p style="${productNameStyle}"><strong>${product.name}</strong></p>
      <p style="${productDescStyle}">${product.description}</p>
      ${product.price ? `<p style="${productPriceStyle}"><strong>$${product.price}</strong></p>` : ''}
    </div>
  </div>
`

const renderGalleryThumbnail = (image, idx) => `
  <div style="${galleryThumbStyle}">
    <img src="${image.url}" alt="${image.caption}" style="${galleryImageStyle}" />
    ${image.caption ? `<p style="${galleryCaptionStyle}">${image.caption}</p>` : ''}
  </div>
`

const renderSocialHandle = (social, idx) => `
  <div style="${socialHandleStyle}">
    <p><strong>${social.platform}:</strong> ${social.handle}</p>
  </div>
`

// Style objects
const staffCardStyle = `
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 12px;
`

const staffPhotoStyle = `
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
`

const staffInfoStyle = `
  width: 100%;
`

const staffNameStyle = `
  margin: 6px 0;
  font-size: 16px;
  color: #333;
`

const staffTitleStyle = `
  margin: 4px 0;
  font-size: 14px;
  color: #666;
`

const eventCardStyle = `
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px;
  background: white;
  max-width: 300px;
`

const eventImageStyle = `
  width: 100%;
  height: 180px;
  object-fit: cover;
`

const eventInfoStyle = `
  padding: 12px;
`

const eventDateStyle = `
  margin: 0 0 6px 0;
  font-size: 12px;
  color: #999;
`

const eventTitleStyle = `
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #333;
`

const eventDescStyle = `
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.4;
`

const reviewCardStyle = `
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  margin: 12px;
  background: #f9f9f9;
  max-width: 350px;
`

const reviewHeaderStyle = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

const reviewNameStyle = `
  margin: 0;
  font-size: 14px;
  color: #333;
`

const reviewRatingStyle = `
  margin: 0;
  font-size: 14px;
  color: #f59e0b;
`

const reviewTextStyle = `
  margin: 8px 0;
  font-size: 13px;
  color: #666;
  line-height: 1.5;
`

const reviewDateStyle = `
  margin: 0;
  font-size: 11px;
  color: #999;
`

const productCardStyle = `
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px;
  background: white;
  max-width: 250px;
`

const productImageStyle = `
  width: 100%;
  height: 180px;
  object-fit: cover;
`

const productInfoStyle = `
  padding: 12px;
`

const productNameStyle = `
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #333;
`

const productDescStyle = `
  margin: 0 0 8px 0;
  font-size: 12px;
  color: #666;
  line-height: 1.4;
`

const productPriceStyle = `
  margin: 0;
  font-size: 16px;
  color: #059669;
`

const galleryThumbStyle = `
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin: 8px;
  display: inline-block;
  max-width: 150px;
`

const galleryImageStyle = `
  width: 150px;
  height: 150px;
  object-fit: cover;
`

const galleryCaptionStyle = `
  padding: 8px;
  font-size: 12px;
  color: #666;
  text-align: center;
  background: #f9f9f9;
  margin: 0;
`

const socialHandleStyle = `
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 12px;
  margin: 8px;
  background: #f9f9f9;
`

const jsonPreviewStyle = `
  background: #f0f0f0;
  padding: 12px;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 12px;
  font-family: monospace;
  margin: 12px;
`

export function renderEditValue(fieldName, newValueStr) {
  try {
    const data = JSON.parse(newValueStr)

    // Staff field
    if (fieldName === 'staff' && Array.isArray(data)) {
      return {
        html: `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 8px;">
          ${data.map((staff, idx) => renderStaffCard(staff, idx)).join('')}
        </div>`,
        isHtml: true
      }
    }

    // Events field
    if (fieldName === 'events' && Array.isArray(data)) {
      return {
        html: `<div style="display: flex; flex-wrap: wrap;">
          ${data.map((event, idx) => renderEventCard(event, idx)).join('')}
        </div>`,
        isHtml: true
      }
    }

    // Reviews field
    if (fieldName === 'reviews' && Array.isArray(data)) {
      return {
        html: `<div style="display: flex; flex-wrap: wrap;">
          ${data.map((review, idx) => renderReviewCard(review, idx)).join('')}
        </div>`,
        isHtml: true
      }
    }

    // Gallery field
    if (fieldName === 'gallery' && Array.isArray(data)) {
      return {
        html: `<div style="display: flex; flex-wrap: wrap; gap: 4px;">
          ${data.map((image, idx) => renderGalleryThumbnail(image, idx)).join('')}
        </div>`,
        isHtml: true
      }
    }

    // Featured Products field
    if (fieldName === 'featured_products' && Array.isArray(data)) {
      return {
        html: `<div style="display: flex; flex-wrap: wrap;">
          ${data.map((product, idx) => renderProductCard(product, idx)).join('')}
        </div>`,
        isHtml: true
      }
    }

    // Social Media field
    if (fieldName === 'social_media' && Array.isArray(data)) {
      return {
        html: `<div style="display: flex; flex-wrap: wrap;">
          ${data.map((social, idx) => renderSocialHandle(social, idx)).join('')}
        </div>`,
        isHtml: true
      }
    }

    // Closure/Banner info
    if (fieldName === 'closure' && typeof data === 'object') {
      return {
        html: `<div style="border: 2px solid #dc2626; border-radius: 8px; padding: 16px; background: #fef2f2; margin: 12px;">
          <p><strong>Status:</strong> ${data.is_closed ? 'CLOSED' : 'OPEN'}</p>
          ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
          ${data.reopens_at ? `<p><strong>Reopens:</strong> ${new Date(data.reopens_at).toLocaleString()}</p>` : ''}
        </div>`,
        isHtml: true
      }
    }

    // Default: show as formatted JSON
    return {
      html: `<pre style="${jsonPreviewStyle}">${JSON.stringify(data, null, 2)}</pre>`,
      isHtml: true
    }
  } catch (e) {
    return {
      text: newValueStr,
      isHtml: false
    }
  }
}