/* global gapi */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { Provider } from 'react-redux';
import GlobalStyles from './assets/styles/globalStyle';
import { store } from './redux/store';
import Routes from './router';
import AppProvider from './AppProvider';
import React, { useEffect, useCallback, useState } from 'react';
import PhotoServiceContext from './containers/MediaLibrary/PhotoServiceContext';
//import GooglePhotosService from './containers/MediaLibrary/GooglePhotosService';

const SCOPE = 'https://www.googleapis.com/auth/photoslibrary.readonly';

function App(props) {
  /*const [initialising, setInitialising] = useState(true);
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [photoService, setPhotoService] = useState(undefined);

   useEffect(() => {
    console.log("we've mounted");

    const intervalId = setInterval(() => {
      if (!window.gapi) {
        return;
      }

      clearInterval(intervalId);
      gapi.load('client:auth2', () => {
        gapi.client
          .init({
            discoveryDocs: [
              'https://photoslibrary.googleapis.com/$discovery/rest?version=v1',
            ],
            clientId: props.gapiID,
            scope: SCOPE,
          })
          .then(function () {
            setInitialising(false);

            const auth = gapi.auth2.getAuthInstance();
            auth.signIn();
            auth.isSignedIn.listen(() => {
              setIsAuthorised(user.hasGrantedScopes(SCOPE));
            });

            const user = auth.currentUser.get();
            const startAuth = user.hasGrantedScopes(SCOPE);
            console.log(new GooglePhotosService(gapi.client))
            setPhotoService(new GooglePhotosService(gapi.client));
            setIsAuthorised(startAuth);

            // gapi.client.photoslibrary.albums.list({})
            //   .then(function(response) {
            //     // Handle the results here (response.result has the parsed body).
            //     console.log("Album Response", response);
            //   });
          });
      });
    }, 100);
  }, [props.gapiID]);
*/
  //gapi.auth2.getAuthInstance().signIn();

  return (
    <Provider store={store}>
      <AppProvider>
        <>
          <GlobalStyles />
          <Routes />
        </>
      </AppProvider>
    </Provider>
  );
};

export default App;
