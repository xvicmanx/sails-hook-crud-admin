const Page = ({ body, title, injection }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
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
