import { v4 as uuid } from 'uuid';

export function cartItemBuilder(strapiProductData, formData) {
    let cartItem = {
        id: strapiProductData.strapi_id,
        inCartId: uuid(), 
        name: strapiProductData.name,
        price: strapiProductData.price,
        mains: strapiProductData.mains,
        sides: strapiProductData.sides,
        thumbnail: `${strapiProductData.image.formats.thumbnail.url}`,
        qualityImg: strapiProductData.image.localFile.childImageSharp.gatsbyImageData,
        ...formData 
    }
    return cartItem
}