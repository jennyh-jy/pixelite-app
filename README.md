# Introduction

This app aims to provide unique features to travel enthusiasts. It provides features to easily manipulate a "story" out of selected photos, while providing a platform to share your happy travel memories.

In short, this is a react-native travel stories sharing application with following features:
 - share and store travel stories
 - automatically image tagging system
 - creates travel stories conveniently
 - supports both iOS and Android

### Demo

bit.ly/pixelite_demo

# Getting Started

1. git clone https://github.com/TeamPixelite/Pixelite

2. run **npm install** to download the packages

3. run **react-native link**

4. depending on your platform
- iOS: run **react-native run-ios**
- Android: run **react-native run-android**

# Attention


## Client Side

This app utilizes multiple API keys which are used to access login and provide geo location informations.
Inside project folder create a javascript file named **"apis.js"** with following template. You will need to get your own api keys from Google and Amazon Web Service.

<pre><code>
exports.GOOGLE_PLACES_API_KEY = "*****************************";
exports.GOOGLE_FIREBASE_API_KEY = "*****************************";
exports.AWS_ACCESS_KEY = "*****************************";
exports.AWS_SECRET_KEY = "*****************************";
</pre></code>

### Only Android

Inside android > app > src > main > **AndroidManifest.xml**

inside ```<application>```
add
```
<meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="*******************************"
        />
```

fill out the key value with your own GOOGLE_GEOCODING_API_KEY

## Server Side

1. Go to PixeliteServer -> config, and create file named **"dev.js"** with following template.

```
module.exports = {
  mongoURI: ‘mongodb://*****:*****@******.mlab.com:*****/your-projectname’,
};
```

Search mongolab in google (http://docs.mlab.com/), after following quick-start quide to mlab, enter MongoDB URI in step3.

2. Configure the AWS
http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html

## Trouble shooting

Several trouble shooting cases
- Android: cannot delete folder or path
https://stackoverflow.com/questions/35674066/errorexecution-failed-for-task-appprocessdebugresources-java-io-ioexcept
