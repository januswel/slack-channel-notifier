slack-channel-notifier
===

Getting started
---

In order to develop on local, Make a file named as .env with below lines.

```sh
export SLACK_OAUTH_TOKEN="xoxp-xxxxxxxxxxx-yyyyyyyyyyy-zzzzzzzzzzzz-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz"
export SLACK_INCOMING_WEBHOOK="TXXXXXXXX/BYYYYYYYY/ZZZZZZZZZZZZZZZZZZZZZZZZ"
```

Then use.

```sh
source .env
```

Get values for `SLACK_OAUTH_TOKEN` and `SLACK_INCOMING_WEBHOOK` from your Slack App.

Deployment
---

```sh
sls deploy
```
