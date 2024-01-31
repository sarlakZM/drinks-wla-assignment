export interface ProductModel {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface ProductListModel {
  drinks: ProductDetialsModel[];
}

export type ProductDetialsModel = ProductModel & {
  strDrinkAlternate?: string;
  strTags?: string;
  strVideo?: string;
  strCategory?: string;
  strIBA?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strImageSource?: string;
  strImageAttribution?: string;
  strCreativeCommonsConfirmed?: string;
  dateModified?: string;
  strInstructions?: string;
  strInstructionsES?: string;
  strInstructionsDE?: string;
  strInstructionsFR?: string;
  'strInstructionsZH-HANS'?: string;
  'strInstructionsZH-HANT'?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
};

export interface ProductListConfigModel {
  components: string[];
  layouts: {
    display: string;
    'flex-wrap': string;
    margin: string;
    'justify-content': string;
    'flex-direction': string;
  };
}

export interface ProductDetailConfigModel {
  cardsLayout: {
    display: string;
    'flex-wrap': string;
    'box-sizing': string;
    'justify-content': string;
    margin: string;
  };
  loadingTextSpinner: {
    position: string;
    top: string;
    left: string;
    'font-weight': string;
  };
}
