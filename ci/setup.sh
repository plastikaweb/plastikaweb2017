#!/bin/bash

set -ev

# Setup Firebase and Translation config files
cat src/config/firebase.config.ts.sample \
    | sed "s/FIREBASE-APP-API-KEY/${FIREBASE_APP_API_KEY}/g" \
    | sed "s/FIREBASE-APP/${FIREBASE_APP}/g" \
    | sed "s/FIREBASE-APP-MESSAGING-SENDER-ID/${FIREBASE_APP_MESSAGING_SENDER_ID}/g" \
    | tee src/config/firebase.ts &>/dev/null

exit 0
