import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request: any, response: any) => {
  functions.logger.info("Hello logs!", {structuredData: true});

  response.send(`Hello from Firebase!, environment ${process.env.ENV_NAME}, repo: ${process.env.REPO_NAME}`);
});
