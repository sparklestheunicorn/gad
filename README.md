# Welcome!

This is a read-only React client for https://debatemap.app. It was created as a volunteer project for
[The Society Library](https://www.societylibrary.org/).

For contributing code, see CONTRIBUTING.md

# How to set up an instance

Launching an instance of this app is relatively easy.

1. Populate a debate map at https://debatemap.app. That will contain the argument data that this application represents.
2. Set up a Netlify instance.
3. Point your DNS at the Netlify URL.

## 1. Populating the debate map

Head over to https://debatemap.app/ and read about what they do. Probably if you're interested in using this application,
you're already aware of Debate Map. Hopefully you have your data populated - if not, good luck to you!

## 2. Setting up a Netlify instance

You will need to create an account with Netlify. Once you have it, do the following:

1. From your team hompage, click the 'New site from Git' button
2. Maybe you have to make your own fork of this repo. I'm not sure honestly. I'll figure it out later.
3. Find this repo, then enter the deploy settings.

- Click "show advanced" to add new variables.
- You will need to add one for each setting in .env.example that you want to use

4. Once you have all the values assigned, click "Deploy site"
5. After that process finishes _TA DA!_ you should have a live version of this

## 3. Pount your DNS at the Netlify URL

Here are some instructions for that: https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/
