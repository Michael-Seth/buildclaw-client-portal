// utils/formatPrice.js
export const formatPrice = (price: number) => {
    if (price === 0) {
      return 'Coming soon';
    }
    return `₦${price.toLocaleString()}`;
  };
  