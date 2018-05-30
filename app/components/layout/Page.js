const Page = ({ body, title, injection }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
      <script>
        ${injection}
      </script>
      <script src="/administrator/client.js"> </script>
    </body>
  </html>
`;

export default Page;
