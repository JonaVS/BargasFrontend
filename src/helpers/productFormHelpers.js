import { v4 as uuid } from 'uuid';

export function cartItemBuilder(strapiProductData, formData) {
    // const strapiURL = 'https://res.cloudinary.com/dwnzq1ta2/image/upload/v1642185682/BargasDemo/'
    let cartItem = {
        id: strapiProductData.strapiId,
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

