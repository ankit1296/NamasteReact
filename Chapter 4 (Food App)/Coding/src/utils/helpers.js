export function fetchMoreRestaurantsPayload(lat, lng, _csrf) {
  return {
    lat,
    lng,
    nextOffset: "COVCELQ4KICYw7/U3K7VCzCnEzgB",
    widgetOffset: {
      NewListingView_category_bar_chicletranking_TwoRows: "",
      NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
      Restaurant_Group_WebView_PB_Theme: "",
      Restaurant_Group_WebView_SEO_PB_Theme: "",
      collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "10",
      inlineFacetFilter: "",
      restaurantCountWidget: "",
    },
    filters: {},
    seoParams: {
      seoUrl: "https://www.swiggy.com/",
      pageType: "FOOD_HOMEPAGE",
      apiName: "FoodHomePage",
    },
    page_type: "DESKTOP_WEB_LISTING",
    _csrf,
  };
}
