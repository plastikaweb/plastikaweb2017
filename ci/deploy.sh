#!/bin/bash

set -ev

ng build --prod --aot --build-optimizer
npm run precache
firebase deploy --project firebase-plastikaweb --token $FIREBASE_TOKEN --non-interactive

exit 0
