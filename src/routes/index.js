import routesList from './v1';

const routes = (app) => {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With, content-type, x-access-token, authorization'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.removeHeader('X-Powered-By');
    next();
  });

  app.use('/v1/', routesList);
  app.get('/', (req, res) => {
    res.status(200).send(`<h1>Welcome To The Records Fetching Application</h1>
      <h4>Please use PostMan and navigate to <code>/v1/records</code> to use the app</h4>
      <p>For any more info, please click
       <a href='https://github.com/akinyeleolat/recordsApiMongodb#readme'> here </a>
       to visit the repo.</P>
        <h4>Thanks  &#x1F600;</h4>`);
  });
};

export default routes;
