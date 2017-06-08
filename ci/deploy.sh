#!/bin/bash

set -ev

ng build --prod
firebase deploy --project $FIREBASE_APP --token $FIREBASE_TOKEN

exit 0
