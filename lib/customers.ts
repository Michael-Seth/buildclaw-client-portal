export async function fetchCustomers() {
  return [
    {
      name: "evro-lifestyle",
      email: "femi4deal97@yahoo.com",
      logo: "https://brandmeals.com/wp-content/uploads/2024/08/evroLogo.png",
    },
    {
      name: "house-43",
      email: "oceanflowao@yahoo.com",
      logo: "https://brandmeals.com/wp-content/uploads/2024/08/house43Logo.png",
    },
  ];
}

export async function getCustomerData(customerName: string) {
  const customers = await fetchCustomers();
  return customers.find((customer) => customer.name === customerName);
}
