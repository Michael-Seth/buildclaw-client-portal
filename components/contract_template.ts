// utils/getHtmlContent.ts
export const getHtmlContent = async (data: any[], total: number) => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <h1>Service Report</h1>
        <table>
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            ${data.map(item => `
              <tr>
                <td>${item.serviceName}</td>
                <td>${item.price > 0 ? item.price : 'Coming soon'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <h2>Total: ${total}</h2>
      </body>
      </html>
    `;
  };
  