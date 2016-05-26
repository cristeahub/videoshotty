# videoshotty


## Developer Setup

Install jpm:

```
npm install --global jpm
``` 

## Signing

Log on to https://addons.mozilla.org to get credentials.

```
jpm sign --api-key ${AMO_API_KEY} --api-secret ${AMO_API_SECRET}
```

This will upload an unlisted signed xpi to addons.mozilla.org.
Getting the xpi listed requires manual approval by Mozilla employees, so it is left as a task for another day.
