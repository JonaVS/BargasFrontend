import { v4 as uuid } from 'uuid';

export function cartItemBuilder(strapiProductData, formData) {
    let cartItem = {
        id: strapiProductData.strapi_id,
        inCartId: uuid(), 
        name: strapiProductData.nombre,
        price: strapiProductData.precio,
        ing_principales: strapiProductData.ing_principales,
        acompanamientos: strapiProductData.acompanamientos,
        thumbnail: `${strapiProductData.imagen.formats.thumbnail.url}`,
        qualityImg: strapiProductData.imagen.localFile.childImageSharp.gatsbyImageData,
        ...formData 
    }
    return cartItem
}

