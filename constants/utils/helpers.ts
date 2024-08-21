// utils/formatPrice.js
export const formatPrice = (price: number) => {
    if (price === 0) {
      return 'Coming soon';
    }
    return `₦${price.toLocaleString()}`;
  };

  export function extractCustomerName(path: string): string {
    const customerName = path.split('/')[1];
  
    const formattedName = customerName
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  
    return formattedName;
  }
  